import { motion } from "framer-motion";
import { Leaf } from "lucide-react";

export const FallingLeaves = () => {
  const leaves = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 5,
    duration: 8 + Math.random() * 4,
    size: 20 + Math.random() * 20,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {leaves.map((leaf) => (
        <motion.div
          key={leaf.id}
          className="absolute text-primary/20"
          style={{
            left: `${leaf.left}%`,
            top: "-50px",
          }}
          animate={{
            y: ["0vh", "110vh"],
            x: [0, Math.sin(leaf.id) * 100, 0],
            rotate: [0, 360, 720],
          }}
          transition={{
            duration: leaf.duration,
            delay: leaf.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <Leaf size={leaf.size} />
        </motion.div>
      ))}
    </div>
  );
};
