import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Leaf, Shield, Award, Users, ChefHat, Sparkles } from "lucide-react";

const AboutUs = () => {
  const teamMembers = [
    {
      name: "Rajesh Kumar",
      role: "Head Chef",
      image: "/api/placeholder/150/150"
    },
    {
      name: "Priya Sharma",
      role: "Kitchen Manager", 
      image: "/api/placeholder/150/150"
    },
    {
      name: "Amit Patel",
      role: "Customer Support",
      image: "/api/placeholder/150/150"
    }
  ];

  const values = [
    {
      icon: Heart,
      title: "Care",
      description: "Every dish is prepared with love and attention to detail"
    },
    {
      icon: Leaf,
      title: "Freshness",
      description: "We source the finest ingredients daily for maximum freshness"
    },
    {
      icon: Shield,
      title: "Trust",
      description: "Building lasting relationships through consistent quality"
    },
    {
      icon: Award,
      title: "Professionalism",
      description: "Committed to excellence in every aspect of our service"
    }
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
              Discover the story behind Pure Veg Cuisine and our commitment to authentic vegetarian dining
            </p>
          </div>
        </div>
      </section>

      {/* Company Story Section */}
      <section className="section-spacing">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <h2 className="heading-secondary text-gradient">
                Our Story
              </h2>
              
              <div className="space-y-4 text-large">
                <p>
                  Founded in 2008 with a simple vision: to bring authentic vegetarian cuisine 
                  to families across Mumbai. What started as a small kitchen in Malad West 
                  has grown into a beloved dining destination that serves happiness on every plate.
                </p>
                
                <p>
                  We believe that food is more than sustenance—it's a way to connect people, 
                  preserve traditions, and create lasting memories. Every recipe in our kitchen 
                  tells a story, passed down through generations and perfected with love.
                </p>
                
                <p>
                  Today, we continue to honor our roots while embracing innovation, ensuring 
                  that every meal we serve reflects our commitment to quality, authenticity, 
                  and the pure joy of vegetarian cooking.
                </p>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-elegant">
                <img
                  src="/api/placeholder/500/400"
                  alt="Happy family enjoying homemade meals"
                  className="w-full h-80 lg:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
              </div>
              
              {/* Decorative Elements */}
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
            <Card className="bg-card border-border shadow-medium hover:shadow-elegant transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="bg-primary/10 rounded-full p-3 mr-4">
                    <Leaf className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Our Mission</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  To serve authentic, pure vegetarian cuisine that nourishes the body and soul, 
                  while preserving traditional cooking methods and promoting sustainable, 
                  healthy eating habits in our community.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border shadow-medium hover:shadow-elegant transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="bg-primary/10 rounded-full p-3 mr-4">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Our Vision</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  To become the most trusted name in vegetarian dining, expanding our reach 
                  while maintaining the highest standards of quality, authenticity, and 
                  customer satisfaction across all our services.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-spacing">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="heading-secondary text-gradient mb-4">
              Meet Our Team
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The passionate people behind every delicious meal
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="relative inline-block mb-4">
                  <div className="w-32 h-32 mx-auto rounded-full overflow-hidden shadow-medium group-hover:shadow-elegant transition-shadow duration-300">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-primary rounded-full w-8 h-8 flex items-center justify-center">
                    <ChefHat className="w-4 h-4 text-primary-foreground" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{member.name}</h3>
                <p className="text-primary font-medium">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-spacing bg-accent/30">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="heading-secondary text-gradient mb-4">
              Our Values
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="bg-card border-border shadow-medium hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">{value.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-spacing">
        <div className="section-container">
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-3xl p-12 text-center">
            <div className="max-w-3xl mx-auto">
              <Sparkles className="h-12 w-12 text-primary mx-auto mb-6" />
              <h2 className="heading-secondary text-gradient mb-6">
                Experience the Difference
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Join our family of satisfied customers and taste the authentic flavors 
                that have made us Mumbai's favorite vegetarian restaurant.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/menu" 
                  className="btn-primary inline-flex items-center justify-center gap-2"
                >
                  View Our Menu
                </a>
                <a 
                  href="/#contact" 
                  className="btn-secondary inline-flex items-center justify-center gap-2"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;