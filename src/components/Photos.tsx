import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Image as ImageIcon, TrendingUp, Leaf } from "lucide-react";

export const Photos = () => {
  const photos = [
    { id: 1, tokens: 15, location: "Amazon Rainforest", date: "2 days ago" },
    { id: 2, tokens: 22, location: "Pacific Ocean Cleanup", date: "5 days ago" },
    { id: 3, tokens: 18, location: "Urban Tree Planting", date: "1 week ago" },
    { id: 4, tokens: 30, location: "Solar Panel Installation", date: "2 weeks ago" },
    { id: 5, tokens: 12, location: "Wildlife Conservation", date: "3 weeks ago" },
    { id: 6, tokens: 25, location: "Coral Reef Restoration", date: "1 month ago" },
  ];

  return (
    <section className="relative py-32 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-eco">
            Community Impact Photos
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Every upload makes a difference. See how our community is creating change.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group overflow-hidden bg-card/50 backdrop-blur-xl border-border/50 hover:border-primary/50 transition-all hover:shadow-xl hover:shadow-primary/20 cursor-pointer">
                <div className="relative aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <ImageIcon className="w-16 h-16 text-primary/40 group-hover:scale-110 transition-transform" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
                  
                  {/* Token Badge */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.3, type: "spring" }}
                    className="absolute top-4 right-4 bg-primary/90 backdrop-blur-xl rounded-full px-3 py-1 flex items-center gap-1"
                  >
                    <Leaf className="w-4 h-4 text-primary-foreground" />
                    <span className="text-sm font-bold text-primary-foreground">
                      +{photo.tokens}
                    </span>
                  </motion.div>
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold text-lg">{photo.location}</h3>
                    <TrendingUp className="w-5 h-5 text-green-500" />
                  </div>
                  <p className="text-sm text-muted-foreground">{photo.date}</p>
                  <div className="mt-4 pt-4 border-t border-border/50">
                    <p className="text-sm text-primary font-medium">
                      Carbon Credits Generated
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <button className="px-8 py-3 bg-gradient-warm text-foreground font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/20 transition-all hover:scale-105">
            View All Photos
          </button>
        </motion.div>
      </div>
    </section>
  );
};
