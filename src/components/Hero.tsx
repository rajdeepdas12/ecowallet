import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";
interface HeroProps {
  onGetStartedClick: () => void;
}
export const Hero = ({
  onGetStartedClick
}: HeroProps) => {
  const handleGetStarted = () => {
    onGetStartedClick();
  };
  const scrollToNext = () => {
    document.getElementById("about")?.scrollIntoView({
      behavior: "smooth"
    });
  };
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-hero opacity-90 z-10 mx-0 my-0" />
        <motion.img src={heroImage} alt="EcoWallet Hero" className="w-full h-full object-cover" initial={{
        scale: 1.1
      }} animate={{
        scale: 1
      }} transition={{
        duration: 10,
        ease: "easeOut"
      }} />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {[...Array(6)].map((_, i) => <motion.div key={i} className="absolute w-3 h-3 bg-primary/30 rounded-full blur-sm" style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`
      }} animate={{
        y: [-20, 20, -20],
        opacity: [0.3, 0.8, 0.3]
      }} transition={{
        duration: 3 + Math.random() * 2,
        repeat: Infinity,
        delay: Math.random() * 2
      }} />)}
      </div>

      {/* Welcome Animation */}
      <motion.div initial={{
      opacity: 0,
      scale: 0.5
    }} animate={{
      opacity: 1,
      scale: 1
    }} transition={{
      duration: 0.8,
      type: "spring"
    }} className="absolute top-24 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2 bg-primary/10 backdrop-blur-xl border border-primary/30 rounded-full px-[13px] my-[7px] py-[14px]">
        <Sparkles className="w-5 h-5 text-primary animate-pulse" />
        <span className="text-sm font-semibold text-primary">Welcome to EcoWallet</span>
        <Sparkles className="w-5 h-5 text-primary animate-pulse" />
      </motion.div>

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-5xl mx-auto">
        <motion.h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-foreground to-secondary" initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.5
      }}>
          Banking That Makes Every Action Count
        </motion.h1>

        <motion.p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto" initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.7
      }}>
          EcoWallet turns uploads into tradable carbon credit tokens — bridging sustainability and innovation
        </motion.p>

        <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.9
      }}>
          <Button size="lg" onClick={handleGetStarted} className="relative z-50 bg-gradient-warm text-foreground font-semibold px-8 py-6 text-lg hover:shadow-[var(--glow-amber)] transition-shadow duration-300">
            Get Started
          </Button>
        </motion.div>

        <motion.div className="absolute bottom-12 left-1/2 -translate-x-1/2 cursor-pointer" onClick={scrollToNext} animate={{
        y: [0, 10, 0]
      }} transition={{
        duration: 2,
        repeat: Infinity
      }}>
          
        </motion.div>
      </div>
    </section>;
};