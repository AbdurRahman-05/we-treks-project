import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Users, MapPin, Star, ArrowRight } from 'lucide-react';
import { trekkingPackages } from '../data/trekkingPackages';


const TrekkingPackages = () => {

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
    <section id="trekking-packages" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Popular Trekking
            <span className="text-emerald-600 block">Packages</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Embark on an unforgettable journey with our most popular trekking packages. Whether you're a seasoned mountaineer or a first-time hiker, we have the perfect Himalayan adventure waiting for you.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="flex flex-wrap justify-center gap-8">
          {trekkingPackages.map((pkg) => (
            <div key={pkg.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group max-w-sm">
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(pkg.difficulty)}`}>
                    {pkg.difficulty}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <MapPin className="h-4 w-4 mr-1" />
                  {pkg.location}
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg flex items-center space-x-1">
                  <Star className="h-4 w-4 text-yellow-500 fill-current" />
                  <span className="text-sm font-medium">{pkg.rating}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">{pkg.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{pkg.description}</p>

                {/* Package Details */}
                <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="h-4 w-4 mr-2 text-emerald-600" />
                    {pkg.trekDuration}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Users className="h-4 w-4 mr-2 text-emerald-600" />
                    {pkg.suitableFor}
                  </div>
                </div>

                {/* Highlights */}
                <div className="mb-4">
                  <div className="text-sm font-medium text-gray-700 mb-2">Highlights:</div>
                  <div className="flex flex-wrap gap-1">
                    {pkg.highlights.map((highlight, index) => (
                      <span key={index} className="text-xs bg-emerald-50 text-emerald-700 px-2 py-1 rounded">
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Price and CTA */}
                <div className="flex items-center justify-end pt-4 border-t border-gray-100">
                  <Link
                    to={`/trek/${pkg.id}`}
                    className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center space-x-1"
                  >
                    <span>View Details</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrekkingPackages;