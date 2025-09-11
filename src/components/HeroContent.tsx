import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import kadhi from "@/assets/kadhi.jpeg";
import kaju_paneer from "@/assets/kaju_paneer.jpg";
import plain_khichdi from "@/assets/plain_khichdi.jpeg";
import jeera_rice from "@/assets/jeera_rice.jpeg";

interface Thali {
  id: number;
  name: string;
  image: string;
  description: string;
  price: number;
  rating: number;
}

const thalis: Thali[] = [
  {
    id: 1,
    name: "Bengali Thali",
    image: kadhi,
    description: "Include rice, vegetables, roti, dal, papad, dahi, chutney, pickle",
    price: 40,
    rating: 4.8,
  },
  {
    id: 2,
    name: "Gujarati Thali",
    image: kaju_paneer,
    description: "Include rice, vegetables, roti, dal, papad, dahi, chutney, pickle",
    price: 50,
    rating: 4.9,
  },
  {
    id: 3,
    name: "Punjabi Thali",
    image: plain_khichdi,
    description: "Include rice, vegetables, roti, dal, papad, dahi, chutney, pickle",
    price: 45,
    rating: 4.7,
  },
  {
    id: 4,
    name: "South Indian Thali",
    image: jeera_rice,
    description: "Include rice, vegetables, roti, dal, papad, dahi, chutney, pickle",
    price: 35,
    rating: 4.6,
  },
];

interface HeroContentProps {
  selectedThali: number;
}

const HeroContent = ({ selectedThali }: HeroContentProps) => {
  const currentThali = thalis.find(thali => thali.id === selectedThali) || thalis[0];

  return (
    <div className="space-y-8">
      {/* Restaurant Type */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-2"
      >
        <div className="text-accent text-lg font-medium">
          Indian
        </div>
        <div className="text-accent text-lg font-medium">
          Restaurant
        </div>
      </motion.div>

      {/* Current Thali Name */}
      <motion.h1
        key={selectedThali}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight"
      >
        {currentThali.name}
      </motion.h1>

      {/* Description */}
      <motion.p
        key={selectedThali}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-muted-foreground text-lg max-w-md leading-relaxed"
      >
        {currentThali.description}
      </motion.p>

      {/* Rating */}
      <motion.div
        key={selectedThali}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex items-center space-x-2"
      >
        <div className="flex items-center">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              className={`w-5 h-5 ${
                i < Math.floor(currentThali.rating) 
                  ? 'text-yellow-400 fill-current' 
                  : 'text-gray-300'
              }`} 
            />
          ))}
        </div>
        <span className="text-foreground font-medium">
          {currentThali.rating}
        </span>
        <span className="text-muted-foreground">
          (2.5k reviews)
        </span>
      </motion.div>

      {/* Price & Order Button */}
      <motion.div
        key={selectedThali}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="flex items-center space-x-6"
      >
        <div className="text-3xl font-bold text-primary">
          ${currentThali.price}
        </div>
        <Button 
          className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg rounded-xl transition-all duration-300 hover:scale-105"
        >
          Order Now
        </Button>
      </motion.div>
    </div>
  );
};

export default HeroContent;