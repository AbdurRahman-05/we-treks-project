import React from 'react';
import { Tent, Utensils, Camera, Map, Users, Shield } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Tent,
      title: 'Accommodation',
      description: 'Quality camping equipment and comfortable stays in mountain lodges and homestays.',
      features: ['Premium Tents', 'Sleeping Bags', 'Mountain Lodges', 'Local Homestays']
    },
    {
      icon: Utensils,
      title: 'Meals & Nutrition',
      description: 'Nutritious and delicious meals prepared by experienced cooks with dietary accommodations.',
      features: ['Fresh Ingredients', 'Vegetarian Options', 'High-Energy Meals', 'Clean Water']
    },
    {
      icon: Map,
      title: 'Expert Guidance',
      description: 'Certified mountain guides with extensive local knowledge and wilderness experience.',
      features: ['Certified Guides', 'Route Planning', 'Weather Updates', 'Emergency Protocols']
    },
    {
      icon: Camera,
      title: 'Photography',
      description: 'Professional photography services to capture your adventure memories forever.',
      features: ['Action Shots', 'Landscape Photos', 'Group Pictures', 'Digital Gallery']
    },
    {
      icon: Users,
      title: 'Group Activities',
      description: 'Team building activities and cultural experiences with local communities.',
      features: ['Bonfire Nights', 'Cultural Shows', 'Team Games', 'Local Interactions']
    },
    {
      icon: Shield,
      title: 'Safety & Insurance',
      description: 'Comprehensive safety measures and insurance coverage for peace of mind.',
      features: ['Medical Kit', 'Rescue Support', 'Travel Insurance', 'Safety Briefings']
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 id="services-header" className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Complete Trekking
            <span className="text-emerald-600 block">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We provide end-to-end trekking services to ensure your adventure is safe, comfortable, and unforgettable.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 group">
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-6 group-hover:bg-emerald-600 transition-colors duration-300">
                <service.icon className="h-8 w-8 text-emerald-600 group-hover:text-white transition-colors duration-300" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3 flex-shrink-0"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Additional Info Section */}
        <div className="mt-20 bg-emerald-600 rounded-3xl p-8 md:p-12 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">24/7 Support During Your Trek</h3>
              <p className="text-emerald-100 mb-6 leading-relaxed">
                Our dedicated support team is available round the clock to assist you during your trekking adventure. From pre-trek planning to post-trek follow-up, we're with you every step of the way.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-emerald-300 rounded-full mr-3"></div>
                  Emergency communication devices
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-emerald-300 rounded-full mr-3"></div>
                  Real-time weather monitoring
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-emerald-300 rounded-full mr-3"></div>
                  Medical assistance coordination
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-emerald-300 rounded-full mr-3"></div>
                  Route modification if needed
                </li>
              </ul>
            </div>
            <div className="text-center">
              <div className="inline-block bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <div className="text-4xl font-bold mb-2">99.8%</div>
                <div className="text-emerald-200">Success Rate</div>
                <div className="mt-4 text-sm text-emerald-100">
                  Based on successful trek completions over the last 5 years
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;