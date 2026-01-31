import { useState } from "react";
import { X, ZoomIn } from "lucide-react";
import paneer_takatak from "@/assets/paneer_takatak.png";
import sukhadi from "@/assets/sukhadi.jpeg";
import vagharelo_rotlo from "@/assets/vagharelo_rotlo.jpeg";
import paneer_butter_masala from "@/assets/paneer_butter_masala.jpeg";
import lasai from "@/assets/lasai.jpeg";
import gulab_jambun from "@/assets/gulab_jambun.jpeg";
import sevtomato from "@/assets/sevtomato.jpg";
import kaju_gathiya from "@/assets/kaju_gathiya.jpeg";
import lilva_kachori from "@/assets/lilva_kachori.png";
import kaju_paneer from "@/assets/kaju_paneer.jpg";
import masala_rice from "@/assets/masala_rice.png";
import jeera_rice from "@/assets/jeera_rice.jpeg";

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    { src: sevtomato, alt: "Sev Tomato", category: "Curries Kathiyawadi Ramzat" },
    { src: sukhadi, alt: "Sukhadi", category: "Sweets" },
    { src: paneer_takatak, alt: "Paneer Takatak", category: "Cheese Paneer Dhamaal" },
    { src: vagharelo_rotlo, alt: "Special Vagharelo Rotlo", category: "Starters Swad Ni Saruat" },
    { src: paneer_butter_masala, alt: "Paneer Butter Masala", category: "Cheese Paneer Dhamaal" },
    { src: lasai, alt: "Mango lassie", category: "Beverages" },
    { src: gulab_jambun, alt: "Gulab Jamun", category: "Sweets" },
    { src: kaju_gathiya, alt: "Kaju Gathiya", category: "Curries Kathiyawadi Ramzat" },
    { src: lilva_kachori, alt: "Lilva Kachori", category: "Snacks" },
    { src: kaju_paneer, alt: "Kaju Paneer", category: "Cheese Paneer Dhamaal" },
    { src: masala_rice, alt: "Masala Rice", category: "Rice Ni Lijjat" },
    { src: jeera_rice, alt: "Jeera Rice", category: "Rice Ni Lijjat" },
  ];

  return (
    <section id="gallery" className="section-spacing bg-background">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="heading-secondary text-gradient">
            Flavors on Display
          </h2>
          <p className="text-large max-w-2xl mx-auto">
            Experience the richness of Kathiyawadi cuisine, visually
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300"
              onClick={() => setSelectedImage(image.src)}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white font-semibold text-sm">
                    {image.category}
                  </p>
                  <p className="text-white/80 text-xs">
                    {image.alt}
                  </p>
                </div>
                
                <div className="absolute top-4 right-4">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                    <ZoomIn className="h-4 w-4 text-white" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl max-h-full">
              <img
                src={selectedImage}
                alt="Gallery Image"
                className="max-w-full max-h-full object-contain rounded-lg"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 text-white hover:bg-white/30 transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;