import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import heroThali from "@/assets/hero-thali.jpg"; // sample image, you can replace with different thali images

const HeroSection = () => {
  // Array of thali images (you can add more/different ones)
  const thalis = [heroThali, heroThali, heroThali, heroThali, heroThali, heroThali];

  return (
    <section
      id="home"
      className="hero-gradient min-h-screen flex items-center relative overflow-hidden"
    >
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-left space-y-8">
            <h1 className="text-5xl lg:text-7xl font-bold text-primary-foreground leading-tight font-heading">
              Tulsi Kathiyawadi
            </h1>
            <p className="text-2xl lg:text-3xl text-primary-foreground/90 font-medium">
              For A Perfect Dinner
            </p>
            <p className="text-lg lg:text-xl text-primary-foreground/80 leading-relaxed max-w-lg">
              Experience authentic vegetarian flavors crafted with love and
              tradition. Fresh ingredients, time-honored recipes, and a dining
              experience you'll cherish.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button className="btn-hero" asChild>
                <a href="/menu">View Menu</a>
              </Button>
              <Button className="btn-outline-hero" asChild>
                <a
                  href="https://www.ubereats.com/au/store/tulsi-kathiyawadi/e3pWlBGWXkmZ5Gzr10puWQ?diningMode=DELIVERY&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMlByZXN0b24lMjBNYXJrZXQlMjIlMkMlMjJyZWZlcmVuY2UlMjIlM0ElMjI0NmJhYjJmZi05ZDA4LWNmMjEtNTNiNS05M2RjNzY4YmE4YjUlMjIlMkMlMjJyZWZlcmVuY2VUeXBlJTIyJTNBJTIydWJlcl9wbGFjZXMlMjIlMkMlMjJsYXRpdHVkZSUyMiUzQS0zNy43Mzg5Nzk5JTJDJTIybG9uZ2l0dWRlJTIyJTNBMTQ1LjAwMjAyNzIlN0Q%3D&ps=1&surfaceName="
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Order Online
                </a>
              </Button>
            </div>
          </div>

          {/* Right Content - Rotating Multiple Thalis */}
          <div className="relative flex items-center justify-center">
            <motion.div
              className="relative w-[420px] h-[420px] flex items-center justify-center"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
            >
              {thalis.map((src, index) => {
                const angle = (360 / thalis.length) * index;
                const radius = 160; // distance from center
                const x = radius * Math.cos((angle * Math.PI) / 180);
                const y = radius * Math.sin((angle * Math.PI) / 180);

                return (
                  <img
                    key={index}
                    src={src}
                    alt={`Thali ${index + 1}`}
                    className="absolute w-32 h-32 rounded-full shadow-lg object-cover"
                    style={{
                      transform: `translate(${x}px, ${y}px)`,
                    }}
                  />
                );
              })}
            </motion.div>

            {/* Floating Elements */}
            <motion.div
              className="absolute -top-6 -right-6 bg-cream rounded-full p-4 shadow-medium"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            >
              🌿
            </motion.div>
            <motion.div
              className="absolute -bottom-4 -left-4 bg-accent rounded-full p-3 shadow-medium"
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            >
              🍛
            </motion.div>
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-primary-foreground rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-primary-foreground rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

export default HeroSection;