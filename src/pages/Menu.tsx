import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import rosted_papad from "@/assets/rostad_papad.jpeg";
import jeera_rice from "@/assets/jeera_rice.jpeg";
import bajra_rotlo from "@/assets/bajra_rotlo.jpg";
import ghee_gud from "@/assets/ghee_gud.jpg";
import roti from "@/assets/roti.jpg";
import plain_khichdi from "@/assets/plain_khichdi.jpeg";
import kadhi from "@/assets/kadhi.jpeg";
import rice from "@/assets/rice.jpg";
import paneer_lasagna from "@/assets/paneer_lasagna.png";
import palak_paneer from "@/assets/palak_paneer.png";
import chess_butter_masala from "@/assets/chess_butter_masala.png";
import kaju_curry from "@/assets/kaju_curry.png";
import sevtomato from "@/assets/sevtomato.jpg";
import kaju_lasan from "@/assets/kaju_lasan.jpg";
import vagharelo_rotlo from "@/assets/vagharelo_rotlo.jpeg";
import paneer_butter_masala from "@/assets/paneer_butter_masala.jpeg";
import kaju_gathiya from "@/assets/kaju_gathiya.jpeg";
import kaju_paneer from "@/assets/kaju_paneer.jpg";
import masala_papad from "@/assets/masala_papad.jpeg";
import bharela_papad from "@/assets/bharela_papad.jpeg";
import sev_lasaniya from "@/assets/sev_lasaniya.jpg";
import sev_lasaniya_1 from "@/assets/sev_lasaniya_1.jpg";
import chana_masala from "@/assets/chana_masala.jpg";
import ringan_bharthu from "@/assets/ringan_bharthu.jpg";
import lasaniya_batata from "@/assets/lasaniya_batata.jpg";
import bharela_ringan from "@/assets/bharela_ringan.jpg";
import surti_undhiyu from "@/assets/surti_undhiyu.jpg";
import dal_fry from "@/assets/dal_fry.jpg";
import butter_dal_tadka from "@/assets/butter_dal_tadka_fry.jpg";
import sukhadi from "@/assets/sukhadi.jpeg";
import gulab_jambun from "@/assets/gulab_jambun.jpeg";
import mango_ras from "@/assets/mango_ras.jpeg";
import barja_rotlo_churmo from "@/assets/barja_rotlo_churmo.jpeg";
import chas from "@/assets/chas.jpeg";
import lasai from "@/assets/lasai.jpeg";


const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("starters_swad_ni_saruat");

  const categories = [
    { id: "starters_swad_ni_saruat", name: "Starters Swad Ni Saruat", label: "Starters Swad Ni Saruat" },
    { id: "rotla", name: "Roti Rotlo", label: "Roti Rotlo" },
    { id: "rice", name: "Rice Ni Lijjat", label: "Rice Ni Lijjat" },
    { id: "cheese_paneer_dhamaal", name: "Cheese Paneer Dhamaal", label: "Cheese Paneer Dhamaal" },
    { id: "curries_kathiyawadi_ramzat", name: "Curries Kathiyawadi Ramzat", label: "Curries Kathiyawadi Ramzat" },
    { id: "dal_ni_kamal", name: "Dal Ni Kamal", label: "Dal Ni Kamal" },
    { id: "sweets", name: "Sweets", label: "Sweets" },
    { id: "drinks", name: "Drinks", label: "Drinks" },
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
        price: "$5.00",
        image: ghee_gud ,
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
        name: "Jeera Rice",
        description: "Flavourful rice infused with cumin seeds",
        price: "$10.00",
        image: jeera_rice,
        
      },
      {
        id: "10",
        name: "Plain Khichdi",
        description: "Traditional Gujarati comfort food made with rice and lentils",
        price: "$12.00",
        image: plain_khichdi,
        popular: true
      },
      {
        id: "11",
        name: "Kadhi",
        description: "Traditional Gujarati yogurt-based curry",
        price: "$12.00",
        image: kadhi
      },
      {
        id: "12",
        name: "Plain Rice",
        description: "Soft, fluffy steamed white rice",
        price: "$7.00",
        image: rice
      }
    ],
    cheese_paneer_dhamaal: [
      {
        id: "13",
        name: "Paneer Butter Masala",
        description: "Rich and creamy paneer in a smooth buttery sauce",
        price: "$16.99",
        image: paneer_butter_masala,
        
      },
      {
        id: "14",
        name: "Kaju Paneer",
        description: "Rich and creamy paneer in a cashew nut gravy",
        price: "$20.00",
        image: kaju_paneer,
        popular: true
      },
      {
        id: "15",
        name: "Paneer Takatak",
        description: "Indian-style cheese curry with paneer",
        price: "$19.99",
        image: kadhi
      },
      {
        id: "16",
        name: "Paneer Lasaniya",
        description: "Rich and creamy paneer in a flavorful sauce",
        price: "$16.99",
        image: paneer_lasagna
      },
       {
        id: "17",
        name: "Palak Paneer",
        description: "Creamy spinach curry with paneer",
        price: "$16.99",
        image: palak_paneer
      },
      {
        id: "18",
        name: "Cheese Butter Masala",
        description: "Rich and creamy paneer in a buttery masala sauce",
        price: "$18.00",
        image: chess_butter_masala
      },
       {
        id: "19",
        name: "Kaju Curry",
        description: "Rich and creamy curry made with cashews and paneer",
        price: "$18.00",
        image: kaju_curry
      },
    ],
    curries_kathiyawadi_ramzat: [
      {
        id: "20",
        name: "Sev Tomato",
        description: "Tomato-based curry with a crunchy sev topping",
        price: "$14.99",
        image: sevtomato,
         popular: true
        
      },
      {
        id: "21",
        name: "Kaju Lasan",
        description: "Rich cashew curry with a hint of garlic",
        price: "$18.00",
        image: kaju_lasan,
        popular: true
      },
      {
        id: "22",
        name: "Kaju Gathiya",
        description: "Indian-style cheese curry with paneer",
        price: "$18.00",
        image: kaju_gathiya
      },
      {
        id: "23",
        name: "Bharela Papad",
        description: "Crispy papad filled with a flavorful mixture",
        price: "$18.00",
        image: bharela_papad
      },
       {
        id: "24",
        name: "Sev Lili Dungari Spring Onion",
        description: "Crunchy sev and lili dungari in a flavorful spring onion curry",
        price: "$16.99",
        image: ""
      },
      {
        id: "25",
        name: "Sev Lasaniya",
        description: "Spicy garlic curry topped with crunchy sev for a bold Kathiyawadi flavor",
        price: "$14.99",
        image: sev_lasaniya_1
      },
       {
        id: "26",
        name: "Dahi Gathiya",
        description: "Yogurt-based curry with crunchy Gathiya bits",
        price: "$17.00",
        image: ""
      },
      {
        id: "27",
        name: "Desi Chana Masala",
        description: "Chickpeas cooked in a rich, aromatic tomato-based sauce",
        price: "$16.99",
        image: chana_masala
      },
      {
        id: "28",
        name: "Ringan Bharthu",
        description: "Roasted eggplant in a rich and tangy curry sauce",
        price: "$20.00",
        image: ringan_bharthu
      },
      {
        id: "29",
        name: "Lasaniya Bataka",
        description: "Potato curry in a rich and creamy sauce",
        price: "$16.99",
        image: lasaniya_batata,
        popular:true,
      },
      {
        id: "30",
        name: "Bharela Ringan",
        description: "Ringan (eggplant) in a rich and flavorful Kathiyawadi curry",
        price: "$18.00",
        image: bharela_ringan,
        popular:true,
      },
      {
        id: "31",
        name: "Surti Undhiyu",
        description: "Mixed vegetables in a rich and flavorful curry sauce",
        price: "$22.00",
        image: surti_undhiyu,
        popular:true,
      },
    ],
    dal_ni_kamal: [
      {
        id: "32",
        name: "Dal Fry",
        description: "Toor dal tempered with ghee, onion, tomato, garlic, and spices",
        price: "$16.99",
        image: dal_fry,
         
        
      },
      {
        id: "33",
        name: "Butter Dal Tadka Fry",
        description: "Rich and creamy lentil curry with a hint of butter",
        price: "$18.00",
        image: butter_dal_tadka,
        
      },
      
    ],
    sweets: [
      {
        id: "34",
        name: "Sukhadi",
        description: "Three pieces",
        price: "$8.00",
        image: sukhadi,
         
        
      },
      {
        id: "35",
        name: "Gulab Jamun",
        description: "Three pieces",
        price: "$8.00",
        image:gulab_jambun ,
        
      },
      {
        id: "36",
        name: "Mango Ras",
        description: "Sweet and creamy dessert made with mango",
        price: "$7.99",
        image:mango_ras ,
        
      },
      {
        id: "37",
        name: "Barja Rotlo Churmo",
        description: "Traditional Gujarati sweet treat made with rotlo and churma",
        price: "$8.00",
        image:barja_rotlo_churmo ,
        
      },
      
    ],
    drinks: [
      {
        id: "34",
        name: "Masala Chaas",
        description: "A refreshing yogurt-based drink with a blend of spices",
        price: "$5.00",
        image: chas,
        popular: true,
         
        
      },
      {
        id: "35",
        name: "Lassi",
        description: "Traditional yogurt-based drink from India, smooth and creamy",
        price: "$8.00",
        image:lasai ,
        
      },
    
    ],
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