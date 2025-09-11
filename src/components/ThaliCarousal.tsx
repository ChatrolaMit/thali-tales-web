import { motion } from "framer-motion";
import { Star } from "lucide-react";
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
    description:
      "Include rice, vegetables, roti, dal, papad, dahi, chutney, pickle",
    price: 40,
    rating: 4.8,
  },
  {
    id: 2,
    name: "Gujarati Thali",
    image: kaju_paneer,
    description:
      "Include rice, vegetables, roti, dal, papad, dahi, chutney, pickle",
    price: 50,
    rating: 4.9,
  },
  {
    id: 3,
    name: "Punjabi Thali",
    image: plain_khichdi,
    description:
      "Include rice, vegetables, roti, dal, papad, dahi, chutney, pickle",
    price: 45,
    rating: 4.7,
  },
  {
    id: 4,
    name: "South Indian Thali",
    image: jeera_rice,
    description:
      "Include rice, vegetables, roti, dal, papad, dahi, chutney, pickle",
    price: 35,
    rating: 4.6,
  },
];

interface ThaliCarouselProps {
  selectedThali: number;
  onThaliSelect: (thaliId: number) => void;
}

const ThaliCarousel = ({
  selectedThali,
  onThaliSelect,
}: ThaliCarouselProps) => {
  const currentThali =
    thalis.find((thali) => thali.id === selectedThali) || thalis[0];
  const rotationAngle = (selectedThali + 1) * -90; // Each thali is 90 degrees apart
  const radius = 350; // Adjust as needed for spacing

  return (
    <div className="w-full h-full flex items-center justify-center">
      {/* Circular Carousel Container */}
      <div className="relative w-[600px] h-[600px]">
        {/* Rotating Circle */}
        <motion.div
          className="absolute inset-0"
          animate={{ rotate: rotationAngle }}
          transition={{
            duration: 0.8,
            ease: [0.34, 1.56, 0.64, 1],
          }}
        >
          {thalis.map((thali, index) => {
            const angle = index * 90;
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
                  isSelected ? "w-[400px] h-[400px]" : "w-[200px] h-[200px] opacity-40"
                }`}
                style={{
                  left: `calc(50% + ${x}px - ${offset}px)`,
                  top: `calc(50% + ${y}px - ${offset}px)`,
                }}
                animate={{ rotate: -rotationAngle }}
                transition={{
                  duration: 0.8,
                  ease: [0.34, 1.56, 0.64, 1],
                }}
              >
                {/* Plate Container */}
                <div
                  className="relative w-full h-full"
                  onClick={() => onThaliSelect(thali.id)}
                >
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
          className="absolute bottom-40 right-[470px] bg-background/95 backdrop-blur-sm rounded-2xl p-4 shadow-[var(--thumbnail-shadow)] border border-border"
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
