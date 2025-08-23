import { Download } from 'lucide-react';

const GrabMyInfo = () => {
  const downloadVCard = () => {
    const vCardData = `BEGIN:VCARD
VERSION:3.0
FN:Gryffyn Jernigan
N:Jernigan;Gryffyn;;;
ORG:DREAM TEAM | AMPLIFY
TITLE:REALTOR®
EMAIL:gryffynjerniganrealtor@gmail.com
URL:https://linqapp.com/gryffyn_jernigan
ADR:;;Spokane;WA;;United States
NOTE:Your trusted real estate professional in Spokane
END:VCARD`;

    const blob = new Blob([vCardData], { type: 'text/vcard' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Gryffyn-Jernigan-Contact.vcf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-600 text-white rounded-xl mb-6">
            <Download className="w-8 h-8" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Grab My Info
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Download my vCard to easily save my contact information directly to your device.
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-sm max-w-lg mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">My Contact Information</h3>
          
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-green-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Download className="w-10 h-10 text-white" />
            </div>
            
            <h4 className="text-xl font-semibold text-gray-900 mb-4">Download My vCard</h4>
            <p className="text-gray-600 mb-6">
              Get my complete contact information including phone, email, and social media links
              in a convenient vCard format that you can save directly to your contacts.
            </p>
            
            <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-xl mb-6">
              <h5 className="font-semibold text-gray-900 mb-3">What's included:</h5>
              <ul className="text-sm text-gray-700 space-y-2 text-left">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span>Direct phone contact</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span>Email address</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span>LinqApp profile link</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span>Professional title & company</span>
                </li>
              </ul>
            </div>
            
            <button
              onClick={downloadVCard}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              <Download size={20} />
              <span>Download vCard</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrabMyInfo;