import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative py-12 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-muted/20 to-transparent" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto relative z-10"
      >
        <div className="flex flex-col items-center gap-6 p-8 rounded-3xl bg-[var(--glass-bg)] backdrop-blur-xl border border-[var(--glass-border)]">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>© 2025 EcoWallet</span>
            <span>•</span>
            <span>Built for Sustainability</span>
          </div>
          
          <motion.div
            className="flex items-center gap-2 text-xs text-muted-foreground group cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <span>Made with</span>
            <Heart className="w-4 h-4 text-destructive group-hover:animate-pulse" />
            <span>in Lovable</span>
          </motion.div>

          <div className="flex gap-8 text-sm">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Privacy
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Terms
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};
