import React, { useState } from 'react';
import { MessageCircle, Calendar, Send, CheckCircle, X } from 'lucide-react';
import PrivacyPolicy from './PrivacyPolicy';

interface ContactProps {
  showPrivacyPolicy: boolean;
  setShowPrivacyPolicy: (show: boolean) => void;
}

const Contact = ({ showPrivacyPolicy, setShowPrivacyPolicy }: ContactProps) => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
    optIn: false
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showFullConsent, setShowFullConsent] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const target = e.target;
    const value = target.type === 'checkbox' ? (target as HTMLInputElement).checked : target.value;
    const name = target.name;
    
    setFormState({
      ...formState,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to your backend
    console.log('Form submitted:', formState);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormState({ name: '', email: '', message: '', optIn: false });
  };

  const contactMethods = [
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "LinqApp Profile",
      description: "Visit my complete profile and resources",
      action: "View Profile",
      link: "https://linqapp.com/gryffyn_jernigan"
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Schedule Call",
      description: "Book a free real estate consultation",
      action: "Schedule Meeting",
      link: "#"
    }
  ];

  return (
    <>
    <section className="py-20 bg-white">
      <div id="contact" className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ready to Make Your Move?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Whether you're buying your first home, selling your current property, or looking to invest,
            I'm here to help you achieve your real estate goals. Let's start the conversation today.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Methods */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Contact Me</h3>
            <div className="space-y-6 mb-8">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.link}
                  className="flex items-center p-6 bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl hover:from-blue-50 hover:to-amber-50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg border border-gray-100"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-600 to-amber-600 text-white rounded-lg flex items-center justify-center mr-4">
                    {method.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">{method.title}</h4>
                    <p className="text-gray-600 mb-2">{method.description}</p>
                    <span className="text-blue-600 font-medium">{method.action}</span>
                  </div>
                </a>
              ))}
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-amber-600 p-8 rounded-2xl text-white">
              <h4 className="text-2xl font-bold mb-4">Why Choose Me?</h4>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <CheckCircle size={20} className="flex-shrink-0" />
                  <span>Local market expertise</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle size={20} className="flex-shrink-0" />
                  <span>Personalized service</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle size={20} className="flex-shrink-0" />
                  <span>Proven track record</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle size={20} className="flex-shrink-0" />
                  <span>Trusted professional network</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Get Started Today</h3>
            
            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Message Sent!</h4>
                <p className="text-gray-600">Thank you for reaching out. I'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Tell me about your real estate goals
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Are you looking to buy, sell, or invest? Tell me about your timeline and goals..."
                  />
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      id="optIn"
                      name="optIn"
                      checked={formState.optIn}
                      onChange={handleInputChange}
                      required
                      className="mt-1 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                    />
                    <div className="ml-2">
                      <label htmlFor="optIn" className="text-sm text-gray-600 leading-relaxed cursor-pointer">
                        I agree to be contacted by <strong>Gryffyn Jernigan</strong> via call, email, and text for real estate services.
                        <span className="text-blue-600 cursor-pointer hover:underline ml-1" onClick={() => setShowFullConsent(!showFullConsent)}>
                          {showFullConsent ? ' Show Less' : ' Read More'}
                        </span>
                        {showFullConsent && (
                          <p className="text-xs text-gray-500 mt-1 transition-all duration-300 ease-in-out">
                            To opt-out, you can reply 'stop' at any time or reply 'help' for assistance. You can also click the
                            unsubscribe link in the emails. Message and data rates may apply. Message frequency may vary.
                            <span className="text-blue-600 cursor-pointer hover:underline ml-1" onClick={() => setShowPrivacyPolicy(true)}>
                              Privacy Policy
                            </span>.
                          </p>
                        )}
                      </label>
                    </div>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={!formState.optIn}
                    className="w-full bg-gradient-to-r from-blue-600 to-amber-600 hover:from-blue-700 hover:to-amber-700 disabled:from-gray-400 disabled:to-gray-400 disabled:cursor-not-allowed text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:transform-none flex items-center justify-center space-x-2"
                  >
                    <Send size={20} />
                    <span>Send Message</span>
                  </button>
                </div>
            </form>
            )}
          </div>
        </div>
      </div>
    </section>

    {showPrivacyPolicy && (
      <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-lg p-8 max-w-3xl w-full max-h-[90vh] overflow-y-auto relative">
          <button
            onClick={() => setShowPrivacyPolicy(false)}
            className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
            title="Close privacy policy"
          >
            <X size={24} />
          </button>
          <PrivacyPolicy />
        </div>
      </div>
    )}
  </>
  );
};

export default Contact;