import { Button } from "@/components/ui/button";
import heroThali from "@/assets/hero-thali.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="hero-gradient min-h-screen flex items-center relative overflow-hidden">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-left space-y-8">
            <h1 className="text-5xl lg:text-7xl font-bold text-primary-foreground leading-tight font-heading">
              Pure Veg Cuisine
            </h1>
            <p className="text-2xl lg:text-3xl text-primary-foreground/90 font-medium">
              For A Perfect Dinner
            </p>
            <p className="text-lg lg:text-xl text-primary-foreground/80 leading-relaxed max-w-lg">
              Experience authentic vegetarian flavors crafted with love and tradition. 
              Fresh ingredients, time-honored recipes, and a dining experience you'll cherish.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button className="btn-hero" asChild>
                <a href="/menu">View Menu</a>
              </Button>
              <Button className="btn-outline-hero" asChild>
                <a href="https://ubereats.com" target="_blank" rel="noopener noreferrer">Order Online</a>
              </Button>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-strong">
              <img
                src={heroThali}
                alt="Authentic Indian vegetarian thali with various dishes"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 bg-cream rounded-full p-4 shadow-medium">
              <span className="text-2xl">🌿</span>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-accent rounded-full p-3 shadow-medium">
              <span className="text-xl">🍛</span>
            </div>
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