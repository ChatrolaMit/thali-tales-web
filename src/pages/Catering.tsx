import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Clock, MapPin, CheckCircle } from "lucide-react";

const Catering = () => {
  const packages = [
    {
      name: "PUNJABI",
      items: [
        "Cheese Butter Masala",
        "Paneer Butter Masala",
        "Palak Paneer",
        "Cheese Kaju Masala",
        "Veg Kolhapuri",
        "Veg Makhanwala",
        "Paneer Tikka Masala",
        "Cheese Lasaniya",
        "Paneer Angara",
        "Kaju Curry",
      ],
    },
    {
      name: "KATHIYAVADI",
      items: [
        "Sev Tameta",
        "Sev Lasaniya",
        "Kaju Lasaniya",
        "Lasaniya Batata",
        "Ringan Nu Bharthu(Olo)",
        "Rajwadi Dhokli",
        "Bharela Ringan-Batata",
        "Rajwadi Undhiyu",
        "Desi Chana Masala",
        "Mag Masala",
        "Kaju Gathiya",
        "Bhindi Masala",
        "Dahi Bhindi",
        "Dahi Tikhari",
        "Bharela Papad",
        "Kathiyawadi Mehfil",
      ],
    },
    {
      name: "GUJARATI",
      items: [
        "Lachko Dal",
        "Tameta Batata Gujarati Shaak",
        "Ringan Batata Shaak",
        "Batata Vatana Shak",
        "Dum Aloo",
        "Sukhi Bhaji (Potato)",
        "Aloo Palak",
        "Mix Gujarati Dry",
        "Moong Masala",
        "Desi Chana",
        "Moong Dal Palak",
        
      ],
    },

    {
      name: "INDIAN STREET TADKA",
      items: [
        "Chole Bhature",
        "Chole Kulcha",
        "Bhaji Kulcha",
        "Bhaji Pav",
        "Pulao",
        "Veg Biryani",
        "Peas Pulao",
        "Kashmiri Pulao",
        "Manchurian",
        "Manchurian Noodles",
        "Manchurian Rice",
        "Paneer Chilly",
      ],
      
    },
    {
      name: "INDIAN BREAKFAST",
      items: [
        "Poha",
        "Upma",
        "Idli Sambhar",
        "Samosa Chaat",
        "Mix Bhajiya",
        "Khaman",
        "Thepla Bhaji",
        "Vadapav",
        "Delhi Chaat",
        "Dabeli",
        "Samosa Chaat",
      ],
      popular: false,
    },
    {
      name: "EXTRA",
      items: [
        "Khichiya Papad",
        "Papad",
        "Papadi",
        "Papad Churi",
        "Ghee - Gol",
        "Chaas",
        "Lassi",
      ],
      popular: false,
    },
    {
      name: "SWEET",
      items: [
        "Gulab Jamun",
        "Magdal Halvo",
        "Mohanthal",
        "Sukhdi",
      ],
      popular: false,
    },
    {
      name: "FARSAN",
      items: [
        "Vagharelo Rotlo(Koro)",
        "Bhajiya",
        "Bhakharwadi",
        "Kachori",
        "Samosa",
        
      ],
    },
     
     {
      name: "INDIAN BREAD",
      items: [
        "Bajri Rotlo",
        "Phulka Roti",
        "Paratha",
      ],
      popular: false,
    },
    {
      name: "GUJARATI RICE",
      items: [
        "Gujarati Dal",
        "Rice",
      ],
      popular: false,
    },
    {
      name: "RICE",
      items: [
        "Sadi Khichdi - Kadhi",
        "Masala Khichdi - Kadhi",
        "Rajwadi Khichdi - Kadhi",
        "Dal Fry - Jeera Rice",
      ],
      popular: false,
    },
  ];

  const features = [
    {
      icon: Users,
      title: "Any Group Size",
      description: "From intimate gatherings to large celebrations",
    },
    {
      icon: Clock,
      title: "Timely Delivery",
      description: "Hot, fresh food delivered on schedule",
    },
    {
      icon: MapPin,
      title: "Clayton",
      description: "Serving across Melbourne",
    },
    {
      icon: CheckCircle,
      title: "100% Vegetarian",
      description: "Pure vegetarian cuisine for all occasions",
    },
  ];

  return (
    <div className="min-h-screen">
      <TopBar />
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-primary/5 to-background py-20">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 font-heading">
              Catering <span className="text-primary">Services</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Make your special occasions memorable with our authentic
              vegetarian catering services
            </p>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90"
              onClick={() => (window.location.href = "/contact")}
            >
              Get Quote Now
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-muted/30">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-16">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 font-heading">
              Catering Packages
            </h2>
            <p className="text-lg text-muted-foreground">
              Choose from our carefully curated packages or customize your own
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card
                key={index}
                className={`relative overflow-hidden hover:shadow-elegant transition-shadow duration-300 ${
                  pkg.popular ? "border-primary/50" : ""
                }`}
              >
                {pkg.popular && (
                  <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-xl font-semibold">
                    {pkg.name}
                  </CardTitle>
                  {/* <p className="text-muted-foreground">{pkg.serves}</p>
                  <div className="text-3xl font-bold text-primary mt-2">
                    {pkg.price}
                  </div> */}
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {pkg.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary/5">
        <div className="section-container text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4 font-heading">
            Ready to Place Your Catering Order?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your requirements and get a customized
            quote for your event
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Call Now: +61 412 658 983
            </Button>
            <Button size="lg" variant="outline">
              WhatsApp Us
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Catering;
