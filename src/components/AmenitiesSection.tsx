import { UtensilsCrossed, ShoppingBag, CreditCard, Wifi, PartyPopper } from "lucide-react";

const AmenitiesSection = () => {
  const amenities = [
    {
      icon: UtensilsCrossed,
      title: "Dine-In Experience",
      description: "Enjoy authentic Kathiyawadi food in a cozy ambience."
    },
    {
      icon: ShoppingBag,
      title: "Take Away",
      description: "Quick pickup for busy schedules"
    },
    {
      icon: CreditCard,
      title: "Card Payment",
      description: "Convenient cashless transactions"
    },
    {
      icon: Wifi,
      title: "Free WiFi",
      description: "Stay connected while you dine"
    },
    {
      icon: PartyPopper,
      title: "Party Orders",
      description: "Special arrangements for celebrations"
    }
  ];

  return (
    <section id="amenities" className="section-spacing bg-background">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="heading-secondary text-gradient">
            Our Amenities
          </h2>
          <p className="text-large max-w-2xl mx-auto">
            We provide modern conveniences to enhance your dining experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {amenities.map((amenity, index) => {
            const IconComponent = amenity.icon;
            return (
              <div
                key={amenity.title}
                className="text-center group cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="card-elevated mb-4 group-hover:shadow-strong transition-all duration-300 group-hover:-translate-y-2">
                  <div className="flex flex-col items-center space-y-4">
                    <div className="bg-gradient-to-br from-primary to-primary-light rounded-full p-4 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="h-8 w-8 text-primary-foreground" />
                    </div>
                    
                    <div className="text-center">
                      <h3 className="heading-tertiary text-lg mb-2">
                        {amenity.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {amenity.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-6 py-3">
            <span className="text-primary font-semibold">✨</span>
            <span className="text-primary font-medium">
              Experience comfort and convenience at Pure Veg Cuisine
            </span>
            <span className="text-primary font-semibold">✨</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AmenitiesSection;