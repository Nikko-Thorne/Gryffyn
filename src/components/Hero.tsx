import { ChevronDown, Globe, Linkedin, Mail, Facebook, Instagram } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-amber-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
        <div className="mb-8 animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            Gryffyn Jernigan
          </h1>
          <p className="text-xl md:text-2xl text-blue-200 mb-2 animate-fade-in-up animation-delay-500">
            REALTOR®
          </p>
          <p className="text-lg md:text-xl text-amber-200 mb-8 animate-fade-in-up animation-delay-500">
            DREAM TEAM | AMPLIFY
          </p>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in-up animation-delay-1000">
            Your trusted real estate professional in Spokane. Helping families find their dream homes 
            and achieve their real estate goals with personalized service and expert market knowledge.
          </p>
        </div>

        <div className="flex space-x-6 mb-12 animate-fade-in-up animation-delay-1500">
          <a
            href="mailto:gryffynjerniganrealtor@gmail.com"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center space-x-2"
          >
            <Mail size={20} />
            <span>Contact Me</span>
          </a>
          <a
            href="#about"
            onClick={(e) => { e.preventDefault(); scrollToAbout(); }}
            className="border-2 border-white/30 hover:border-white/50 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
          >
            My Services
          </a>
        </div>

        <div className="flex space-x-6 animate-fade-in-up animation-delay-2000">
          <a
            href="https://facebook.com/gryffynjernigan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110"
            aria-label="Facebook"
          >
            <Facebook size={24} />
          </a>
          <a
            href="https://www.instagram.com/gryffynjernigan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110"
            aria-label="Instagram"
          >
            <Instagram size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/gryffyn-jernigan-46b81a230"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="https://linqapp.com/gryffyn_jernigan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110"
            aria-label="LinqApp Profile"
          >
            <Globe size={24} />
          </a>
          <a
            href="mailto:gryffynjerniganrealtor@gmail.com"
            className="text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110"
            aria-label="Email"
          >
            <Mail size={24} />
          </a>
        </div>

        <div className="absolute bottom-8 animate-bounce">
          <button
            onClick={scrollToAbout}
            className="text-gray-400 hover:text-white transition-colors duration-300"
            aria-label="Scroll to About section"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;