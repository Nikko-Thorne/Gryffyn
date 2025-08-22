import { Award, Target, Users, Zap } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Market Expertise",
      description: "Deep knowledge of Spokane real estate trends and neighborhoods."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Client-Focused",
      description: "Your goals and satisfaction are my top priorities in every transaction."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Quick Response",
      description: "Fast communication and prompt action when opportunities arise."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Proven Results",
      description: "Track record of successful transactions and satisfied clients."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose Me as Your REALTOR®
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            As a dedicated REALTOR® with DREAM TEAM | AMPLIFY, I'm committed to providing 
            exceptional service throughout your real estate journey. Whether you're buying 
            your first home or selling your current property, I'm here to guide you every step of the way.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">My Commitment to You</h3>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Real estate is more than just transactions—it's about helping families achieve their 
              dreams and build their futures. I take pride in understanding your unique needs and 
              providing personalized service that exceeds expectations.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              With extensive market knowledge, a network of trusted professionals, and a commitment 
              to clear communication, I ensure that your real estate experience is smooth, 
              successful, and stress-free.
            </p>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-amber-50 p-8 rounded-2xl">
            <h4 className="text-2xl font-bold text-gray-900 mb-4">What Sets Me Apart</h4>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span>Personalized service tailored to your needs</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                <span>Deep knowledge of the Spokane market</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span>Network of trusted industry professionals</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                <span>Clear communication throughout the process</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl bg-gradient-to-br from-gray-50 to-blue-50 hover:from-blue-50 hover:to-amber-50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-lg"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-amber-600 text-white rounded-xl mb-4 mx-auto">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;