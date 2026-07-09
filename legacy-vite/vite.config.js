import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'

// Serves public/<slug>/index.html at /<slug> and /<slug>/ during `vite dev`,
// matching Vercel's static directory-index behavior. Without this, Vite's SPA
// fallback intercepts those paths and serves the React app's index.html.
function staticIndexFallback(slugs) {
  return {
    name: 'static-index-fallback',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const url = (req.url || '').split('?')[0]
        for (const slug of slugs) {
          if (url === `/${slug}` || url === `/${slug}/`) {
            try {
              const html = readFileSync(
                resolve(server.config.publicDir, slug, 'index.html'),
                'utf8'
              )
              res.setHeader('Content-Type', 'text/html;charset=utf-8')
              res.end(html)
              return
            } catch {
              // fall through if file is missing
            }
          }
        }
        next()
      })
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    staticIndexFallback(['robonky']),
  ],
})
