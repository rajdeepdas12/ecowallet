import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

interface NavigationProps {
  onLoginClick: (type: "public" | "ngo" | "company") => void;
}

export const Navigation = ({ onLoginClick }: NavigationProps) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const navItems = [
    { label: "Home", id: "hero" },
    { label: "About", id: "about" },
    { label: "Dashboard", id: "dashboard" },
    { label: "Upload", id: "upload" },
    { label: "Impact", id: "impact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <motion.div
          className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-eco"
          whileHover={{ scale: 1.05 }}
        >
          EcoWallet
        </motion.div>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="relative text-foreground/80 hover:text-foreground transition-colors group"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </button>
          ))}

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="bg-gradient-warm text-foreground font-semibold border-0"
              >
                Login <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-card/95 backdrop-blur-xl border-border">
              <DropdownMenuItem
                onClick={() => onLoginClick("public")}
                className="cursor-pointer hover:bg-primary/20"
              >
                Public Login
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => onLoginClick("ngo")}
                className="cursor-pointer hover:bg-primary/20"
              >
                NGO Login
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => onLoginClick("company")}
                className="cursor-pointer hover:bg-primary/20"
              >
                Company Login
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Mobile menu button */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild className="md:hidden">
            <Button variant="outline" size="sm">
              Menu
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-card/95 backdrop-blur-xl border-border w-48">
            {navItems.map((item) => (
              <DropdownMenuItem
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="cursor-pointer hover:bg-primary/20"
              >
                {item.label}
              </DropdownMenuItem>
            ))}
            <DropdownMenuItem
              onClick={() => onLoginClick("public")}
              className="cursor-pointer hover:bg-primary/20"
            >
              Public Login
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => onLoginClick("ngo")}
              className="cursor-pointer hover:bg-primary/20"
            >
              NGO Login
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => onLoginClick("company")}
              className="cursor-pointer hover:bg-primary/20"
            >
              Company Login
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </motion.nav>
  );
};
