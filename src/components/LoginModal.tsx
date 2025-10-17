import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { X, Leaf, Building2, Users } from "lucide-react";
import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: "public" | "ngo" | "company";
}

export const LoginModal = ({ isOpen, onClose, initialTab = "public" }: LoginModalProps) => {
  const [activeTab, setActiveTab] = useState(initialTab);
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (type: "public" | "ngo" | "company") => {
    if (!email || !password) {
      toast.error("Please enter email and password");
      return;
    }

    login(email, password, type);
    toast.success(`Welcome to EcoWallet! Logging in as ${type}...`);
    onClose();
    setTimeout(() => {
      navigate("/dashboard");
    }, 500);
  };

  const LoginForm = ({ type }: { type: "public" | "ngo" | "company" }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="space-y-4"
    >
      <div className="space-y-2">
        <Label htmlFor={`${type}-email`}>Email</Label>
        <Input
          id={`${type}-email`}
          type="email"
          placeholder="your@email.com"
          className="bg-background/50"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleLogin(type)}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor={`${type}-password`}>Password</Label>
        <Input
          id={`${type}-password`}
          type="password"
          placeholder="••••••••"
          className="bg-background/50"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleLogin(type)}
        />
      </div>
      <Button 
        className="w-full bg-gradient-warm text-foreground font-semibold"
        onClick={() => handleLogin(type)}
      >
        Sign In
      </Button>
      <p className="text-sm text-muted-foreground text-center">
        Don't have an account?{" "}
        <button className="text-primary hover:underline">Sign up</button>
      </p>
    </motion.div>
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-md"
          >
            <div className="relative bg-card/95 backdrop-blur-xl rounded-2xl border border-border p-8 shadow-2xl">
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Floating particles */}
              <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-secondary/30 rounded-full blur-sm"
                    style={{
                      left: `${20 + i * 30}%`,
                      top: `${10 + i * 20}%`,
                    }}
                    animate={{
                      y: [-10, 10, -10],
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                      duration: 3 + i,
                      repeat: Infinity,
                      delay: i * 0.5,
                    }}
                  />
                ))}
              </div>

              <div className="relative z-10">
                <motion.h2
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-2xl font-bold mb-6 text-center"
                >
                  Welcome to EcoWallet
                </motion.h2>

                <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as any)}>
                  <TabsList className="grid w-full grid-cols-3 mb-6">
                    <TabsTrigger value="public" className="text-xs">
                      <Users className="w-4 h-4 mr-1" />
                      Public
                    </TabsTrigger>
                    <TabsTrigger value="ngo" className="text-xs">
                      <Leaf className="w-4 h-4 mr-1" />
                      NGO
                    </TabsTrigger>
                    <TabsTrigger value="company" className="text-xs">
                      <Building2 className="w-4 h-4 mr-1" />
                      Company
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="public">
                    <LoginForm type="public" />
                  </TabsContent>

                  <TabsContent value="ngo">
                    <LoginForm type="ngo" />
                  </TabsContent>

                  <TabsContent value="company">
                    <LoginForm type="company" />
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
