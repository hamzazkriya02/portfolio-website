import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Categories from "@/components/Categories";
import PortfolioGrid from "@/components/PortfolioGrid";
import Services from "@/components/Services";
import Process from "@/components/Process";
import WhyChooseMe from "@/components/WhyChooseMe";
import Reviews from "@/components/Reviews";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <TrustBar />
      <Categories />
      <PortfolioGrid />
      <Services />
      <Process />
      <WhyChooseMe />
      <Reviews />
      <Pricing />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
