import React from 'react';
import { Home, Users, TrendingUp, FileText, Star, Shield } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Home className="w-8 h-8" />,
      title: "Buyer Services",
      description: "Complete guidance through the home buying process from start to finish.",
      features: ["Market Analysis", "Property Search", "Negotiation", "Closing Support"]
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Seller Services", 
      description: "Maximize your home's value with strategic marketing and expert pricing.",
      features: ["Home Valuation", "Marketing Strategy", "Professional Photography", "Negotiation"]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Client Testimonials",
      description: "Hear what my satisfied clients have to say about their experience.",
      features: ["5-Star Reviews", "Google Ratings", "Client Stories", "Referral Network"]
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Resources & Guides",
      description: "Comprehensive resources to help you make informed decisions.",
      features: ["Buyer's Blueprint", "Market Reports", "Weekly Newsletter", "Educational Content"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Professional Network",
      description: "Access to trusted professionals for all your real estate needs.",
      features: ["Mortgage Lenders", "Home Inspectors", "Insurance Agents", "Legal Support"]
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Ongoing Support",
      description: "Continued assistance even after your transaction is complete.",
      features: ["Property Management", "Market Updates", "Referral Services", "Maintenance Tips"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            My Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive real estate services designed to make your buying or selling 
            experience smooth, successful, and stress-free.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-amber-600 text-white rounded-xl mb-6">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
              <div className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;