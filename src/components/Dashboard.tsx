import { motion, useInView } from "framer-motion";
import { Card } from "@/components/ui/card";
import { useRef, useState, useEffect } from "react";
import { TrendingUp, Wallet, Target } from "lucide-react";

const stats = [
  { label: "Total Balance", value: 24580, prefix: "$", icon: Wallet },
  { label: "Monthly Spending", value: 3420, prefix: "$", icon: TrendingUp },
  { label: "Savings Goal", value: 85, prefix: "", suffix: "%", icon: Target },
];

const AnimatedCounter = ({ end, duration = 2, prefix = "", suffix = "" }: { end: number; duration?: number; prefix?: string; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isInView, end, duration]);

  return (
    <span ref={ref}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
};

export const Dashboard = () => {
  return (
    <section className="min-h-screen flex items-center justify-center py-24 px-6 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Your Financial Dashboard
          </h2>
          <p className="text-xl text-muted-foreground">
            Real-time insights at your fingertips
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <Card className="p-8 bg-[var(--glass-bg)] backdrop-blur-xl border-[var(--glass-border)] hover:shadow-[var(--glow-amber)] transition-all duration-300 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-warm opacity-10 blur-3xl group-hover:opacity-20 transition-opacity" />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 rounded-xl bg-primary/20">
                      <stat.icon className="w-6 h-6 text-primary" />
                    </div>
                    <span className="text-sm text-muted-foreground font-medium">{stat.label}</span>
                  </div>
                  <div className="text-4xl font-bold">
                    <AnimatedCounter
                      end={stat.value}
                      prefix={stat.prefix}
                      suffix={stat.suffix}
                    />
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 text-secondary text-sm">
            <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
            Bank-grade Security
          </div>
        </motion.div>
      </div>
    </section>
  );
};
