import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Upload, Leaf, Coins } from "lucide-react";
import { useState } from "react";

export const TokenSection = () => {
  const [uploaded, setUploaded] = useState(false);

  const handleUpload = () => {
    setUploaded(true);
    setTimeout(() => setUploaded(false), 3000);
  };

  return (
    <section className="min-h-screen flex items-center justify-center py-24 px-6 bg-background relative overflow-hidden">
      {/* Floating icons */}
      <div className="absolute inset-0 pointer-events-none">
        {uploaded && (
          <>
            <motion.div
              className="absolute"
              initial={{ opacity: 0, y: 50, x: "45%" }}
              animate={{ opacity: [0, 1, 0], y: [50, -100], x: ["45%", "40%"] }}
              transition={{ duration: 2 }}
            >
              <Leaf className="w-12 h-12 text-secondary" />
            </motion.div>
            <motion.div
              className="absolute"
              initial={{ opacity: 0, y: 50, x: "55%" }}
              animate={{ opacity: [0, 1, 0], y: [50, -100], x: ["55%", "60%"] }}
              transition={{ duration: 2, delay: 0.2 }}
            >
              <Coins className="w-12 h-12 text-primary" />
            </motion.div>
          </>
        )}
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Turn Uploads into
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-eco">
              Carbon Credit Tokens
            </span>
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Every document, receipt, or sustainable action you upload contributes to a greener future
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div className="inline-flex flex-col items-center gap-6 p-12 rounded-3xl bg-[var(--glass-bg)] backdrop-blur-xl border-2 border-[var(--glass-border)] hover:border-primary/50 transition-all duration-300">
            <div className="w-24 h-24 rounded-full bg-gradient-eco flex items-center justify-center animate-float">
              <Upload className="w-12 h-12 text-foreground" />
            </div>
            
            <Button
              size="lg"
              onClick={handleUpload}
              className="bg-gradient-warm text-foreground font-semibold px-12 py-6 text-lg hover:shadow-[var(--glow-amber)] transition-shadow duration-300"
            >
              Upload & Earn Tokens
            </Button>

            {uploaded && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-lg font-semibold text-secondary"
              >
                ✓ Your Upload Earned 5 Carbon Tokens!
              </motion.div>
            )}
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 text-sm text-muted-foreground"
        >
          Track your impact in real-time • Transparent blockchain verification • Make a difference today
        </motion.p>
      </div>
    </section>
  );
};
