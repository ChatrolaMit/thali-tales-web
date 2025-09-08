import { useState } from "react";
import { X, ZoomIn } from "lucide-react";
import vegStarters from "@/assets/veg-starters.jpg";
import mainCourse from "@/assets/main-course.jpg";
import northIndian from "@/assets/north-indian.jpg";
import southIndian from "@/assets/south-indian.jpg";
import chineseSpecial from "@/assets/chinese-special.jpg";
import dessertsBeverages from "@/assets/desserts-beverages.jpg";
import heroThali from "@/assets/hero-thali.jpg";
import riceBowl from "@/assets/rice-bowl.jpg";

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    { src: heroThali, alt: "Traditional Indian Thali", category: "Thali" },
    { src: vegStarters, alt: "Vegetarian Starters", category: "Starters" },
    { src: mainCourse, alt: "Main Course Curries", category: "Main Course" },
    { src: northIndian, alt: "North Indian Specialties", category: "North Indian" },
    { src: southIndian, alt: "South Indian Dishes", category: "South Indian" },
    { src: chineseSpecial, alt: "Chinese Specialties", category: "Chinese" },
    { src: dessertsBeverages, alt: "Desserts & Beverages", category: "Desserts" },
    { src: riceBowl, alt: "Aromatic Rice", category: "Rice Dishes" }
  ];

  return (
    <section id="gallery" className="section-spacing bg-background">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="heading-secondary text-gradient">
            Food Gallery
          </h2>
          <p className="text-large max-w-2xl mx-auto">
            A visual feast of our delicious vegetarian creations
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