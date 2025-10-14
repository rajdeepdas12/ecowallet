import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Dashboard } from "@/components/Dashboard";
import { TokenSection } from "@/components/TokenSection";
import { Impact } from "@/components/Impact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <About />
      <Dashboard />
      <TokenSection />
      <Impact />
      <Footer />
    </div>
  );
};

export default Index;
