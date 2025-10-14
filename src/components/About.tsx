import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Handshake, TrendingUp, Zap } from "lucide-react";

const features = [
  {
    icon: Handshake,
    title: "Partnership Over Projects",
    description: "We build lasting relationships with transparent, collaborative banking solutions.",
  },
  {
    icon: TrendingUp,
    title: "Data-Driven Decisions",
    description: "Real-time insights help you optimize spending and maximize your impact.",
  },
  {
    icon: Zap,
    title: "Instant Transfers",
    description: "Lightning-fast transactions with bank-grade security, anytime, anywhere.",
  },
];

export const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Turning Everyday Banking into
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-eco">
              Effortless Momentum
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="p-8 bg-[var(--glass-bg)] backdrop-blur-xl border-[var(--glass-border)] hover:shadow-[var(--glow-green)] transition-all duration-300 hover:-translate-y-2 group">
                <div className="mb-6 inline-flex p-4 rounded-2xl bg-gradient-eco group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
