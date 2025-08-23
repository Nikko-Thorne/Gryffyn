import { Mail, Newspaper, TrendingUp, Star, ExternalLink } from 'lucide-react';

const StayInLoop = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-600 text-white rounded-xl mb-6">
            <Newspaper className="w-8 h-8" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Stay in the Loop
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Get the latest Spokane real estate insights, market updates, and exclusive 
            tips delivered straight to your inbox.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Newsletter Section */}
          <div className="bg-white p-8 rounded-2xl shadow-sm flex flex-col">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-indigo-100 text-indigo-600 rounded-full mb-4">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Weekly Newsletter 📧</h3>
              <h4 className="text-lg font-semibold text-indigo-600 mb-4">
                "Confessions of a Spokane Realtor"
              </h4>
              <p className="text-gray-600">
                Honest insights, market updates, and behind-the-scenes stories
                from your local REALTOR®.
              </p>
            </div>
            
            <div className="space-y-4 mb-6 flex-grow">
              <div className="flex items-center space-x-3 p-3 bg-indigo-50 rounded-lg">
                <TrendingUp className="w-5 h-5 text-indigo-600" />
                <span className="text-gray-700">Weekly market updates</span>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-indigo-50 rounded-lg">
                <Star className="w-5 h-5 text-indigo-600" />
                <span className="text-gray-700">Client success stories</span>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-indigo-50 rounded-lg">
                <Newspaper className="w-5 h-5 text-indigo-600" />
                <span className="text-gray-700">Real estate tips & tricks</span>
              </div>
            </div>

            <a
              href="https://gryffynjerniganrealtor.beehiiv.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
            >
              <Mail size={20} />
              <span>Subscribe Now</span>
              <ExternalLink size={16} />
            </a>
          </div>

          {/* Client Testimonials */}
          <div className="bg-white p-8 rounded-2xl shadow-sm flex flex-col">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-yellow-100 text-yellow-600 rounded-full mb-4">
                <Star className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Client Testimonials 🎉</h3>
              <p className="text-gray-600">
                See what my satisfied clients are saying about their real estate experience.
              </p>
            </div>

            <div className="bg-gradient-to-r from-yellow-50 to-amber-50 p-6 rounded-xl mb-6 flex-grow">
              <div className="flex items-center space-x-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 italic mb-3">
                "Gryffyn made our first home buying experience seamless and stress-free.
                His knowledge of the Spokane market was invaluable!"
              </p>
              <p className="text-sm text-gray-600 font-semibold">- Happy Homeowners</p>
            </div>

            <a
              href="https://www.google.com/search?kgmid=%2Fg%2F11w36z8bps&hl=en-US&q=Gryffyn+Jernigan+-+Spokane+Realtor&shndl=30&shem=lsde&kgs=66930c69b14262e4&num=100#"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-600 hover:to-amber-600 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
            >
              <Star size={20} />
              <span>Read More Reviews</span>
              <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StayInLoop;