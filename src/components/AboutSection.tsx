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
                className="w-full h-[400px] lg:h-[500px] object-cover"
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
            <h2 className="heading-secondary text-gradient">About Us</h2>

            <div className="space-y-4 text-large">

              <p>
                At Tulsi Kathiyawadi, located in the heart of Clayton,
                Melbourne, we bring the rich and rustic flavors of Gujarat
                straight to your table. 
              </p>
              <p>
                Specialising in traditional Kathiyawadi
                cuisine, our fully vegetarian menu is a celebration of bold
                spices, homestyle cooking, and heartwarming hospitality. 
              </p>

              <p>
               Our chefs prepare every meal fresh,
                ensuring a dining experience that is both comforting and
                memorable.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="text-center p-4 bg-card rounded-xl border border-border">
                <div className="text-2xl font-bold text-primary mb-1">500+</div>
                <div className="text-sm text-muted-foreground">
                  Happy Customers
                </div>
              </div>
              <div className="text-center p-4 bg-card rounded-xl border border-border">
                <div className="text-2xl font-bold text-primary mb-1">15+</div>
                <div className="text-sm text-muted-foreground">
                  Years of Service
                </div>
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
