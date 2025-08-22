import { Instagram, Users, Heart } from 'lucide-react';

const InstagramSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 text-white rounded-xl mb-6">
            <Instagram className="w-8 h-8" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">My Real Estate Journey</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Follow along as I help Spokane families achieve their real estate dreams. 
            From successful closings to market insights, get a behind-the-scenes look at your local REALTOR®.
          </p>
        </div>

        <div className="mb-8">
          <div 
            className="elfsight-app-c3603236-3e0f-42b9-90fc-ed6aff6399c9" 
            data-elfsight-app-lazy
          ></div>
        </div>

        <div className="text-center">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-pink-100 text-pink-600 rounded-full mb-3">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Client Stories</h3>
              <p className="text-gray-600">Celebrating successful closings and happy homeowners</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-full mb-3">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Market Updates</h3>
              <p className="text-gray-600">Latest market trends and insights from Spokane</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 text-purple-600 rounded-full mb-3">
                <Instagram className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Behind the Scenes</h3>
              <p className="text-gray-600">Personal moments and daily life as your REALTOR®</p>
            </div>
          </div>
          
          <p className="text-center text-gray-600 mb-6 text-lg">
            See my latest posts and client success stories
          </p>
          
          <a
            href="https://www.instagram.com/gryffynjernigan"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
          >
            <Instagram size={20} />
            <span>Follow on Instagram</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default InstagramSection;