import React from 'react';
import { Home, Search, FileText, Key, ExternalLink } from 'lucide-react';

const ForBuyers = () => {
  const buyerServices = [
    {
      icon: <Search className="w-6 h-6" />,
      title: "Property Search",
      description: "Access to exclusive listings and market insights to find your perfect home."
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Market Analysis",
      description: "Detailed market reports to help you make informed decisions."
    },
    {
      icon: <Key className="w-6 h-6" />,
      title: "Negotiation Support",
      description: "Expert negotiation to get you the best deal possible."
    }
  ];

  const buyerResources = [
    {
      title: "Buyer's - Start Here ✅",
      description: "Essential first steps for home buyers in Spokane",
      color: "blue"
    },
    {
      title: "My Buyer's Blueprint (Flipbook) 🔍",
      description: "Complete guide to the buying process from start to finish",
      color: "blue"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-xl mb-6">
            <Home className="w-8 h-8" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            For Buyers
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to find your dream home in Spokane? I'm here to guide you through 
            every step of the home buying process with expert knowledge and personalized service.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {buyerServices.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Resources */}
        <div className="bg-white p-8 rounded-2xl shadow-sm">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Buyer Resources 📚
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {buyerResources.map((resource, index) => (
              <a
                key={index}
                href={index === 0 ? "https://docs.google.com/forms/d/e/1FAIpQLScl4g1Plx8VA7XUqDu_FbQBWT_xDFx58zLJ97Utl7g6FuFEuQ/viewform" : "https://drive.google.com/file/d/1fpmVxCocI_VMZYpm3WTSDwGagIiW5lDO/view"}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-6 bg-gradient-to-r from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100 rounded-xl transition-all duration-300 group"
              >
                <div className="flex-grow">
                  <h4 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 mb-2">
                    {resource.title}
                  </h4>
                  <p className="text-gray-600 text-sm">{resource.description}</p>
                </div>
                <ExternalLink className="w-5 h-5 text-blue-600 ml-4 group-hover:scale-110 transition-transform duration-200" />
              </a>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <a
              href="mailto:gryffynjerniganrealtor@gmail.com?subject=I'm ready to start buying!"
              className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
            >
              <span>I'm Ready to Buy!</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForBuyers;