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
import paneer_takatak from "@/assets/paneer_takatak.png";
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
import sev_dungari from "@/assets/sev_dungari.jpg";
import dai_gathiya from "@/assets/dai_gathiya.jpg";
import dahi_rotlo from "@/assets/dahi_rotlo.jpg";


const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("starters_swad_ni_saruat");

  const categories = [
    { id: "starters_swad_ni_saruat", name: "Starters Swad Ni Saruat", label: "Starters Swad Ni Saruat" },
    { id: "kathiyawadi_ramzat", name: "Kathiyawadi Ramzat", label: "Kathiyawadi Ramzat" },
    { id: "cheese_paneer_dhamaal", name: "Cheese Paneer Dhamaal", label: "Cheese Paneer Dhamaal" },
    { id: "snacks", name: "Snacks", label: "Snaks" },
    { id: "sweets", name: "Sweets", label: "Sweets" },
    { id: "rotla", name: "Rotla-Rotli", label: "Rotla-Rotli" },
    { id: "dal_ni_kamal", name: "Dal Ni Kamal", label: "Dal Ni Kamal" },
    { id: "rice", name: "Rice Ni Lijjat", label: "Rice Ni Lijjat" },
    { id: "drinks", name: "Beverages", label: "Beverages" },
  ];

  const menuItems = {
    starters_swad_ni_saruat: [
      {
        id: "1",
        name: "Special Vagharelo Rotlo",
        description: "Traditional millet rotlo crumbled and tempered with garlic, onions, green chilies, and spices — a rustic Kathiyawadi favorite",
        price: "$17.00",
        image: vagharelo_rotlo,
        popular: true
      },     
      {
        id: "2",
        name: "Tulsi Veg. Dahi Rotlo",
        description: "Tender okra stir-fried with onions, tomatoes, turmeric, red chili powder, and coriander",
        price: "$18.00",
        image: "" ,
        popular: false
      },
      {
        id: "3",
        name: "Tulsi Special Bharelo Rotlo",
        description: "Tender okra stir-fried with onions, tomatoes, turmeric, red chili powder, and coriander",
        price: "$12.00",
        image: "" ,
        popular: false
      },
      {
        id: "4",
        name: "Cheese Bharelo Rotlo",
        description: "Tender okra stir-fried with onions, tomatoes, turmeric, red chili powder, and coriander",
        price: "$14.00",
        image: "" ,
        popular: false
      },
      {
        id: "5",
        name: "Rosted Papad / Papadi",
        description: "Thin, crispy papad roasted to perfection.",
        price: "$2.50",
        image: rosted_papad
      },
      {
        id: "6",
        name: "Fry Papad / Fry Khichiya papad",
        description: "Thin, crispy papad roasted to perfection.",
        price: "$2.50",
        image: rosted_papad
      },
      {
        id: "7", 
        name: "Masala Papad",
        description: "Thin, crispy flatbread flavoured with aromatic spices.",
        price: "$5.00",
        image: masala_papad,
        
      },
       {
        id: "8", 
        name: "Cheese Masala Papad",
        description: "Thin, crispy flatbread flavoured with aromatic spices.",
        price: "$7.00",
        image: masala_papad,
        
      },
      {
        id: "9",
        name: "Gud Ghee",
        description: "Tender okra stir-fried with onions, tomatoes, turmeric, red chili powder, and coriander",
        price: "$4.00",
        image: ghee_gud ,
        popular: true
      },
    ],
    kathiyawadi_ramzat: [
      {
        id: "10",
        name: "Sev Tomato",
        description: "Tomato-based curry with a crunchy sev topping",
        price: "$16.00",
        image: sevtomato,
        popular: true
        
      },
      {
        id: "11",
        name: "Dahi Tikhari",
        description: "",
        price: "$12.00",
        image: sevtomato,
        popular: true
        
      },
      {
        id: "12",
        name: "Sev Lasaniya",
        description: "Spicy garlic curry topped with crunchy sev for a bold Kathiyawadi flavor",
        price: "$16.00",
        image: sev_lasaniya_1,
        popular: false
      },
      {
        id: "13",
        name: "Ringan Bharthu",
        description: "Roasted eggplant in a rich and tangy curry sauce",
        price: "$19.00",
        image: ringan_bharthu,
        popular: true
      },
      {
        id: "14",
        name: "Kathiyawadi Dhokali",
        description: "",
        price: "$19.00",
        image: "",
        popular: false
      },
      {
        id: "15",
        name: "Bharela Ringan",
        description: "Ringan (eggplant) in a rich and flavorful Kathiyawadi curry",
        price: "$19.00",
        image: bharela_ringan,
        popular:true,
      },
       {
        id: "16",
        name: "Bharela Papad",
        description: "Crispy papad filled with a flavorful mixture",
        price: "$19.00",
        image: bharela_papad,
        popular:true,
      },
       {
        id: "17",
        name: "Dahi Gathiya",
        description: "Yogurt-based curry with crunchy Gathiya bits",
        price: "$18.00",
        image: dai_gathiya,
        popular:true,
      },
      {
        id: "18",
        name: "Desi Chana",
        description: "Chickpeas cooked in a rich, aromatic tomato-based sauce",
        price: "$18.00",
        image: chana_masala,
        popular:true,
      },
      {
      id: "19",
      name: "Moong Masala",
      description: "Chickpeas cooked in a rich, aromatic tomato-based sauce",
      price: "$18.00",
      image: "",
      popular:true,
    },
    {
      id: "20",
      name: "Moong Palak",
      description:"",
      price: "$18.00",
      image: "",
      popular:true,
    },
     
    {
      id: "21",
      name: "Lasaniya Bataka",
      description: "Potato curry in a rich and creamy sauce",
      price: "$18.00",
      image: lasaniya_batata,
      popular:false,
    },
    {
      id: "22",
      name: "Sev Lili Dungari",
      description: "Crunchy sev and lili dungari in a flavorful spring onion curry",
      price: "$19.00",
      image: "",
      popular:false,
    },
     {
      id: "23",
      name: "Cheese Sev Lili Dungari",
      description: "",
      price: "$20.00",
      image: "",
      popular:false,
    },
    {
      id: "24",
      name: "Kaju Lasan",
      description: "Rich cashew curry with a hint of garlic",
      price: "$19.00",
      image: kaju_lasan,
      popular: true
    },
    {
      id: "25",
      name: "Kaju Gathiya",
      description: "Indian-style cheese curry with paneer",
      price: "$19.00",
      image: kaju_gathiya,
      popular: true
    },
    {
      id: "26",
      name: "Undhiyu",
      description: "Mixed vegetables in a rich and flavorful curry sauce",
      price: "$21.00",
      image: surti_undhiyu,
      popular:false,
    },
    ],
    cheese_paneer_dhamaal: [
      {
        id: "27",
        name: "Paneer Butter Masala",
        description: "Rich and creamy paneer in a smooth buttery sauce",
        price: "$19.00",
        image: paneer_butter_masala,
        popular: true
        
      },
      {
        id: "28",
        name: "Paneer Takatak",
        description: "Indian-style cheese curry with paneer",
        price: "$19.99",
        image: paneer_takatak,
        popular: true
      },
      {
        id: "29",
        name: "Paneer Angara",
        description: "",
        price: "$19.00",
        image: "",
        popular: true
      },
      {
        id: "30",
        name: "Methi Mutter Paneer",
        description: "",
        price: "$20.00",
        image: "",
        popular: true
      },
       {
        id: "31",
        name: "Veg Kolhapuri",
        description: "",
        price: "$20.00",
        image: "",
        popular: true
      },
      {
        id: "32",
        name: "Paneer Lasaniya",
        description: "Rich and creamy paneer in a flavorful sauce",
        price: "$19.00",
        image: paneer_lasagna,
        popular: false
      },
      {
        id: "33",
        name: "Palak Paneer",
        description: "Creamy spinach curry with paneer",
        price: "$20.00",
        image: palak_paneer,
        popular: true
      },
      {
        id: "34",
        name: "Paneer Bhurji",
        description: "",
        price: "$21.00",
        image: palak_paneer,
        popular: true
      },
        {
        id: "35",
        name: "Paneer Tikka Masala",
        description: "",
        price: "$21.00",
        image: palak_paneer,
        popular: false
      },
      {
        id: "36",
        name: "Cheese Butter Masala",
        description: "Rich and creamy paneer in a buttery masala sauce",
        price: "$20.00",
        image: chess_butter_masala,
        popular: true
      },
      {
        id: "37",
        name: "Cheese Lasaniya",
        description: "",
        price: "$20.00",
        image: chess_butter_masala,
        popular: false
      },
      {
        id: "38",
        name: "Kaju Curry",
        description: "Rich and creamy curry made with cashews and paneer",
        price: "$20.00",
        image: kaju_curry,
        popular: false
      },
      {
        id: "39",
        name: "Kaju Butter Masala",
        description: "",
        price: "$20.00",
        image: "",
        popular: true
      },
       {
        id: "40",
        name: "Cheese Kaju Masala",
        description: "",
        price: "$21.00",
        image: "",
        popular: true
      }, 
    ],
    snacks: [
      {
        id: "41",
        name: "Lilva Kachori (4 Pcs)",
        description: "",
        price: "$10.00",
        image: "",
        popular: false
        
      },
      {
        id: "42",
        name: "Veg Cutlet (4 Pcs)",
        description: "",
        price: "$10.99",
        image: "",
        popular: false
      },
      {
        id: "43",
        name: "Dry Vagharelo Rotlo",
        description: "",
        price: "$12.00",
        image: "",
        popular: false
      },
      
    ],
    sweets: [
      {
        id: "44",
        name: "Gulab Jamun",
        description: "Three pieces",
        price: "$6.00",
        image:gulab_jambun ,
        popular: false,
      },
      {
        id: "45",
        name: "Sukhadi",
        description: "Three pieces",
        price: "$6.00",
        image: sukhadi,
         popular: false,
      },
      {
        id: "46",
        name: "Puran Poli",
        description: "Two pieces",
        price: "$8.00",
        image: sukhadi,
         popular: false,
      },
      
      {
        id: "47",
        name: "Shrikhand",
        description: "(200*gm)",
        price: "$12.00",
        image:"" ,
        
      },
      {
        id: "48",
        name: "Dry Fruit Churmu",
        description: "Traditional Gujarati sweet treat made with rotlo and churma",
        price: "$10.00",
        image:"" ,
        
      },
      
    ],
    rotla: [
      {
        id: "49",
        name: "Butter/Ghee Fulka Rotli",
        description: "Traditional Gujarati flatbread made with ghee and white flour",
        price: "$3.00",
        image: roti,
        popular: false
      },
      {
        id: "50",
        name: "Ghee Bajari Rotlo", 
        description: "Traditional Gujarati flatbread made with ghee and bajri flour",
        price: "$5.00",
        image: bajra_rotlo
      },
      {
        id: "51",
        name: "Ghee Makai Rotlo", 
        description: "Traditional Gujarati flatbread made with ghee and maki flour",
        price: "$5.00",
        image: ""
      },
      
    ],
     dal_ni_kamal: [
      {
        id: "52",
        name: "Gujarati Kadhi",
        description: "",
        price: "$10.00",
        image: "",
        popular: true,
        
      },
      {
        id: "53",
        name: "Dal Fry",
        description: "",
        price: "$18.00",
        image: dal_fry,
        popular: true,
        
      },
      {
        id: "54",
        name: "Tadka Dal Fry",
        description: "Rich and creamy lentil curry with a hint of butter",
        price: "$20.00",
        image: butter_dal_tadka,
        popular: true,
        
      },
      
    ],
    rice: [
      {
        id: "55",
        name: "Plain Khichdi Kadhi",
        description: "",
        price: "$18.00",
        image: plain_khichdi,
        popular: true
        
      },
      {
        id: "56",
        name: "Vaghareli Khichdi Kadhi",
        description: "",
        price: "$19.00",
        image: "",
        popular: true
      },
      {
        id: "57",
        name: "Swaminarayan Khichdi Kadhi",
        description: "",
        price: "$20.00",
        image: ""
      },
      {
        id: "58",
        name: "Tulsi Sp. Rajwadi Khichdi Kadhi",
        description: "",
        price: "$20.00",
        image: "",
        popular: "true"
      },
      {
        id: "59",
        name: "Plain Rice",
        description: "Soft, fluffy steamed white rice",
        price: "$8.00",
        image: rice
      },
      {
        id: "60",
        name: "Jeera Rice",
        description: "",
        price: "$8.00",
        image: ""
      },
      {
        id: "61",
        name: "Masala Rice with Curd",
        description: "",
        price: "$16.00",
        image: ""
      }
    ],
    
    drinks: [
      {
        id: "62",
        name: "Dahi",
        description: "",
        price: "$4.00",
        image: chas,
        popular: false,
         
        
      },
      {
        id: "63",
        name: "Masala Chhas",
        description: "",
        price: "$6.00",
        image:lasai ,
        
      },
      {
        id: "64",
        name: "Sweet Lassie",
        description: "",
        price: "$6.00",
        image:lasai ,
        
      },
    
      {
        id: "65",
        name: "Mango lassie",
        description: "",
        price: "$7.00",
        image:lasai ,
        
      },
    
      {
        id: "66",
        name: "Kaju Lassie",
        description: "",
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
    <div className="flex justify-center gap-2 overflow-x-auto whitespace-nowrap no-scrollbar">
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