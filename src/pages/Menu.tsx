import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import rosted_papad from "@/assets/rostad_papad.jpeg";
import bajra_rotlo from "@/assets/bajra_rotlo.jpg";
import roti from "@/assets/roti.jpg";
import sevtomato from "@/assets/sevtomato.jpg";
import kaju_lasan from "@/assets/kaju_lasan.jpg";
import vagharelo_rotlo from "@/assets/vagharelo_rotlo.jpeg";
import paneer_butter_masala from "@/assets/paneer_butter_masala.jpeg";
import kaju_gathiya from "@/assets/kaju_gathiya.jpeg";
import kaju_paneer from "@/assets/kaju_paneer.jpg";
import masala_papad from "@/assets/masala_papad.jpeg";


const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("starters_swad_ni_saruat");

  const categories = [
    { id: "starters_swad_ni_saruat", name: "Starters Swad Ni Saruat", label: "Starters Swad Ni Saruat" },
    { id: "rotla", name: "Roti Rotlo", label: "Roti Rotlo" },
    { id: "rice", name: "Rice", label: "Rice Dishes" },
  ];

  const menuItems = {
    starters_swad_ni_saruat: [
      {
        id: "1",
        name: "Special Vagharelo Rotlo",
        description: "Traditional millet rotlo crumbled and tempered with garlic, onions, green chilies, and spices — a rustic Kathiyawadi favorite",
        price: "$18.99",
        image: vagharelo_rotlo,
        popular: true
      },
      {
        id: "2", 
        name: "Masala Papad",
        description: "Thin, crispy flatbread flavoured with aromatic spices.",
        price: "$6.00",
        image: masala_papad,
        
      },
      {
        id: "3",
        name: "Roasted Papad",
        description: "Thin, crispy papad roasted to perfection.",
        price: "$3.50",
        image: rosted_papad
      },
      {
        id: "4",
        name: "Gud Ghee",
        description: "Tender okra stir-fried with onions, tomatoes, turmeric, red chili powder, and coriander",
        price: "₹170",
        // image: "/api/placeholder/300/200",
        popular: true
      }
    ],
    rotla: [
      {
        id: "5",
        name: "Ghee Bajra Rotlo",
        description: "Traditional Gujarati flatbread made with ghee and bajra flour",
        price: "$6.00",
        image: bajra_rotlo,
        popular: true
      },
      {
        id: "6",
        name: "Gee Fulka Roti", 
        description: "Traditional Gujarati flatbread",
        price: "$4.00",
        image: roti
      },
      
    ],
    rice: [
      {
        id: "9",
        name: "Vegetable Biryani",
        description: "Fragrant basmati rice cooked with mixed vegetables, saffron, mint, and traditional biryani spices",
        price: "₹220",
        image: "/api/placeholder/300/200",
        popular: true
      },
      {
        id: "10",
        name: "Jeera Rice",
        description: "Aromatic basmati rice cooked with cumin seeds, ghee, and whole spices",
        price: "₹140",
        image: "/api/placeholder/300/200"
      },
      {
        id: "11",
        name: "Lemon Rice",
        description: "South Indian style rice tempered with mustard seeds, curry leaves, turmeric, and fresh lemon",
        price: "₹130",
        image: "/api/placeholder/300/200"
      },
      {
        id: "12",
        name: "Curd Rice",
        description: "Comfort food with rice mixed in fresh yogurt, tempered with mustard seeds and curry leaves",
        price: "₹120",
        image: "/api/placeholder/300/200"
      }
    ]
  };


  return (
    <div className="min-h-screen">
      <TopBar />
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-primary/5 to-background py-20">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 font-heading">
              Our <span className="text-primary">Menu</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Discover our authentic vegetarian dishes made with fresh ingredients and traditional recipes
            </p>
          </div>
        </div>
      </section>

      {/* Menu Navigation */}
      <section className="py-8 border-b border-border bg-card/50">
        <div className="section-container">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                onClick={() => setActiveCategory(category.id)}
                className="min-w-[120px]"
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Items */}
      <section className="py-12">
        <div className="section-container">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-foreground font-heading text-center">
              {categories.find(cat => cat.id === activeCategory)?.label}
            </h2>
          </div>
          
          <div className="space-y-6">
            {menuItems[activeCategory as keyof typeof menuItems].map((item) => (
              <Card key={item.id} className="overflow-hidden hover:shadow-elegant transition-shadow duration-300">
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row">
                    {/* Left side - Item details */}
                    <div className="flex-1 p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="text-xl font-semibold text-foreground">{item.name}</h3>
                            {item.popular && (
                              <Badge variant="secondary" className="bg-primary/10 text-primary">
                                Popular
                              </Badge>
                            )}
                          </div>
                          <p className="text-muted-foreground leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <span className="text-2xl font-bold text-primary">{item.price}</span>
                      </div>
                    </div>
                    
                    {/* Right side - Image */}
                    <div className="md:w-80 h-48 md:h-auto">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>


      <Footer />
    </div>
  );
};

export default Menu;