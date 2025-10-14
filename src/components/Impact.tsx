import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const impacts = [
  { label: "Transfers Processed", value: 12000000, suffix: "+", period: "Monthly" },
  { label: "Satisfaction Rate", value: 98, suffix: "%", period: "Overall" },
  { label: "Carbon Offset", value: 45000, suffix: " tons", period: "This Year" },
];

const AnimatedImpactCounter = ({ end, duration = 2.5, suffix = "" }: { end: number; duration?: number; suffix?: string }) => {
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
      {count.toLocaleString()}{suffix}
    </span>
  );
};

export const Impact = () => {
  return (
    <section className="min-h-screen flex items-center justify-center py-24 px-6 relative overflow-hidden">
      {/* Parallax Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/10 to-background" />
      
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: "url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2310b981' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
        }}
        initial={{ y: 0 }}
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our Global Impact
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Together, we're building a more sustainable and transparent financial future
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12">
          {impacts.map((impact, index) => (
            <motion.div
              key={impact.label}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="text-center"
            >
              <div className="mb-4">
                <div className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-eco mb-2">
                  <AnimatedImpactCounter end={impact.value} suffix={impact.suffix} />
                </div>
                <div className="text-sm text-primary font-medium">{impact.period}</div>
              </div>
              <h3 className="text-xl font-semibold text-foreground">{impact.label}</h3>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex flex-col gap-4 p-8 rounded-2xl bg-[var(--glass-bg)] backdrop-blur-xl border border-[var(--glass-border)]">
            <p className="text-lg text-muted-foreground">
              Join thousands making a difference
            </p>
            <div className="flex items-center justify-center gap-2">
              <div className="w-3 h-3 bg-secondary rounded-full animate-pulse" />
              <span className="text-secondary font-semibold">Real-time impact tracking</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
