import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import about from "@/assets/about.jpeg";
import { Card, CardContent } from "@/components/ui/card";
import {
  Heart,
  Leaf,
  Shield,
  Award,
  Users,
  Sparkles,
} from "lucide-react";

const AboutUs = () => {
  const values = [
    {
      icon: Heart,
      title: "Care",
      description: "Every dish is prepared with love and attention to detail",
    },
    {
      icon: Leaf,
      title: "Freshness",
      description:
        "We source the finest ingredients daily for maximum freshness",
    },
    {
      icon: Shield,
      title: "Trust",
      description: "Building lasting relationships through consistent quality",
    },
    {
      icon: Award,
      title: "Professionalism",
      description: "Committed to excellence in every aspect of our service",
    },
  ];

  return (
    <div className="min-h-screen">
      <TopBar />
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-primary/5 to-background py-20">
        <div className="absolute inset-0 bg-pattern opacity-30"></div>
        <div className="section-container relative">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 font-heading">
              About <span className="text-primary">Us</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Discover the story behind Pure Veg Cuisine and our commitment to
              authentic vegetarian dining
            </p>
          </div>
        </div>
      </section>

      {/* Company Story Section */}
      <section className="section-spacing">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="heading-secondary text-gradient">Our Story</h2>

              <div className="space-y-4 text-large">
                <p>
                  At Tulsi Kathiyawadi, located in the heart of Clayton,
                  Melbourne, we bring the rich and rustic flavors of Gujarat
                  straight to your table.
                </p>

                <p>
                  Specialising in traditional Kathiyawadi cuisine, our fully
                  vegetarian menu is a celebration of bold spices, homestyle
                  cooking, and heartwarming hospitality. From our signature
                  Vagharelo Rotlo to the flavorful Paneer Takatak, Sev Tomato,
                  and Surti Undhiyu, each dish is crafted using authentic
                  ingredients and time-honored recipes.
                </p>

                <p>
                  Our chefs prepare every meal fresh, ensuring a dining
                  experience that is both comforting and memorable.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-elegant">
                <img
                  src={about}
                  alt="Kathiyawadi food experience"
                  className="w-full h-80 lg:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
              </div>

              <div className="absolute -top-4 -right-4 bg-primary rounded-full w-12 h-12 flex items-center justify-center">
                <Users className="text-primary-foreground w-6 h-6" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-warm-brown rounded-full w-8 h-8 flex items-center justify-center">
                <Heart className="text-white w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-spacing bg-accent/30">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="heading-secondary text-gradient mb-4">
              Mission & Vision
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Guided by our values and driven by our passion for excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-card shadow-medium">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
                <p className="text-muted-foreground">
                  To serve authentic, pure vegetarian cuisine that nourishes
                  the body and soul while preserving traditional cooking
                  methods.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card shadow-medium">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-3">Our Vision</h3>
                <p className="text-muted-foreground">
                  To become the most trusted name in vegetarian dining while
                  maintaining the highest standards of quality and
                  authenticity.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 🌟 UPDATED VALUES SECTION 🌟 */}
      <section className="section-spacing bg-gradient-to-br from-primary/5 via-orange-50 to-background">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="heading-secondary text-gradient mb-4">Our Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card
                key={index}
                className="bg-card shadow-medium hover:shadow-elegant transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-6 text-center">
                  <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-spacing">
        <div className="section-container">
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-3xl p-12 text-center">
            <Sparkles className="h-12 w-12 text-primary mx-auto mb-6" />
            <h2 className="heading-secondary text-gradient mb-6">
              Experience the Difference
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join our family of satisfied customers and taste the authentic
              flavors that define Tulsi Kathiyawadi.
            </p>

            <div className="flex gap-4 justify-center">
              <a href="/menu" className="btn-primary">
                View Our Menu
              </a>
              <a href="/contact" className="btn-secondary">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
