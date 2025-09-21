// React hook for managing state
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import bikeridingImg from '../images/bikeriding.jpg';
import assamImg from '../images/assam.jpg';
import megalayaImg from '../images/megalaya.jpg';
import { X } from 'lucide-react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

/**
 * Gallery component displays a grid of trekking images with modal preview.
 * Users can click an image to view it enlarged in a modal.
 */
const Gallery = () => {
  // State to track which image is selected for modal view
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    setIsMobile(mediaQuery.matches);

    const handleResize = () => {
      setIsMobile(mediaQuery.matches);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Array of gallery images with src, alt, and title
  const galleryImages = [
    {
      src: 'https://images.pexels.com/photos/2325446/pexels-photo-2325446.jpeg',
      alt: 'Mountain trekking adventure',
      title: 'Himalayan Heights'
    },
    {
      src: 'https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg',
      alt: 'Everest Base Camp view',
      title: 'Everest Base Camp'
    },
    {
      src: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg',
      alt: 'Alpine lake reflection',
      title: 'Kashmir Great Lakes'
    },
    {
      src: 'https://images.pexels.com/photos/1365425/pexels-photo-1365425.jpeg',
      alt: 'Trekking group on mountain',
      title: 'Group Adventures'
    },
    {
      src: assamImg,
      alt: 'Assam Adventure',
      title: 'Assam Adventure'
    },
    {
      src: megalayaImg,
      alt: 'Meghalaya Adventure',
      title: 'Meghalaya Adventure'
    },
    {
      src: bikeridingImg,
      alt: 'Bike Riding Adventure',
      title: 'Bike Riding Adventure'
    },
    {
      src: 'https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg',
      alt: 'Mountain peak',
      title: 'Summit Views'
    },
    {
      src: 'https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg',
      alt: 'Camping in mountains',
      title: 'Mountain Camping'
    }
  ];

  const sliderSettings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 4000,
    cssEase: "linear",
    arrows: false,
  };

  return (
    // Main gallery section
    <section id="gallery" className="py-20 bg-gray-50">
      {/* Container for gallery content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        {/* Header section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Adventure
            <span className="text-emerald-600 block">Gallery</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Witness the breathtaking beauty of the Himalayas through the lens of our trekking adventures.
          </p>
        </div>

        {/* Gallery Grid */}
        {isMobile ? (
          <Slider {...sliderSettings}>
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 px-2"
                onClick={() => setSelectedImage(image.src)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 sm:h-72 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-lg font-semibold">{image.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
                onClick={() => setSelectedImage(image.src)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 sm:h-72 object-cover group-hover:scale-110 transition-transform duration-500 animate-blink"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-lg font-semibold">{image.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Modal for enlarged image */}
        {selectedImage && (
          <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
            <div className="relative max-w-4xl max-h-full">
              <button
                className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
                onClick={() => setSelectedImage(null)}
              >
                <X className="h-8 w-8" />
              </button>
              <img
                src={selectedImage}
                alt="Enlarged gallery image"
                className="max-w-full max-h-full object-contain rounded-lg"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Create Your Own Adventure?</h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of adventurers who have discovered the magic of the Himalayas with We Trek India.
          </p>
          <button
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            onClick={() => {
              navigate('/contact');
              setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
            }}
          >
            Start Your Journey
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
