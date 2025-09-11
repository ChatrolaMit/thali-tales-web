import sevtomato from "@/assets/sevtomato.jpg";
import kaju_lasan from "@/assets/kaju_lasan.jpg";
import vagharelo_rotlo from "@/assets/vagharelo_rotlo.jpeg";
import paneer_butter_masala from "@/assets/paneer_butter_masala.jpeg";
import kaju_gathiya from "@/assets/kaju_gathiya.jpeg";
import kaju_paneer from "@/assets/kaju_paneer.jpg";

const WeServeSection = () => {
  const categories = [
    {
      title: "Sev Tomato",
      image: sevtomato,
      description: "A tangy tomato curry topped with crunchy sev, a Kathiyawadi classic"
    },
    {
      title: "Kaju Lasan",
      image: kaju_lasan,
      description: "Creamy cashew-based curry infused with garlic and rich spices"
    },
    {
      title: "Special Vagharelo Rotlo",
      image: vagharelo_rotlo,
      description: "A rustic Kathiyawadi delight — mashed rotlo tempered with spices and ghee"
    },
    {
      title: "Paneer Butter Masala",
      image: paneer_butter_masala,
      description: "A creamy, buttery curry with tender paneer cubes simmered in rich tomato gravy"
    },
    {
      title: "Kaju Gathiya",
      image: kaju_gathiya,
      description: "A Kathiyawadi favorite made with crunchy gathiya cooked in a rich cashew gravys"
    },
    {
      title: "Kaju Paneer",
      image: kaju_paneer,
      description: "A royal curry blending soft paneer and cashews in a creamy, flavorful sauce"
    }
  ];

  return (
    <section id="serve" className="section-spacing bg-background">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="heading-secondary text-gradient">
            Customer Favorites
          </h2>
          <p className="text-large max-w-2xl mx-auto">
             Experience the taste of our signature Kathiyawadi and Indian favorites, 
              prepared with fresh ingredients and timeless recipes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <a
              key={category.title}
              href="/menu"
              className="service-card group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden rounded-xl mb-4">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <h3 className="heading-tertiary text-center">
                {category.title}
              </h3>
              <p className="text-muted-foreground text-center">
                {category.description}
              </p>
              
              <div className="mt-4 pt-4 border-t border-border">
                <span className="text-primary font-semibold text-sm group-hover:text-primary-light transition-colors">
                  Explore Menu →
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WeServeSection;