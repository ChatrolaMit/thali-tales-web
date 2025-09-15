import { Phone, Mail, MapPin, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="section-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold font-heading">Pure Veg Cuisine</h3>
            <p className="text-primary-foreground/80">
              Authentic vegetarian dining experience in the heart of Mumbai. 
              Fresh ingredients, traditional recipes, modern comfort.
            </p>
            <div className="flex space-x-3">
              <div className="bg-primary-foreground/20 rounded-full p-2">
                <span className="text-lg">🌿</span>
              </div>
              <div className="bg-primary-foreground/20 rounded-full p-2">
                <span className="text-lg">🍛</span>
              </div>
              <div className="bg-primary-foreground/20 rounded-full p-2">
                <span className="text-lg">❤️</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#home" className="hover:text-primary-foreground transition-colors">Home</a></li>
              <li><a href="#serve" className="hover:text-primary-foreground transition-colors">Menu</a></li>
              <li><a href="#about" className="hover:text-primary-foreground transition-colors">About Us</a></li>
              <li><a href="#gallery" className="hover:text-primary-foreground transition-colors">Gallery</a></li>
              <li><a href="#contact" className="hover:text-primary-foreground transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Our Services</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>🥡 Take Away</li>
              <li>🎉 Party Orders</li>
              <li>💳 Online Payment</li>
              <li>📱 Mobile Ordering</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Get in Touch</h4>
            <div className="space-y-3 text-primary-foreground/80">
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">23 Meriton Place, Clayton South, APAC 3169</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4" />
                <span className="text-sm">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4" />
                <span className="text-sm">info@purevegcuisine.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/80 flex items-center justify-center space-x-2">
            <span>© 2024 Pure Veg Cuisine. Made with</span>
            <Heart className="h-4 w-4 text-red-400 fill-current" />
            <span>in Mumbai</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;