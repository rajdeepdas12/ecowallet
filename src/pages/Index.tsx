import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Dashboard } from "@/components/Dashboard";
import { TokenSection } from "@/components/TokenSection";
import { Photos } from "@/components/Photos";
import { Impact } from "@/components/Impact";
import { Footer } from "@/components/Footer";
import { LoginModal } from "@/components/LoginModal";
import { FallingLeaves } from "@/components/FallingLeaves";

const Index = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [loginType, setLoginType] = useState<"public" | "ngo" | "company">("public");

  const handleLoginClick = (type: "public" | "ngo" | "company") => {
    setLoginType(type);
    setIsLoginOpen(true);
  };

  return (
    <div className="overflow-x-hidden relative">
      <FallingLeaves />
      <Navigation onLoginClick={handleLoginClick} />
      <div id="hero">
        <Hero />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="dashboard">
        <Dashboard />
      </div>
      <div id="upload">
        <TokenSection />
      </div>
      <div id="photos">
        <Photos />
      </div>
      <div id="impact">
        <Impact />
      </div>
      <Footer />
      <LoginModal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
        initialTab={loginType}
      />
    </div>
  );
};

export default Index;
