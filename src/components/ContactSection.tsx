import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section id="contact" className="section-spacing bg-accent/30">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="heading-secondary text-gradient">
            Contact Us
          </h2>
          <p className="text-large max-w-2xl mx-auto">
            Get in touch with us for reservations, orders, or any inquiries
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="card-elevated">
              <div className="flex items-start space-x-4">
                <div className="bg-primary rounded-full p-3">
                  <MapPin className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="heading-tertiary">Visit Us</h3>
                  <p className="text-muted-foreground">
                    123 Main Street, Malad West<br />
                    Mumbai, Maharashtra 400064<br />
                    India
                  </p>
                </div>
              </div>
            </div>

            <div className="card-elevated">
              <div className="flex items-start space-x-4">
                <div className="bg-primary rounded-full p-3">
                  <Phone className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="heading-tertiary">Call Us</h3>
                  <p className="text-muted-foreground">
                    +91 98765 43210<br />
                    +91 98765 43211
                  </p>
                </div>
              </div>
            </div>

            <div className="card-elevated">
              <div className="flex items-start space-x-4">
                <div className="bg-primary rounded-full p-3">
                  <Mail className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="heading-tertiary">Email Us</h3>
                  <p className="text-muted-foreground">
                    info@purevegcuisine.com<br />
                    orders@purevegcuisine.com
                  </p>
                </div>
              </div>
            </div>

            <div className="card-elevated">
              <div className="flex items-start space-x-4">
                <div className="bg-primary rounded-full p-3">
                  <Clock className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="heading-tertiary">Opening Hours</h3>
                  <div className="text-muted-foreground space-y-1">
                    <p>Monday - Sunday: 11:00 AM - 10:30 PM</p>
                    <p>Lunch: 11:00 AM - 3:00 PM</p>
                    <p>Dinner: 6:00 PM - 10:30 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="space-y-6">
            <div className="card-elevated text-center">
              <h3 className="heading-tertiary mb-4">Quick Actions</h3>
              <div className="space-y-4">
                <Button className="btn-hero w-full">
                  📞 Call for Reservation
                </Button>
                <Button className="btn-outline-hero w-full">
                  🛍️ Order Online
                </Button>
                <Button className="btn-outline-hero w-full">
                  📍 Get Directions
                </Button>
              </div>
            </div>

            <div className="card-elevated">
              <h3 className="heading-tertiary mb-4">Special Offers</h3>
              <div className="space-y-3">
                <div className="bg-primary/10 rounded-lg p-3">
                  <p className="font-semibold text-primary">🎉 Family Thali Special</p>
                  <p className="text-sm text-muted-foreground">20% off on orders above ₹1000</p>
                </div>
                <div className="bg-primary/10 rounded-lg p-3">
                  <p className="font-semibold text-primary">🚚 Free Delivery</p>
                  <p className="text-sm text-muted-foreground">On orders above ₹500 within 5km</p>
                </div>
                <div className="bg-primary/10 rounded-lg p-3">
                  <p className="font-semibold text-primary">🎂 Birthday Special</p>
                  <p className="text-sm text-muted-foreground">Complimentary dessert for birthday celebrations</p>
                </div>
              </div>
            </div>

            <div className="card-elevated text-center">
              <h3 className="heading-tertiary mb-4">Follow Us</h3>
              <div className="flex justify-center space-x-4">
                <Button variant="outline" size="sm" className="rounded-full">
                  📘 Facebook
                </Button>
                <Button variant="outline" size="sm" className="rounded-full">
                  📷 Instagram
                </Button>
                <Button variant="outline" size="sm" className="rounded-full">
                  🐦 Twitter
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;