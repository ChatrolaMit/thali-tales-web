import vegStarters from "@/assets/veg-starters.jpg";
import mainCourse from "@/assets/main-course.jpg";
import northIndian from "@/assets/north-indian.jpg";
import southIndian from "@/assets/south-indian.jpg";
import chineseSpecial from "@/assets/chinese-special.jpg";
import dessertsBeverages from "@/assets/desserts-beverages.jpg";

const WeServeSection = () => {
  const categories = [
    {
      title: "Veg Starters",
      image: vegStarters,
      description: "Crispy appetizers and mouth-watering starters"
    },
    {
      title: "Main Course Gravy",
      image: mainCourse,
      description: "Rich curries and flavorful gravies"
    },
    {
      title: "North Indian Dishes",
      image: northIndian,
      description: "Traditional North Indian specialties"
    },
    {
      title: "Special South Indian",
      image: southIndian,
      description: "Authentic South Indian delicacies"
    },
    {
      title: "Chinese Specialities",
      image: chineseSpecial,
      description: "Indo-Chinese fusion favorites"
    },
    {
      title: "Desserts & Beverages",
      image: dessertsBeverages,
      description: "Sweet endings and refreshing drinks"
    }
  ];

  return (
    <section id="serve" className="section-spacing bg-background">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="heading-secondary text-gradient">
            We Serve
          </h2>
          <p className="text-large max-w-2xl mx-auto">
            Discover our carefully curated menu featuring the finest vegetarian dishes 
            from across India and beyond
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