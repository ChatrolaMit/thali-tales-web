
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import sevtomato from "@/assets/sevtomato.jpg";
import sukhadi from "@/assets/sukhadi.jpeg";
import kaju_gathiya from "@/assets/kaju_gathiya.jpeg";
import vagharelo_rotlo from "@/assets/vagharelo_rotlo.jpeg";
import { useEffect, useState } from "react";

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
    name: "Sev Tomato",
    image: sevtomato,
    description:
      "A tangy tomato curry topped with crunchy sev, a Kathiyawadi classic",
    price: 17.00,
    rating: 4.7,
  },
  {
    id: 2,
    name: "Sukhadi",
    image: sukhadi,
    description:
      "Three pieces",
    price: 6.00,
    rating: 4.8,
  },
  {
    id: 3,
    name: "Kaju Gathiya",
    image: kaju_gathiya,
    description:
      "Include rice, vegetables, roti, dal, papad, dahi, chutney, pickle",
    price: 20.00,
    rating: 4.9,
  },
  {
    id: 4,
    name: "Vagharelo Rotlo",
    image: vagharelo_rotlo,
    description:
      "Traditional millet rotlo crumbled and tempered with garlic, onions, green chilies, and spices — a rustic Kathiyawadi favorite",
    price: 17.00,
    rating: 5,
  },
];

interface ThaliCarouselProps {
  selectedThali: number;
  onThaliSelect: (thaliId: number) => void;
}

const ThaliCarousel = ({ selectedThali, onThaliSelect }: ThaliCarouselProps) => {
  const [rotationCount, setRotationCount] = useState(0);

  const currentThali =
    thalis.find((thali) => thali.id === selectedThali) || thalis[0];
  const radius = 350; // Adjust as needed for spacing

  useEffect(() => {
    const interval = setInterval(() => {
      const nextId = (selectedThali % thalis.length) + 1;
      onThaliSelect(nextId);
      setRotationCount((prev) => prev - 90); // rotate step by step
    }, 2000);

    return () => clearInterval(interval);
  }, [selectedThali, onThaliSelect]);

  return (
    <div className="w-full h-full flex items-center justify-center">
      {/* Circular Carousel Container */}
      <div className="relative w-[600px] h-[600px]">
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Outer metallic rim */}
          <div
            className="rounded-full border-[50px] border-gray-900 shadow-2xl flex items-center justify-center"
            style={{
              width: `${radius * 2.2}px`,
              height: `${radius * 2.2}px`,
            }}
          >
            <div
              className="rounded-full border-gray-800"
              style={{
                width: `${radius * 2}px`,
                height: `${radius * 2}px`,
              }}
            />
          </div>
        </div>
        {/* Rotating Circle */}
        <motion.div
          className="absolute inset-0"
          animate={{ rotate: rotationCount }}
          transition={{
            duration: 0.8,
            ease: [0.34, 1.56, 0.64, 1],
          }}
        >
          {thalis.map((thali, index) => {
            const angle = index * 90 + 180;
            const radian = (angle * Math.PI) / 180;
            const x = Math.cos(radian) * radius;
            const y = Math.sin(radian) * radius;
            const isSelected = thali.id === selectedThali;
            const size = isSelected ? 400 : 200;
            const offset = size / 2;

            return (
              <motion.div
                key={thali.id}
                className={`absolute ${
                  isSelected
                    ? "w-[400px] h-[400px]"
                    : "w-[200px] h-[200px] blur-sm"
                }`}
                style={{
                  left: `calc(50% + ${x}px - ${offset}px)`,
                  top: `calc(50% + ${y}px - ${offset}px)`,
                }}
                animate={{ rotate: -rotationCount }}
                transition={{
                  duration: 0.8,
                  ease: [0.34, 1.56, 0.64, 1],
                }}
              >
                {/* Plate Container */}
                <div
                  className="relative w-full h-full cursor-pointer"
                  onClick={() => onThaliSelect(thali.id)}
                >
                  {/* Thick Black Circular Border Behind Plate */}
                  <div className="absolute inset-0 rounded-full bg-black border-8 border-black" />

                  {/* Plate Shadow */}
                  <div className="absolute inset-2 rounded-full bg-black/20 blur-xl" />

                  {/* Main Plate */}
                  <div className="relative w-full h-full rounded-full bg-gradient-to-br from-gray-800 to-black p-4 shadow-[var(--plate-shadow)]">
                    {/* Inner Plate */}
                    <div className="w-full h-full rounded-full overflow-hidden bg-gray-100">
                      <img
                        src={thali.image}
                        alt={thali.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Floating Price & Rating Card */}
      {selectedThali && (
        <motion.div
          key={selectedThali}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="absolute bottom-24 right-[470px] bg-background/95 backdrop-blur-sm rounded-2xl p-4 shadow-[var(--thumbnail-shadow)] border border-border"
        >
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-full overflow-hidden">
              <img
                src={currentThali.image}
                alt={currentThali.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="font-semibold text-primary">
                {currentThali.name}
              </div>
              <div className="flex items-center space-x-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3 h-3 ${
                        i < Math.floor(currentThali.rating)
                          ? "text-yellow-400 fill-current"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                  <span className="ml-1 text-sm text-muted-foreground">
                    {currentThali.rating}
                  </span>
                </div>
                <div className="bg-primary text-primary-foreground px-2 py-1 rounded-lg text-sm font-semibold">
                  ${currentThali.price}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default ThaliCarousel;

