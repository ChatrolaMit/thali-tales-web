import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import bharelo_rotlo from "@/assets/bharelo_rotlo.png";
import cheese_bharelo_rotlo from "@/assets/cheese_bharelo_rotlo.png";
import rosted_papad from "@/assets/rosted_papad.png";
import fry_papad from "@/assets/fry_papad.png";
import masala_papad from "@/assets/masala_papad.jpeg";
import ghee_gud from "@/assets/ghee_gud.png";
import sev_tomato from "@/assets/sevtomato.jpg";
import sev_lasaniya from "@/assets/sev_lasaniya.png";
import dahi_tikhari from "@/assets/dahi_tikhari.png";
import kathiyawadi_dhokali from "@/assets/kathiyawadi_dhokali.png";
import ringan_bharthu from "@/assets/ringan_bharthu.png";
import bharela_ringan from "@/assets/bharela_ringan.png";
import dahi_gathiya from "@/assets/dahi_gathiya.png";
import desi_chana from "@/assets/desi_chana.png";
import mug_masala from "@/assets/mug_masala.png";
import lasaniya_batata from "@/assets/lasaniya_batata.png";
import sev_dungari from "@/assets/sev_dungari.png";
import cheese_sev_lili_dungari from "@/assets/cheese_sev_lili_dungari.png";
import kaju_lasan from "@/assets/kaju_lasan.jpg";
import kaju_gathiya from "@/assets/kaju_gathiya.jpeg";
import undhiyu from "@/assets/undhiyu.png";
import papad_nu_shak from "@/assets/papad_nu_shak.png";
import khichu from "@/assets/khichu.png";
import paneer_takatak from "@/assets/paneer_takatak.png";
import paneer_angara from "@/assets/paneer_angara.png";
import methi_mutter_paneer from "@/assets/methi_mutter_paneer.png";
import veg_kolhapuri from "@/assets/veg_kolhapuri.png";
import palak_paneer from "@/assets/palak_paneer.png";
import paneer_bhurji from "@/assets/paneer_bhurji.png";
import paneer_tikka_masala from "@/assets/paneer_tikka_masala.jpg";
import cheese_butter_masala from "@/assets/cheese_butter_masala.png";
import cheese_lasaniya from "@/assets/cheese_lasaniya.png";
import kaju_butter_masala from "@/assets/kaju_butter_masala.png";
import cheese_kaju_masala from "@/assets/cheese_kaju_masala.png";
import lilva_kachori from "@/assets/lilva_kachori.png";
import veg_cutlet from "@/assets/veg_cutlet.png";
import vagharelo_rotlo from "@/assets/vagharelo_rotlo.jpeg";
import gulab_jambun from "@/assets/gulab_jambun.jpeg";
import sukhadi from "@/assets/sukhadi.jpeg";
import puran_poli from "@/assets/puran_poli.png";










import jeera_rice from "@/assets/jeera_rice.jpeg";
import bajra_rotlo from "@/assets/bajra_rotlo.jpg";
import roti from "@/assets/roti.jpg";
import plain_khichdi from "@/assets/plain_khichdi.jpeg";
import kadhi from "@/assets/kadhi.jpeg";
import rice from "@/assets/rice.jpg";
import paneer_lasagna from "@/assets/paneer_lasagna.png";
import chess_butter_masala from "@/assets/chess_butter_masala.png";
import kaju_curry from "@/assets/kaju_curry.png";
import paneer_butter_masala from "@/assets/paneer_butter_masala.jpeg";
import kaju_paneer from "@/assets/kaju_paneer.jpg";

import bharela_papad from "@/assets/bharela_papad.jpeg";



import dal_fry from "@/assets/dal_fry.jpg";
import butter_dal_tadka from "@/assets/butter_dal_tadka_fry.jpg";
import mango_ras from "@/assets/mango_ras.jpeg";
import barja_rotlo_churmo from "@/assets/barja_rotlo_churmo.jpeg";
import chas from "@/assets/chas.jpeg";
import lasai from "@/assets/lasai.jpeg";
import dai_gathiya from "@/assets/dai_gathiya.jpg";
import dahi_rotlo from "@/assets/dahi_rotlo.png";
import { SwatchBook } from "lucide-react";

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState(
    "starters_swad_ni_saruat",
  );

  const categories = [
    {
      id: "starters_swad_ni_saruat",
      name: "Swad Ni Saruat (Starter)",
      label: "Swad Ni Saruat (Starter)",
    },
    {
      id: "kathiyawadi_ramzat",
      name: "Kathiyawadi Ramzat",
      label: "Kathiyawadi Ramzat",
    },
    {
      id: "cheese_paneer_dhamaal",
      name: "Cheese Paneer Dhamaal",
      label: "Cheese Paneer Dhamaal",
    },
    { id: "snacks", name: "Snacks", label: "Snacks" },
    { id: "sweets", name: "Sweets", label: "Sweets" },
    { id: "rotla", name: "Rotla-Rotli", label: "Rotla-Rotli" },
    { id: "dal_ni_kamal", name: "Punjabi Ni Kamal", label: "Dal Ni Kamal" },
    { id: "rice", name: "Rice Ni Lijjat", label: "Rice Ni Lijjat" },
    { id: "drinks", name: "Beverages", label: "Beverages" },
  ];

  const menuItems = {
    starters_swad_ni_saruat: [
      {
        id: "1",
        name: "Vagharelo Rotlo - Dahi",
        description:
          "Traditional millet rotlo crumbled and tempered with garlic, onions, green chilies, and spices — a rustic Kathiyawadi favorite",
        price: "$17.00",
        image: vagharelo_rotlo,
        popular: true,
        jain: true,
        swaminarayan: true,
      },
      {
        id: "2",
        name: "Tulsi Veg. Dahi Rotlo",
        description:
          "Traditional millet rotlo crumbled and mixed with fresh curd, onions, green chilies, and mild spices — a cooling and comforting Kathiyawadi classic",
        price: "$18.00",
        image: dahi_rotlo,
        jain: true,
        swaminarayan: true,
      },
      {
        id: "3",
        name: "Tulsi Special Bharelo Rotlo",
        description:
          "Traditional millet rotlo stuffed with a spicy mix of onions, garlic, green chilies, peanuts, and authentic Kathiyawadi spices — bursting with rustic flavors",
        price: "$12.00",
        image: bharelo_rotlo,
        popular: true,
      },
      {
        id: "4",
        name: "Cheese Bharelo Rotlo",
        description:
          "Traditional millet rotlo stuffed with a rich blend of melted cheese, onions, green chilies, and flavorful spices",
        price: "$14.00",
        image: cheese_bharelo_rotlo,
        popular: false,
      },
      {
        id: "5",
        name: "Rosted Papad / Papadi",
        description: "Thin, crispy papad roasted to perfection.",
        price: "$2.50",
        image: rosted_papad,
      },
      {
        id: "6",
        name: "Fry Papad / Fry Khichiya papad",
        description:
          "Thin, crunchy papad deep-fried until golden and lightly seasoned",
        price: "$2.50",
        image: fry_papad,
      },
      {
        id: "7",
        name: "Masala Papad",
        description:
          "Crispy papad topped with fresh onions, tomatoes, green chilies, herbs, and tangy spices — a crunchy and refreshing starter.",
        price: "$5.00",
        image: masala_papad,
      },
      {
        id: "8",
        name: "Cheese Masala Papad",
        description:
          "Crispy papad topped with fresh onions, tomatoes, green chilies, tangy spices, and a generous layer of melted cheese.",
        price: "$7.00",
        image: "",
      },
      {
        id: "9",
        name: "Gud Ghee",
        description: "Pure jaggery and desi ghee",
        price: "$4.00",
        image: ghee_gud,
        popular: false,
      },
    ],
    kathiyawadi_ramzat: [
      {
        id: "10",
        name: "Sev Tomato",
        description:
          "Tangy tomato curry cooked with spices and topped with crunchy sev - a classic Gujarati comfort dish.",
        price: "$17.00",
        image: sev_tomato,
        popular: true,
        jain: true,
        swaminarayan: true,
      },
      {
        id: "11",
        name: "Dahi Tikhari",
        description:
          "Spiced yogurt curry cooked with aromatic spices and tempered with mustard seeds, curry leaves, and green chilies - light, tangy, and comforting.",
        price: "$12.00",
        image: dahi_tikhari,
        jain: true,
        swaminarayan: true,
      },
      {
        id: "12",
        name: "Sev Lasaniya",
        description:
          "Spicy garlic curry topped with crunchy sev for a bold Kathiyawadi flavor",
        price: "$17.00",
        image: sev_lasaniya,
        popular: true,
        spicy: true,
      },
      {
        id: "13",
        name: "Ringan Bharthu",
        description:
          "Smoky roasted eggplant mashed and cooked with onions, tomatoes, garlic, and spices.",
        price: "$20.00",
        image: ringan_bharthu,
        popular: true,
        jain: true,
      },
      {
        id: "14",
        name: "Kathiyawadi Dhokali",
        description:
          "Soft wheat dumplings gently cooked in a flavorful, spiced, and tangy gravy, infused with aromatic herbs",
        price: "$19.00",
        image: kathiyawadi_dhokali,
        popular: false,
      },
      {
        id: "15",
        name: "Bharela Ringan",
        description:
          "Ringan stuffed with a spiced gram flour mixture and aromatic Kathiyawadi spices — a traditional, flavorful delicacy.",
        price: "$20.00",
        image: bharela_ringan,
        popular: true,
        jain: true,
        swaminarayan: true,
      },
      {
        id: "16",
        name: "Bharela Papad",
        description:
          "Crispy papads cooked in a spiced yogurt and gram flour gravy, tempered with cumin, mustard, ginger, green chilies, and aromatic spices, finished with kasuri methi and fresh coriander",
        price: "$19.00",
        image: bharela_papad,
        popular: false,
        jain: true,
        swaminarayan: true,
      },
      {
        id: "17",
        name: "Dahi Gathiya",
        description:
          "Crispy gathiya in spiced yogurt, tempered with mustard, cumin, curry leaves, and red chilies, finished with fresh coriander",
        price: "$18.00",
        image: dahi_gathiya,
        swaminarayan: true,
        jain: true,
      },
      {
        id: "18",
        name: "Desi Chana",
        description:
          "Tender desi chickpeas slow-cooked in a spiced tomato-based sauce with aromatic herbs",
        price: "$18.00",
        image: desi_chana,
        swaminarayan: true,
        jain: true,
      },
      {
        id: "19",
        name: "Moong Masala",
        description:
          "Whole green moong beans cooked with aromatic spices, tempered with mustard seeds, ginger, garlic, and onions, finished with tomatoes and fresh coriander",
        price: "$18.00",
        image: mug_masala,
        swaminarayan: true,
        jain: true,
      },
      {
        id: "20",
        name: "Urad Masala",
        description:
          "Whole green moong beans cooked with fresh spinach and aromatic spices, tempered with mustard seeds, garlic, and onions",
        price: "$18.00",
        image: "",
        swaminarayan: true,
        jain: true,
      },

      {
        id: "21",
        name: "Lasaniya Bataka",
        description:
          "Baby potatoes cooked in a spicy garlic and red chili paste with onions, tomatoes, and aromatic spices, tempered with cumin, coriander, and asafoetida, and finished with fresh coriander",
        price: "$18.00",
        image: lasaniya_batata,
        popular: true,
        spicy: true,
      },
      {
        id: "22",
        name: "Sev Lili Dungari",
        description:
          "Fresh spring onions and thick sev cooked in a spicy garlic-chili paste, finished in a tangy buttermilk or gram flour gravy",
        price: "$20.00",
        image: sev_dungari,
        popular: true,
        spicy: true,
      },
      {
        id: "23",
        name: "Cheese Sev Lili Dungari",
        description:
          "Fresh spring onions and thick sev cooked in a tangy, spicy gravy with cheese, optionally enriched with buttermilk or gram flour, and garnished with fresh coriander",
        price: "$21.00",
        image: cheese_sev_lili_dungari,
        popular: true,
        spicy: true,
      },
      {
        id: "24",
        name: "Kaju Lasan",
        description:
          "Fried cashews and plenty of garlic cooked in a spicy onion-tomato gravy, finished with cream",
        price: "$20.00",
        image: kaju_lasan,
        spicy: true,
      },
      {
        id: "25",
        name: "Kaju Gathiya",
        description:
          "Fried cashews and crispy gathiya simmered in a spicy, tangy tomato-onion gravy, served fresh to keep the gathiya crunchy",
        price: "$20.00",
        image: kaju_gathiya,
        popular: true,
        jain: true,
        swaminarayan: true,
      },
      {
        id: "26",
        name: "Undhiyu",
        description:
          "Potatoes, yams, sweet potatoes, brinjals, and beans slow-cooked with aromatic green masala and fenugreek dumplings",
        price: "$22.00",
        image: undhiyu,
        popular: true,
      },
      {
        id: "27",
        name: "Papad nu Shak",
        description:
          "Potatoes, yams, sweet potatoes, brinjals, and beans slow-cooked with aromatic green masala and fenugreek dumplings",
        price: "$18.00",
        image: papad_nu_shak,
        swaminarayan: true,
        jain: true,
      },
      {
        id: "28",
        name: "Khichu",
        description:
          "Potatoes, yams, sweet potatoes, brinjals, and beans slow-cooked with aromatic green masala and fenugreek dumplings",
        price: "$12.00",
        image: khichu,
        swaminarayan: true,
        jain: true,
      },
    ],
    cheese_paneer_dhamaal: [
      {
        id: "29",
        name: "Paneer Butter Masala",
        description:
          "Soft paneer cubes simmered in a rich, creamy tomato and butter gravy, subtly spiced for a smooth, indulgent flavor.",
        price: "$20.00",
        image: paneer_butter_masala,
        popular: true,
        jain: true,
        swaminarayan: true,
      },
      {
        id: "30",
        name: "Paneer Takatak",
        description:
          "Crispy paneer cubes tossed with onions, bell peppers, and tomatoes in a spicy, flavorful gravy, enriched with cream or cashew paste and garnished with fresh coriander",
        price: "20.99",
        image: paneer_takatak,
        popular: true,
      },
      {
        id: "31",
        name: "Paneer Angara",
        description:
          "Paneer cubes cooked in a rich, spicy gravy with onions, tomatoes, bell peppers, and cashews, finished with a smoky “Angara” flavor",
        price: "$20.00",
        image: paneer_angara,
        spicy: true,
      },
      {
        id: "32",
        name: "Methi Mutter Paneer",
        description:
          "Soft paneer cubes cooked with fresh fenugreek leaves and green peas in a rich, creamy tomato-onion gravy",
        price: "$21.00",
        image: methi_mutter_paneer,
      },
      {
        id: "33",
        name: "Veg Kolhapuri",
        description:
          "A fiery, aromatic curry of mixed vegetables like carrots, beans, potatoes, cauliflower, and peas, cooked in a rich, spiced coconut-onion gravy with whole roasted spices",
        price: "$21.00",
        image: veg_kolhapuri,
        swaminarayan: true,
        jain: true,
      },
      {
        id: "34",
        name: "Paneer Lasaniya",
        description:
          "Paneer cubes cooked in a rich, creamy garlic-tomato gravy with cashew paste, finished with cream, butter, and kasuri methi",
        price: "$20.00",
        image: "",
        popular: true,
        spicy: true,
      },
      {
        id: "35",
        name: "Palak Paneer",
        description:
          "Soft paneer cubes simmered in a smooth, spiced spinach gravy",
        price: "$21.00",
        image: palak_paneer,
        popular: true,
        swaminarayan: true,
        jain: true,
      },
      {
        id: "36",
        name: "Paneer Bhurji",
        description:
          "Spiced, scrambled paneer cooked with onions, tomatoes, and aromatic herbs",
        price: "$22.00",
        image: paneer_bhurji,
        popular: true,
      },
      {
        id: "37",
        name: "Paneer Tikka Masala",
        description:
          "Marinated paneer cubes grilled to perfection and simmered in a rich, creamy tomato-onion gravy",
        price: "$22.00",
        image: paneer_tikka_masala,
      },
      {
        id: "38",
        name: "Cheese Butter Masala",
        description:
          "Soft cheese cubes simmered in a rich, creamy tomato and cashew-based gravy",
        price: "$21.00",
        image: cheese_butter_masala,
        popular: true,
        jain: true,
        swaminarayan: true,
      },
      {
        id: "39",
        name: "Cheese Lasaniya",
        description:
          "A rich and comforting dish, cheese lasagna layers wide lasagna noodles with a savory tomato sauce and a blend of creamy",
        price: "$21.00",
        image: cheese_lasaniya,
        popular: false,
      },
      {
        id: "40",
        name: "Kaju Curry",
        description:
          "Roasted cashews simmered in a rich, creamy onion-tomato gravy, delicately spiced",
        price: "$21.00",
        image: "",
        swaminarayan: true,
        jain: true,
      },
      {
        id: "41",
        name: "Kaju Butter Masala",
        description:
          "Roasted cashews cooked in a rich, buttery tomato gravy with subtle spices",
        price: "$21.00",
        image: kaju_butter_masala,
        popular: true,
        jain: true,
        swaminarayan: true,
      },
      {
        id: "42",
        name: "Cheese Kaju Masala",
        description:
          "Tender cheese and cashews simmered in a velvety tomato-butter sauce, finished with cream",
        price: "$22.00",
        image: cheese_kaju_masala,
        swaminarayan: true,
        jain: true,
      },
    ],
    snacks: [
      {
        id: "43",
        name: "Lilva Kachori (4 Pcs)",
        image: lilva_kachori,
        price: "$10.00",
        description:
          "Crispy, flaky pastry filled with a spicy, sweet, and tangy mixture of fresh green pigeon peas and aromatic spices",
        swaminarayan: true,
        jain: true,
      },
      {
        id: "44",
        name: "Veg Cutlet (4 Pcs)",
        description:
          "Spiced mashed vegetables shaped into patties, coated in breadcrumbs",
        price: "$10.00",
        image: veg_cutlet,
        swaminarayan: true,
        jain: true,
      },
      {
        id: "45",
        name: "Dry Vagharelo Rotlo",
        description: "Crumbled millet flatbread stir-fried with a spicy",
        price: "$12.00",
        image: vagharelo_rotlo,
        swaminarayan: true,
        jain: true,
      },
    ],
    sweets: [
      {
        id: "46",
        name: "Gulab Jamun (3 Pcs)",
        description:
          "Soft, spongy milk dumplings soaked in fragrant sugar syrup",
        price: "$6.00",
        image: gulab_jambun,
        popular: false,
      },
      {
        id: "47",
        name: "Sukhadi (3 Pcs)",
        description:
          "A traditional Gujarati sweet made with whole wheat flour, jaggery, and ghee",
        price: "$6.00",
        image: sukhadi,
        popular: false,
      },
      {
        id: "48",
        name: "Puran Poli (2 Pcs)",
        description:
          "Soft, sweet flatbread stuffed with a spiced chana dal and jaggery filling",
        price: "$8.00",
        image: puran_poli,
        popular: false,
      },

      {
        id: "49",
        name: "Shrikhand (200*gm)",
        description:
          "Creamy, strained yogurt sweetened and flavored with saffron and cardamom",
        price: "$12.00",
        image: "",
      },
      {
        id: "50",
        name: "Dry Fruit Churmu",
        description:
          "A rich, sweet mixture of crushed wheat, ghee, jaggery, and assorted dry fruits",
        price: "$10.00",
        image: "",
      },
    ],
    rotla: [
      {
        id: "51",
        name: "Ghee Fulka Rotli",
        description:
          "Traditional Gujarati flatbread made with ghee and white flour",
        price: "$3.00",
        image: "",
        popular: false,
      },
      {
        id: "52",
        name: "Ghee Bajari Rotlo",
        description:
          "Traditional Gujarati flatbread made with ghee and bajri flour",
        price: "$5.00",
        image: "",
      },
      {
        id: "53",
        name: "Ghee Makai Rotlo",
        description:
          "Traditional Gujarati flatbread made with ghee and maki flour",
        price: "$5.00",
        image: "",
      },
    ],
    dal_ni_kamal: [
      {
        id: "54",
        name: "Dal Fry",
        description:
          "Yellow lentils cooked until creamy and tempered with garlic, onions, tomatoes, and aromatic spices",
        price: "$18.00",
        image: "",
      },
      {
        id: "55",
        name: "Butter Dal Tadka",
        description:
          "Creamy yellow lentils slow-cooked and finished with generous butter, then tempered with garlic, onions, tomatoes, and aromatic Indian spices.",
        price: "$20.00",
        image: "",
      },
      {
        id: "56",
        name: "Rajma Masala",
        description:
          "Slow-cooked red kidney beans simmered in a spiced onion-tomato gravy with aromatic Indian masalas.",
        price: "$16.00",
        image: "",
      },
      {
        id: "57",
        name: "Dal Makhni",
        description:
          "Slow-cooked black lentils and kidney beans simmered with butter, cream, and aromatic spices.",
        price: "$18.00",
        image: "",
      },
    ],
    rice: [
      {
        id: "58",
        name: "Gujarati Dal & Rice",
        description:
          "Lightly spiced Gujarati-style lentil dal with a hint of sweetness, paired with fluffy steamed rice.",
        price: "$18.00",
        image: "",
        swaminarayan: true,
        jain: true,
      },
      {
        id: "59",
        name: "Gujarati Kadhi & Plain Khichadi",
        description:
          "Smooth yogurt-based Gujarati kadhi with gentle spices, served alongside simple, soothing plain khichdi.",
        price: "$18.00",
        image: "",
        swaminarayan: true,
        jain: true,
      },
      {
        id: "60",
        name: "Gujarati Kadhi & Kathiyawadi Khichadi",
        description:
          "Sweet-tangy Gujarati kadhi paired with hearty Kathiyawadi khichdi seasoned with rustic spices.",
        price: "$20.00",
        image: "",
        swaminarayan: true,
        jain: true,
      },

      {
        id: "61",
        name: "Plain Rice",
        description: "Soft, fluffy steamed white rice",
        price: "$8.00",
        image: "",
      },
      {
        id: "62",
        name: "Jeera Rice",
        description: "Steamed rice tempered with fragrant cumin seeds",
        price: "$10.00",
        image: "",
      },
      {
        id: "63",
        name: "Masala Rice",
        description:
          "Steamed rice tempered with Indian spices for a flavorful touch",
        price: "$15.00",
        image: "",
      },
      {
        id: "64",
        name: "Masala Rice with Curd",
        description: "Flavorful masala rice served with cooling fresh curd.",
        price: "$18.00",
        image: "",
        swaminarayan: true,
        jain: true,
      },
    ],

    drinks: [
      {
        id: "65",
        name: "Dahi (100g)",
        description: "Fresh, creamy yogurt",
        price: "$4.00",
        image: "",
        popular: false,
      },
      {
        id: "66",
        name: "Masala Chhas",
        description:
          "Refreshing buttermilk blended with aromatic spices and herbs",
        price: "$6.00",
        image: chas,
      },
      {
        id: "67",
        name: "Sweet Lassie",
        description: "Creamy, chilled yogurt blended with sugar",
        price: "$6.00",
        image: "",
      },

      {
        id: "68",
        name: "Mango lassie",
        description: "Creamy yogurt blended with ripe mangoes",
        price: "$7.00",
        image: lasai,
      },

      {
        id: "69",
        name: "Kaju Lassie",
        description: "Smooth yogurt drink enriched with cashew paste",
        price: "$8.00",
        image: "",
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
              Discover our authentic vegetarian dishes made with fresh
              ingredients and traditional recipes
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
                className="min-w-[100px]"
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
              {categories.find((cat) => cat.id === activeCategory)?.label}
            </h2>
          </div>

          <div className="space-y-6">
            {menuItems[activeCategory as keyof typeof menuItems].map((item) => (
              <Card
                key={item.id}
                className="overflow-hidden hover:shadow-elegant transition-shadow duration-300"
              >
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row">
                    {/* Left side - Item details */}
                    <div className="flex-1 p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="text-xl font-semibold text-foreground">
                              {item.name}
                            </h3>
                            {item.popular && (
                              <Badge
                                variant="secondary"
                                className="bg-primary/10 text-primary"
                              >
                                Popular
                              </Badge>
                            )}

                            {item.jain && (
                              <Badge
                                variant="secondary"
                                className="bg-primary/10 text-primary"
                              >
                                Jain
                              </Badge>
                            )}

                            {item.swaminarayan && (
                              <Badge
                                variant="secondary"
                                className="bg-primary/10 text-primary"
                              >
                                Swaminarayan
                              </Badge>
                            )}

                            {item.spicy && (
                              <Badge
                                variant="secondary"
                                className="bg-primary/10 text-primary"
                              >
                                Spicy
                              </Badge>
                            )}
                          </div>
                          <p className="text-muted-foreground leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <span className="text-2xl font-bold text-primary">
                          {item.price}
                        </span>
                      </div>
                    </div>

                    {/* Right side - Image */}
                    {/* <div className="md:w-80 h-48 md:h-auto">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div> */}
                    <div className="md:w-80">
                      <div className="aspect-[4/3] w-full overflow-hidden">
                        <img
                          src={item.image || "/placeholder.jpg"}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
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
