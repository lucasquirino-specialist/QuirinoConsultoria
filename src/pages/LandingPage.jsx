import Navbar from "../components/template/Navbar";
import Hero from "../components/template/Hero";
import About from "../components/template/About";
import Services from "../components/template/Services";
import TaxReform from "../components/template/TaxReform";
import Methodology from "../components/template/Methodology";
import Contact from "../components/template/Contact";
import Footer from "../components/template/Footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <TaxReform />
      <Methodology />
      <Contact />
      <Footer />
    </div>
  );
}