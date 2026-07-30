import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Categories from "@/components/Categories";
import PortfolioGrid from "@/components/PortfolioGrid";
import Services from "@/components/Services";
import Process from "@/components/Process";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <TrustBar />
      <Categories />
      <PortfolioGrid />
      <Services />
      <Process/>
    </main>
  );
}
