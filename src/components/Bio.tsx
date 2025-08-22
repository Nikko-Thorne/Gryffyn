import { Award, GraduationCap, MapPin, Star } from 'lucide-react';

const Bio = () => {
  const certifications = [
    "Licensed REALTOR®",
    "DREAM TEAM | AMPLIFY",
    "Market Specialist - Spokane Area",
    "First-Time Buyer Certified"
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Who I Am
            </h2>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                Hello! I'm Gryffyn Jernigan, your dedicated REALTOR® with DREAM TEAM | AMPLIFY. 
                I'm passionate about helping families in Spokane achieve their real estate dreams, 
                whether you're buying your first home, selling your current property, or looking to invest.
              </p>
              <p>
                With deep knowledge of the Spokane market and a commitment to personalized service, 
                I guide my clients through every step of the real estate process. My approach is 
                built on trust, clear communication, and delivering results that exceed expectations.
              </p>
              <p>
                Real estate isn't just about transactions—it's about helping people build their 
                futures and create lasting memories in the place they call home.
              </p>
            </div>
            
            <div className="mt-8 flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-blue-600">
                <MapPin size={20} />
                <span className="font-semibold">Spokane, WA</span>
              </div>
              <a 
                href="https://www.google.com/search?kgmid=%2Fg%2F11w36z8bps&hl=en-US&q=Gryffyn+Jernigan+-+Spokane+Realtor&shndl=30&shem=lsde&kgs=66930c69b14262e4&num=100#"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-amber-600 hover:text-amber-700 transition-colors duration-200"
              >
                <Star size={20} />
                <span className="font-semibold">5-Star Service</span>
              </a>
            </div>
          </div>

          {/* Certifications & Credentials */}
          <div className="bg-gradient-to-br from-blue-50 to-amber-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Award className="w-6 h-6 mr-2 text-blue-600" />
              Certifications & Credentials
            </h3>
            
            <div className="space-y-4 mb-8">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="font-medium text-gray-800">{cert}</span>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-amber-600 p-6 rounded-xl text-white">
              <div className="flex items-center space-x-3 mb-3">
                <GraduationCap className="w-6 h-6" />
                <h4 className="text-lg font-bold">Continuing Education</h4>
              </div>
              <p className="text-blue-100">
                Committed to staying current with market trends, regulations, and 
                best practices to serve you better.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bio;