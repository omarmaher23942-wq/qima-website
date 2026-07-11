import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { WorkGallery } from "@/components/WorkGallery";
import { WhyQima } from "@/components/WhyQima";
import { TrustMarquee } from "@/components/TrustMarquee";
import { Testimonials } from "@/components/Testimonials";
import { About } from "@/components/About";
import { Process } from "@/components/Process";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { StickyWhatsApp } from "@/components/StickyWhatsApp";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <Services />
      <WorkGallery />
      <WhyQima />
      <TrustMarquee />
      <Testimonials />
      <About />
      <Process />
      <Contact />
      <Footer />
      <StickyWhatsApp />
    </main>
  );
}