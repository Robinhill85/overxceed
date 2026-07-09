import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Site chrome for all main pages. /robonky (legacy, noindexed) intentionally
// sits outside this group and renders standalone, like the original page.
export default function SiteLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
