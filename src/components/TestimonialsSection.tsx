import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const TestimonialsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
  {
    name: "Trupal Patel",
    // location: "Richmond Hills",
    rating: 5,
    text: "Stepping into this restaurant is like taking a culinary journey to the heart of Kathiyawad. The flavors are incredibly authentic and rich, with each dish telling a story of traditional Gujarati cooking.",
    image: "👩‍💼"
  },
  {
    name: "Anjali Parekh",
    // location: "Sunnyvale",
    rating: 5,
    text: "We tried cheese butter masala and ghee rotli (which was piping hot) it was really really delicious. Kudos to the staff for being kind and welcoming.",
    image: "👨‍💻"
  },
  {
    name: "Meet Shah ",
    // location: "Maple Grove",
    rating: 5,
    text: "Really good and tasty Kathiyavadi food.Highly recommended for Bajri no Rotlo, Sev Tameta. Nice options for No Onion Garlic/ Jain.",
    image: "👩‍🏫"
  },
  {
    name: "Hardik shah",
    // location: "Oakwood",
    rating: 5,
    text: "The food was incredible and the staff was amazing. If you want kathiyawadi food then this is place to be. This is the place has to be on everyones devour list!!",
    image: "👨‍🔧"
  }
];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="section-spacing bg-accent/20">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="heading-secondary text-gradient">
            What Our Customers Say
          </h2>
          <p className="text-large max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="card-elevated mx-4 text-center relative">
                    <div className="absolute top-4 left-4 text-primary/20">
                      <Quote className="h-12 w-12" />
                    </div>
                    
                    <div className="pt-8">
                      <div className="text-6xl mb-4">{testimonial.image}</div>
                      
                      <div className="flex justify-center mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star 
                            key={i} 
                            className="h-5 w-5 text-yellow-400 fill-current" 
                          />
                        ))}
                      </div>
                      
                      <p className="text-lg italic text-foreground mb-6 leading-relaxed">
                        "{testimonial.text}"
                      </p>
                      
                      <div className="border-t border-border pt-4">
                        <h4 className="font-semibold text-primary text-lg">
                          {testimonial.name}
                        </h4>
                        <p className="text-muted-foreground">
                          {/* {testimonial.location} */}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <Button
            variant="ghost"
            size="sm"
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-card shadow-medium rounded-full p-2 hover:bg-primary hover:text-primary-foreground"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <Button
            variant="ghost"
            size="sm"
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-card shadow-medium rounded-full p-2 hover:bg-primary hover:text-primary-foreground"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === currentSlide ? "bg-primary" : "bg-muted"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;