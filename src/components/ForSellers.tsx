import { TrendingUp, Camera, DollarSign, Users, ExternalLink } from 'lucide-react';

const ForSellers = () => {
  const sellerServices = [
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Home Valuation",
      description: "Accurate pricing strategy to maximize your home's value."
    },
    {
      icon: <Camera className="w-6 h-6" />,
      title: "Professional Marketing",
      description: "High-quality photography and strategic marketing campaigns."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Buyer Network",
      description: "Access to qualified buyers and real estate professionals."
    }
  ];

  const sellerResources = [
    {
      title: "What's My Home Worth? ✅",
      description: "Get your free, accurate home valuation report",
      color: "amber"
    },
    {
      title: "Why Hire Me to Sell Your Home? 📝",
      description: "My complete resume and track record of success",
      color: "amber"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-600 text-white rounded-xl mb-6">
            <TrendingUp className="w-8 h-8" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            For Sellers
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to sell your home? Let me help you get the best price in the shortest time 
            with my proven marketing strategies and expert negotiation skills.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {sellerServices.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-lg flex items-center justify-center mb-4">
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
            Seller Resources 📈
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {sellerResources.map((resource, index) => (
              <a
                key={index}
                href={index === 0 ? "https://app.cloudcma.com/api_widget/9d7da01b0a9d72b2cf53812a32e517c0/show?post_url=https://app.cloudcma.com&source_url=ua" : "https://heyzine.com/flip-book/f812d6db32.html"}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-6 bg-gradient-to-r from-amber-50 to-orange-50 hover:from-amber-100 hover:to-orange-100 rounded-xl transition-all duration-300 group"
              >
                <div className="flex-grow">
                  <h4 className="text-lg font-semibold text-gray-900 group-hover:text-amber-600 mb-2">
                    {resource.title}
                  </h4>
                  <p className="text-gray-600 text-sm">{resource.description}</p>
                </div>
                <ExternalLink className="w-5 h-5 text-amber-600 ml-4 group-hover:scale-110 transition-transform duration-200" />
              </a>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <a
              href="mailto:gryffynjerniganrealtor@gmail.com?subject=I'm ready to sell my home!"
              className="inline-flex items-center space-x-2 bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
            >
              <span>I'm Ready to Sell!</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForSellers;