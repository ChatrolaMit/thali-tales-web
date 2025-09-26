import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import HeroContent from "./HeroContent";
// import ThaliSelector from "./ThaliSelector";
import ThaliCarousel from "./ThaliCarousal";
import { Button } from "./ui/button";
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

const RestaurantLanding = () => {
  const [selectedThali, setSelectedThali] = useState(1);
  const [currentThali, setCurrentThali] = useState(
    thalis.find((thali) => thali.id === 1)
  );
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setCurrentThali(thalis.find((thali) => thali.id === selectedThali));
  }, [selectedThali]);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-surface to-background">
      <div className="relative min-h-[calc(100vh-80px)] overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(255,165,0,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,140,0,0.08),transparent_50%)]" />
        </div>

        <div className="relative z-10 flex items-center min-h-full">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="space-y-8"
              >
                {/* <div className="mt-8s">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight">
                    {currentThali?.name}
                  </h1>

                  <p className="text-muted-foreground text-lg max-w-md leading-relaxed">
                    {currentThali?.description}
                  </p>

                  <div className="flex items-center space-x-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 ${
                            i < Math.floor(currentThali?.rating || 0)
                              ? "text-yellow-400 fill-current"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-foreground font-medium">
                      {currentThali?.rating}
                    </span>
                    <span className="text-muted-foreground">
                      (2.5k reviews)
                    </span>
                  </div>
                </div> */}
                <div className="text-left space-y-8 mt-12">
                  <h1
                    className="text-5xl lg:text-7xl font-bold leading-tight font-heading"
                    style={{ color: "hsl(120, 45%, 25%)" }}
                  >
                    Tulsi Kathiyawadi
                  </h1>
                  <p
                    className="text-2xl lg:text-3xl font-medium"
                    style={{ color: "hsl(120, 45%, 35%)" }}
                  >
                    For A Perfect Dinner
                  </p>
                  <p
                    className="text-large max-w-2xl mx-auto"
                    
                  >
                    Experience authentic vegetarian flavors crafted with love
                    and tradition. Fresh ingredients, time-honored recipes, and
                    a dining experience you'll cherish.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Button className="btn-hero" asChild>
                      <a href="/menu">View Menu</a>
                    </Button>
                    <Button className="btn-outline-hero" asChild>
                      <a
                        href="https://ubereats.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Order Online
                      </a>
                    </Button>
                  </div>
                </div>

                {isMobile && (
                  <div className="w-full h-full flex flex-col items-center justify-center space-y-6">
                    {/* Thali Image */}
                    <div className="w-[300px] h-[300px] rounded-full overflow-hidden bg-gray-100 shadow-lg border border-border/50">
                      <img
                        src={currentThali?.image}
                        alt={currentThali?.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                )}

                {/* <div className="pt-6">
                  <ThaliSelector
                    selectedThali={selectedThali}
                    onThaliSelect={setSelectedThali}
                  />
                </div> */}

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="pt-4"
                ></motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                className={`relative  ${!isMobile && "pl-96 ml-52"}`}
              >
                {!isMobile && (
                  <ThaliCarousel
                    selectedThali={selectedThali}
                    onThaliSelect={setSelectedThali}
                  />
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantLanding;
