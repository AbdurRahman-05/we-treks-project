import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, MapPin, Star, CheckCircle, XCircle, Camera } from 'lucide-react';
import { trekkingPackages } from '../data/trekkingPackages';


const TrekDetail = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openModal = (image: string) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setIsModalOpen(false);
  };

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  const { id } = useParams();
  const navigate = useNavigate();
  const packageData = trekkingPackages.find(pkg => pkg.id === parseInt(id || '0'));

  if (!packageData) {
    return (
      <div className="flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Trek Not Found</h1>
          <Link to="/" className="text-emerald-600 hover:text-emerald-700">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  const handleBookNow = () => {
    navigate('/booking', { state: { packageData: { ...packageData, price: packageData.trekFee } } });
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'text-green-600 bg-green-100';
      case 'Moderate': return 'text-yellow-600 bg-yellow-100';
      case 'Challenging': return 'text-orange-600 bg-orange-100';
      case 'Extreme': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="">
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <img
          src={packageData.image}
          alt={packageData.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">{packageData.title}</h1>
            <div className="flex items-center justify-center space-x-4 text-lg">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                {packageData.location}
              </div>
              <div className="flex items-center">
                <Star className="h-5 w-5 text-yellow-500 fill-current" />
                <span className="ml-2">{packageData.rating}</span>
              </div>
            </div>
          </div>
        </div>
        <Link
          to="/?scrollTo=trekking-packages"
          className="absolute top-8 left-8 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors"
        >
          <ArrowLeft className="h-6 w-6" />
        </Link>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Quick Info */}
            <div className="grid grid-cols-1 md:grid-cols-1 gap-4 mb-8">
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <div className={`font-semibold px-2 py-1 rounded text-sm ${getDifficultyColor(packageData.difficulty)}`}>{packageData.difficulty}</div>
                <div className="text-sm text-gray-600">Difficulty</div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <div className="font-semibold">{packageData.bestTime}</div>
                <div className="text-sm text-gray-600">Best Time</div>
              </div>
            </div>

            {/* Description */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">About This Trek</h2>
              <p className="text-gray-700 leading-relaxed mb-4">{packageData.description}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{packageData.detailedDescription}</p>
              <p className="text-gray-700 leading-relaxed">{packageData.difficulty_details}</p>
            </div>

            {/* Highlights */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Trek Highlights</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {packageData.highlights && packageData.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-emerald-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Itinerary */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Detailed Itinerary</h2>
              <div className="space-y-4">
                {packageData.itinerary && packageData.itinerary.map((day, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-semibold text-lg text-gray-900">
                        Day {day.day}: {day.title}
                      </h3>
                      <div className="text-sm text-gray-500">
                        {day.altitude && <span className="mr-4">Alt: {day.altitude}</span>}
                        {day.distance && <span>Dist: {day.distance}</span>}
                      </div>
                    </div>
                    <p className="text-gray-700">{day.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Preparation */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Preparation Required</h2>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <ul className="space-y-2">
                  {packageData.preparation && packageData.preparation.map((item, index) => (
                    <li key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Gallery */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Photo Gallery</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {packageData.gallery && packageData.gallery.map((image, index) => (
                  <div key={index} className="relative group overflow-hidden rounded-lg cursor-pointer" onClick={() => openModal(image)}>
                    <img
                      src={image}
                      alt={`${packageData.title} gallery ${index + 1}`}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Camera className="h-8 w-8 text-white" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Booking Card */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg sticky top-24">
              <div className="text-center mb-6">
                <div className="text-3xl font-bold text-emerald-600 mb-2">{packageData.trekFee}
                  <span className="text-lg font-normal text-gray-500"></span>
                </div>
              </div>

              <button
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-lg font-semibold text-lg transition-colors duration-200 mb-4"
                onClick={handleBookNow}
              >
                Book Now
              </button>

              <button
                className="w-full border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 py-3 rounded-lg font-semibold transition-colors duration-200 mb-6"
                onClick={() => { window.location.href = '/contact'; }}
              >
                Enquire Now
              </button>

              {/* Inclusions */}
              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 mb-3">Inclusions</h3>
                <ul className="space-y-2">
                  {packageData.inclusions && packageData.inclusions.map((item, index) => (
                    <li key={index} className="flex items-start text-sm">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Exclusions */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Exclusions</h3>
                <ul className="space-y-2">
                  {packageData.exclusions && packageData.exclusions.map((item, index) => (
                    <li key={index} className="flex items-start text-sm">
                      <XCircle className="h-4 w-4 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && selectedImage && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center" onClick={closeModal}>
          <div className="relative max-w-4xl max-h-full" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage} alt="Full view" className="max-w-full max-h-[90vh] object-contain" />
            <button onClick={closeModal} className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2">
              <XCircle className="h-6 w-6" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TrekDetail;