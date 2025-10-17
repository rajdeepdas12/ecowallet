import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useAuth } from "@/contexts/AuthContext";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  LogOut,
  Wallet,
  TrendingUp,
  Upload,
  Leaf,
  DollarSign,
  Users,
  BarChart3,
  Image as ImageIcon,
  Building2,
  Heart,
} from "lucide-react";

const Dashboard = () => {
  const { user, logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [stats, setStats] = useState({
    balance: 0,
    tokens: 0,
    uploads: 0,
    earnings: 0,
  });

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  useEffect(() => {
    // Animate counters on mount
    const targets = {
      public: { balance: 12450, tokens: 156, uploads: 23, earnings: 1245 },
      ngo: { balance: 45670, tokens: 890, uploads: 145, earnings: 8920 },
      company: { balance: 125000, tokens: 2340, uploads: 456, earnings: 34500 },
    };

    const target = targets[user?.type || "public"];
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      setStats({
        balance: Math.floor(target.balance * progress),
        tokens: Math.floor(target.tokens * progress),
        uploads: Math.floor(target.uploads * progress),
        earnings: Math.floor(target.earnings * progress),
      });

      if (step >= steps) clearInterval(timer);
    }, interval);

    return () => clearInterval(timer);
  }, [user?.type]);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  if (!user) return null;

  const getDashboardConfig = () => {
    switch (user.type) {
      case "ngo":
        return {
          title: "NGO Dashboard",
          icon: Heart,
          stats: [
            { label: "Total Funds Received", value: `$${stats.balance.toLocaleString()}`, icon: DollarSign },
            { label: "Carbon Tokens Earned", value: stats.tokens, icon: Leaf },
            { label: "Photos Uploaded", value: stats.uploads, icon: ImageIcon },
            { label: "Impact Score", value: stats.earnings, icon: TrendingUp },
          ],
          color: "from-green-500/20 to-emerald-500/20",
        };
      case "company":
        return {
          title: "Company Dashboard",
          icon: Building2,
          stats: [
            { label: "Total Investment", value: `$${stats.balance.toLocaleString()}`, icon: DollarSign },
            { label: "Tokens Purchased", value: stats.tokens, icon: Leaf },
            { label: "Projects Funded", value: stats.uploads, icon: BarChart3 },
            { label: "Carbon Offset (tons)", value: stats.earnings, icon: TrendingUp },
          ],
          color: "from-orange-500/20 to-amber-500/20",
        };
      default:
        return {
          title: "Public Dashboard",
          icon: Users,
          stats: [
            { label: "Total Balance", value: `$${stats.balance.toLocaleString()}`, icon: Wallet },
            { label: "Carbon Tokens", value: stats.tokens, icon: Leaf },
            { label: "Uploads", value: stats.uploads, icon: Upload },
            { label: "Earnings", value: `$${stats.earnings}`, icon: DollarSign },
          ],
          color: "from-primary/20 to-secondary/20",
        };
    }
  };

  const config = getDashboardConfig();
  const DashboardIcon = config.icon;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="border-b border-border bg-card/50 backdrop-blur-xl sticky top-0 z-50"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <motion.div
              className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-eco"
              whileHover={{ scale: 1.05 }}
            >
              EcoWallet
            </motion.div>
            <div className="h-8 w-px bg-border" />
            <div className="flex items-center gap-2 text-muted-foreground">
              <DashboardIcon className="w-5 h-5" />
              <span className="text-sm">{config.title}</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-sm font-medium">{user.name}</p>
              <p className="text-xs text-muted-foreground">{user.email}</p>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={handleLogout}
              className="gap-2"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </Button>
          </div>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl font-bold mb-2">
            Welcome back, {user.name} 🌱
          </h1>
          <p className="text-muted-foreground">
            Here's your eco-impact overview
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {config.stats.map((stat, index) => {
            const StatIcon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className={`p-6 bg-gradient-to-br ${config.color} border-border/50 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/20`}>
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-br ${config.color} border border-border/50`}>
                      <StatIcon className="w-5 h-5 text-primary" />
                    </div>
                    <TrendingUp className="w-4 h-4 text-green-500" />
                  </div>
                  <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                  <p className="text-3xl font-bold">{stat.value}</p>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Recent Activity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card className="p-6 bg-card/50 backdrop-blur-xl border-border/50">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Recent Activity</h2>
              <Button variant="outline" size="sm" className="gap-2">
                <BarChart3 className="w-4 h-4" />
                View All
              </Button>
            </div>

            <div className="space-y-4">
              {[
                { action: "Upload processed", amount: "+15 tokens", time: "2 hours ago", type: "success" },
                { action: "Token exchange", amount: "-50 tokens", time: "5 hours ago", type: "exchange" },
                { action: "Upload processed", amount: "+22 tokens", time: "1 day ago", type: "success" },
                { action: "Fund received", amount: "+$250", time: "2 days ago", type: "success" },
              ].map((activity, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="flex items-center justify-between p-4 rounded-lg bg-background/50 border border-border/50 hover:border-primary/50 transition-all"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-2 h-2 rounded-full ${activity.type === "success" ? "bg-green-500" : "bg-orange-500"} animate-pulse`} />
                    <div>
                      <p className="font-medium">{activity.action}</p>
                      <p className="text-sm text-muted-foreground">{activity.time}</p>
                    </div>
                  </div>
                  <p className={`font-semibold ${activity.amount.startsWith("+") ? "text-green-500" : "text-orange-500"}`}>
                    {activity.amount}
                  </p>
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* Impact Chart Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-12"
        >
          <Card className="p-6 bg-card/50 backdrop-blur-xl border-border/50">
            <h2 className="text-2xl font-bold mb-6">Eco Impact Analytics</h2>
            <div className="h-64 rounded-lg bg-gradient-to-br from-green-500/10 to-primary/10 border border-border/50 flex items-center justify-center">
              <div className="text-center">
                <BarChart3 className="w-16 h-16 text-primary/50 mx-auto mb-4" />
                <p className="text-muted-foreground">Analytics chart visualization</p>
              </div>
            </div>
          </Card>
        </motion.div>
      </main>
    </div>
  );
};

export default Dashboard;
