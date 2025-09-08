import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ShoppingCart, Plus } from "lucide-react";

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("sabji");
  const [cart, setCart] = useState<{[key: string]: number}>({});

  const categories = [
    { id: "sabji", name: "Sabji", label: "Vegetables" },
    { id: "rotla", name: "Rotla", label: "Breads" },
    { id: "rice", name: "Rice", label: "Rice Dishes" },
  ];

  const menuItems = {
    sabji: [
      {
        id: "1",
        name: "Aloo Gobi",
        description: "Fresh cauliflower and potatoes cooked with turmeric, cumin, coriander, garam masala, and fresh herbs",
        price: "₹180",
        image: "/api/placeholder/300/200",
        popular: true
      },
      {
        id: "2", 
        name: "Paneer Butter Masala",
        description: "Soft paneer cubes in rich tomato-based gravy with butter, cream, cashews, and aromatic spices",
        price: "₹250",
        image: "/api/placeholder/300/200",
        popular: true
      },
      {
        id: "3",
        name: "Dal Tadka",
        description: "Yellow lentils tempered with mustard seeds, cumin, garlic, onions, and fresh cilantro",
        price: "₹160",
        image: "/api/placeholder/300/200"
      },
      {
        id: "4",
        name: "Bhindi Masala",
        description: "Tender okra stir-fried with onions, tomatoes, turmeric, red chili powder, and coriander",
        price: "₹170",
        image: "/api/placeholder/300/200"
      }
    ],
    rotla: [
      {
        id: "5",
        name: "Butter Naan",
        description: "Soft leavened bread brushed with butter and baked fresh in tandoor oven",
        price: "₹60",
        image: "/api/placeholder/300/200",
        popular: true
      },
      {
        id: "6",
        name: "Garlic Naan", 
        description: "Naan bread topped with fresh minced garlic, cilantro, and butter",
        price: "₹70",
        image: "/api/placeholder/300/200"
      },
      {
        id: "7",
        name: "Tandoori Roti",
        description: "Whole wheat flatbread cooked in tandoor, served hot with butter",
        price: "₹40",
        image: "/api/placeholder/300/200"
      },
      {
        id: "8",
        name: "Laccha Paratha",
        description: "Flaky layered bread made with whole wheat flour, ghee, and cooked on tawa",
        price: "₹50",
        image: "/api/placeholder/300/200"
      }
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

  const addToCart = (itemId: string) => {
    setCart(prev => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1
    }));
  };

  const getTotalItems = () => {
    return Object.values(cart).reduce((sum, count) => sum + count, 0);
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
                      
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-primary">{item.price}</span>
                        <Button 
                          onClick={() => addToCart(item.id)}
                          className="flex items-center gap-2"
                        >
                          <Plus className="h-4 w-4" />
                          Add to Cart
                        </Button>
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

      {/* Floating Cart Button */}
      {getTotalItems() > 0 && (
        <div className="fixed bottom-6 right-6 z-50">
          <Button size="lg" className="rounded-full shadow-lg relative">
            <ShoppingCart className="h-5 w-5 mr-2" />
            Cart ({getTotalItems()})
            <Badge className="absolute -top-2 -right-2 bg-destructive text-destructive-foreground">
              {getTotalItems()}
            </Badge>
          </Button>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Menu;