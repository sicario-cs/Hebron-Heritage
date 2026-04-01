import { motion } from "motion/react";
import { ShoppingBag, Heart, Play } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";

interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  story: string;
  artisan: string;
}

export default function SmartMarketSection() {
  const products: Product[] = [
    {
      id: "1",
      name: "Handblown Glass Vase",
      category: "Glass Art",
      price: 85,
      image:
        "https://images.unsplash.com/photo-1764774089008-e0f32cbe86d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibG93biUyMGdsYXNzJTIwYXJ0aXNhbiUyMGNyYWZ0fGVufDF8fHx8MTc3NDg2NDg3Mnww&ixlib=rb-4.1.0&q=80&w=1080",
      story:
        "Crafted using techniques passed down through 5 generations of master glassblowers",
      artisan: "Ahmad Al-Tamimi",
    },
    {
      id: "2",
      name: "Traditional Ceramic Bowl",
      category: "Ceramics",
      price: 65,
      image:
        "https://images.unsplash.com/photo-1650065962232-e4b7f95ebf1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMGFyYWJpYyUyMGNlcmFtaWNzJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDF8fHx8MTc3NDg2NDg3MXww&ixlib=rb-4.1.0&q=80&w=1080",
      story: "Hand-painted with traditional geometric patterns dating back centuries",
      artisan: "Fatima Hassan",
    },
    {
      id: "3",
      name: "Embroidered Textile",
      category: "Embroidery",
      price: 120,
      image:
        "https://images.unsplash.com/photo-1763400234383-8b9ecbb9c043?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMGVtYnJvaWRlcnklMjB0ZXh0aWxlJTIwcGF0dGVybnN8ZW58MXx8fHwxNzc0ODY0ODcxfDA&ixlib=rb-4.1.0&q=80&w=1080",
      story: "Each stitch tells a story of Palestinian heritage and culture",
      artisan: "Layla Khalil",
    },
    {
      id: "4",
      name: "Artisan Glass Lamp",
      category: "Glass Art",
      price: 95,
      image:
        "https://images.unsplash.com/photo-1764774089008-e0f32cbe86d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibG93biUyMGdsYXNzJTIwYXJ0aXNhbiUyMGNyYWZ0fGVufDF8fHx8MTc3NDg2NDg3Mnww&ixlib=rb-4.1.0&q=80&w=1080",
      story: "Illuminates homes with the warmth of traditional craftsmanship",
      artisan: "Yousef Ibrahim",
    },
  ];

  return (
    <section
      id="market"
      className="min-h-screen py-20 px-4 bg-gradient-to-b from-stone-900 via-stone-950 to-stone-900"
    >
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", duration: 1 }}
            className="inline-block mb-6"
          >
            <div className="bg-gradient-to-br from-amber-500 to-amber-700 p-4 rounded-2xl">
              <ShoppingBag className="text-white" size={48} />
            </div>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Smart Heritage{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
              Market
            </span>
          </h2>
          <p className="text-stone-400 text-lg max-w-2xl mx-auto">
            Discover authentic handcrafted treasures from local artisans, each with a story to tell
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="bg-stone-800/50 border-amber-900/30 overflow-hidden group hover:border-amber-500/50 transition-all duration-300">
                <div className="relative h-64 overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-white hover:text-amber-500"
                    >
                      <Play className="mr-2" size={16} />
                      Watch Story
                    </Button>
                  </div>

                  {/* Favorite Button */}
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="absolute top-3 right-3 bg-stone-950/80 hover:bg-amber-500 text-white p-2 rounded-full transition-colors"
                  >
                    <Heart size={18} />
                  </motion.button>

                  {/* Category Badge */}
                  <Badge className="absolute top-3 left-3 bg-amber-500/90 text-white border-0">
                    {product.category}
                  </Badge>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-white font-bold text-xl mb-2">
                    {product.name}
                  </h3>
                  <p className="text-stone-400 text-sm mb-3 line-clamp-2">
                    {product.story}
                  </p>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-amber-500 font-bold text-lg">
                      ${product.price}
                    </span>
                    <span className="text-stone-500 text-sm">
                      by {product.artisan}
                    </span>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white">
                    Add to Cart
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-stone-800/30 border border-amber-900/20 rounded-2xl p-8"
        >
          {[
            { label: "Local Artisans", value: "150+" },
            { label: "Products", value: "500+" },
            { label: "Happy Customers", value: "10K+" },
            { label: "Countries Shipped", value: "40+" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, type: "spring" }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-amber-500 mb-2">
                {stat.value}
              </div>
              <div className="text-stone-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
