import { Globe, Linkedin, Mail, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-amber-400 bg-clip-text text-transparent">
              Gryffyn Jernigan
            </h3>
            <p className="text-amber-400 font-semibold mb-2">REALTOR® | DREAM TEAM | AMPLIFY</p>
            <p className="text-gray-400 leading-relaxed">
              Your trusted real estate professional in Spokane, dedicated to helping 
              you achieve your property goals with expert guidance and personalized service.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Services
                </a>
              </li>
              <li>
                <a href="#resources" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Resources
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Contact
                </a>
              </li>
              <li>
                <a href="https://linqapp.com/gryffyn_jernigan" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-200">
                  LinqApp Profile
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com/gryffynjernigan"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/gryffynjernigan"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-pink-600 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/gryffyn-jernigan-46b81a230"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://linqapp.com/gryffyn_jernigan"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-green-600 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                aria-label="LinqApp Profile"
              >
                <Globe size={20} />
              </a>
              <a
                href="mailto:gryffynjerniganrealtor@gmail.com"
                className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">
            © {currentYear} Gryffyn Jernigan, REALTOR®. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Powered by <a href="https://techton.cloud/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">Techton</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;