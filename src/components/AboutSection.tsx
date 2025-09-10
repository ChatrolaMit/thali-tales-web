import about from "@/assets/about.jpeg";

const AboutSection = () => {
  return (
    <section id="about" className="section-spacing bg-accent/30">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-medium">
              <img
                src={about}
                alt="Fresh aromatic basmati rice"
                className="w-full h-[400px] lg:h-[600px] object-cover"

              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 bg-primary rounded-full w-8 h-8 flex items-center justify-center">
              <span className="text-primary-foreground text-sm">🌾</span>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-warm-brown rounded-full w-12 h-12 flex items-center justify-center">
              <span className="text-white text-lg">🍚</span>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-6">
            <h2 className="heading-secondary text-gradient">
              About Us
            </h2>
            
            <div className="space-y-4 text-large">
              <p>
                Welcome to <span className="font-semibold text-primary">Pure Veg Cuisine</span>, 
                where tradition meets taste in the heart of Malad West, Mumbai. 
                For years, we have been dedicated to serving authentic vegetarian dishes 
                that celebrate the rich culinary heritage of India.
              </p>
              
              <p>
                Our kitchen is a sanctuary of pure vegetarian cooking, where every dish 
                is prepared with the finest ingredients and time-honored recipes passed 
                down through generations. We believe that great food is not just about 
                taste—it's about the love, care, and authenticity that goes into every meal.
              </p>
              
              <p>
                Located in the vibrant neighborhood of Malad West, we have become 
                a cherished destination for food lovers seeking genuine vegetarian cuisine. 
                Our promise is simple: fresh ingredients, authentic flavors, and 
                a dining experience that feels like home.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="text-center p-4 bg-card rounded-xl border border-border">
                <div className="text-2xl font-bold text-primary mb-1">500+</div>
                <div className="text-sm text-muted-foreground">Happy Customers</div>
              </div>
              <div className="text-center p-4 bg-card rounded-xl border border-border">
                <div className="text-2xl font-bold text-primary mb-1">15+</div>
                <div className="text-sm text-muted-foreground">Years of Service</div>
              </div>
            </div>

            <div className="flex items-center space-x-4 pt-4">
              <div className="flex items-center space-x-2 text-primary">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                <span className="font-medium">100% Pure Vegetarian</span>
              </div>
              <div className="flex items-center space-x-2 text-primary">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                <span className="font-medium">Fresh Daily</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;