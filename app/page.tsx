import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { WorkGallery } from "@/components/WorkGallery";
import { LongFormWork } from "@/components/LongFormWork";
import { WhyQima } from "@/components/WhyQima";
import { ViewsShowcase } from "@/components/ViewsShowcase";
import { TrustMarquee } from "@/components/TrustMarquee";
import { Testimonials } from "@/components/Testimonials";
import { About } from "@/components/About";
import { Process } from "@/components/Process";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { LeadForm } from "@/components/LeadForm";
import { ScrollProgress } from "@/components/ScrollProgress";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <Services />
      <WorkGallery />
      <LongFormWork />
      <WhyQima />
      <ViewsShowcase />
      <TrustMarquee />
      <Testimonials />
      <About />
      <Process />
      <LeadForm />
      <Contact />
      <Footer />
      <ScrollProgress />
    </main>
  );
}