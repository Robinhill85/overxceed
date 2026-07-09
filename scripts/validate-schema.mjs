#!/usr/bin/env node
/**
 * P1-3 acceptance script: validates the JSON-LD in the BUILT html.
 *
 * Sources, in order of preference:
 *   1. A running server:   node scripts/validate-schema.mjs http://localhost:3000
 *   2. The .next SSG output (default): .next/server/app/{index,local,operator}.html
 *
 * Asserts:
 *   - every JSON-LD block parses as valid JSON
 *   - /         contains a ProfessionalService block
 *   - /local    contains a LocalBusiness block whose areaServed includes
 *               Redhill, Reigate and Surrey
 *   - /operator contains a Person block with sameAs (X + LinkedIn only)
 *   - the string "robinweb3" appears in NO schema block on any page
 *   - no schema block contains a currency figure (no-public-pricing ruling)
 */

import { readFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";

const BASE = process.argv[2] || null;

const PAGES = [
  { route: "/", file: ".next/server/app/index.html", expect: "ProfessionalService" },
  { route: "/local", file: ".next/server/app/local.html", expect: "LocalBusiness" },
  { route: "/operator", file: ".next/server/app/operator.html", expect: "Person" },
];

let failures = 0;
const fail = (msg) => {
  failures++;
  console.error(`  ✗ ${msg}`);
};
const ok = (msg) => console.log(`  ✓ ${msg}`);

async function getHtml(page) {
  if (BASE) {
    const res = await fetch(`${BASE.replace(/\/$/, "")}${page.route}`);
    if (!res.ok) throw new Error(`${page.route} returned HTTP ${res.status}`);
    return await res.text();
  }
  const path = resolve(process.cwd(), page.file);
  if (!existsSync(path)) {
    throw new Error(`${path} not found — run \`npm run build\` first, or pass a base URL`);
  }
  return readFileSync(path, "utf8");
}

function extractJsonLd(html) {
  const blocks = [];
  const re =
    /<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi;
  let m;
  while ((m = re.exec(html)) !== null) blocks.push(m[1]);
  return blocks;
}

function flatTypes(data) {
  const types = [];
  const walk = (node) => {
    if (Array.isArray(node)) return node.forEach(walk);
    if (node && typeof node === "object") {
      if (node["@type"]) types.push(...[].concat(node["@type"]));
      Object.values(node).forEach(walk);
    }
  };
  walk(data);
  return types;
}

for (const page of PAGES) {
  console.log(`\n${page.route}`);
  let html;
  try {
    html = await getHtml(page);
  } catch (e) {
    fail(e.message);
    continue;
  }

  const blocks = extractJsonLd(html);
  if (blocks.length === 0) {
    fail("no JSON-LD blocks found");
    continue;
  }
  ok(`${blocks.length} JSON-LD block(s) found`);

  const parsed = [];
  for (const [i, raw] of blocks.entries()) {
    try {
      parsed.push(JSON.parse(raw));
    } catch {
      fail(`block #${i + 1} is not valid JSON`);
    }
  }
  if (parsed.length === blocks.length) ok("all blocks parse as valid JSON");

  // Expected top-level type present
  const allTypes = parsed.flatMap((p) => [].concat(p["@type"] || []));
  if (allTypes.includes(page.expect)) {
    ok(`@type ${page.expect} present`);
  } else {
    fail(`expected @type ${page.expect}, found: ${allTypes.join(", ") || "none"}`);
  }

  // LocalBusiness areaServed check
  if (page.expect === "LocalBusiness") {
    const lb = parsed.find((p) => [].concat(p["@type"]).includes("LocalBusiness"));
    const areas = JSON.stringify(lb?.areaServed || []);
    for (const place of ["Redhill", "Reigate", "Surrey"]) {
      if (areas.includes(place)) ok(`areaServed includes ${place}`);
      else fail(`areaServed missing ${place}`);
    }
  }

  // Person sameAs check
  if (page.expect === "Person") {
    const person = parsed.find((p) => [].concat(p["@type"]).includes("Person"));
    const sameAs = person?.sameAs || [];
    const isXOrLinkedIn = (u) => /(^https:\/\/(x|twitter)\.com\/)|(linkedin\.com)/.test(u);
    if (sameAs.length > 0 && sameAs.every(isXOrLinkedIn)) {
      ok(`Person sameAs = X + LinkedIn only (${sameAs.length} links)`);
    } else {
      fail(`Person sameAs must contain X/LinkedIn links only, got: ${JSON.stringify(sameAs)}`);
    }
  }

  // No "robinweb3" in any schema block
  const joined = blocks.join("\n");
  if (/robinweb3/i.test(joined)) fail(`"robinweb3" found in a schema block`);
  else ok(`no "robinweb3" string in any schema block`);

  // No currency figures in schema (priceRange "££" band is allowed)
  if (/£\d|\$\d/.test(joined)) fail("currency figure found in a schema block");
  else ok("no currency figures in schema");
}

console.log("");
if (failures > 0) {
  console.error(`FAILED — ${failures} assertion(s) failed`);
  process.exit(1);
}
console.log("PASSED — all schema assertions hold");
