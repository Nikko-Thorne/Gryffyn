import { ExternalLink, FileText, Calculator, Star, BookOpen, Users } from 'lucide-react';

import { Home, TrendingUp } from 'lucide-react';

const Resources = () => {
  const buyerResources = [
    {
      title: "Buyer's - Start Here ✅",
      description: "Essential first steps for home buyers",
      icon: <FileText className="w-5 h-5" />,
      link: "https://docs.google.com/forms/d/e/1FAIpQLScl4g1Plx8VA7XUqDu_FbQBWT_xDFx58zLJ97Utl7g6FuFEuQ/viewform"
    },
    {
      title: "My Buyer's Blueprint (Flipbook) 🔍",
      description: "Complete guide to the buying process",
      icon: <BookOpen className="w-5 h-5" />,
      link: "https://drive.google.com/file/d/1fpmVxCocI_VMZYpm3WTSDwGagIiW5lDO/view"
    }
  ];

  const sellerResources = [
    {
      title: "What's My Home Worth? ✅",
      description: "Get your free home valuation",
      icon: <Calculator className="w-5 h-5" />,
      link: "https://app.cloudcma.com/api_widget/9d7da01b0a9d72b2cf53812a32e517c0/show?post_url=https://app.cloudcma.com&source_url=ua"
    },
    {
      title: "Why Hire Me to Sell Your Home? 📝",
      description: "My complete resume and track record",
      icon: <FileText className="w-5 h-5" />,
      link: "https://heyzine.com/flip-book/f812d6db32.html"
    }
  ];

  const professionalNetwork = [
    {
      category: "Mortgage Lenders 💰",
      professionals: [
        { name: "Hunter Zier", company: "Canopy Mortgage", link: "https://www.google.com/search?client=ms-opera-gx-android&sca_upv=1&channel=new&espv=1&sxsrf=ADLYWIJtwsScafj8y01q-4e1ywHUkQXGPg%3A1726530246138&kgmid=%2Fg%2F11ghpn3xp_&q=Hunter+Zier+-+Canopy+Mortgage&shndl=30&shem=lsde&kgs=1b38a910c7e6f683&num=100" }
      ]
    },
    {
      category: "Home Inspectors 🧐",
      professionals: [
        { name: "Superior Home Inspections", company: "", link: "https://www.google.com/search?client=ms-opera-gx-android&sca_upv=1&channel=new&espv=1&sxsrf=ADLYWIKZ8qFV2s5diCPnJA0CHYZTrhLY8A%3A1726530875665&kgmid=%2Fg%2F11byz3lgqq&q=Superior+Home+Inspections&shndl=30&shem=lsde&kgs=305d0129065952fc&num=100" },
        { name: "Castle Home Inspections", company: "", link: "https://www.google.com/search?sca_upv=1&channel=new&espv=1&sxsrf=ADLYWIL3t9hAyq7vX1ailH38tPj3d7TZtA:1726530371549&kgmid=/g/11h3l0pb1w&q=Castle+Home+Inspection&shndl=30&shem=lsde&kgs=153acf510af3b6cd" }
      ]
    },
    {
      category: "Insurance Agents 🤝",
      professionals: [
        { name: "Brett Johnson", company: "IBK Insurance", link: "https://www.facebook.com/IBKInsurance" },
        { name: "Patrick Grey", company: "American Family Insurance", link: "https://www.google.com/search?hs=IPy&sxsrf=AHTn8zoS2jzuxTSj-Fo5ubct6R7tz1kiLQ%3A1744060015540&kgmid=%2Fg%2F12639zl7v&q=Patrick+Gray+American+Family+Insurance&shndl=30&shem=lcuae%2Cuaasie&kgs=4bbb3952ec3ea433&num=100" }
      ]
    },
    {
      category: "Property Management 🔑",
      professionals: [
        { name: "Atlas Management Group", company: "", link: "https://www.google.com/search?sca_upv=1&channel=new&espv=1&sxsrf=ADLYWIINEWCJKQRs9vF8duMHiHMzoPvS5A%3A1727044335485&kgmid=%2Fg%2F11y3kchmvz&q=Atlas+Management+Group&shndl=30&shem=lsde%2Clsrevc%2Cuptse&kgs=dd51810da541a8fc&num=100" }
      ]
    },
    {
      category: "Law Attorneys ⚖️",
      professionals: [
        { name: "Alissa Raczykowski", company: "", link: "https://grlawspokane.com/team/" },
        { name: "Cynthia DeLeon", company: "", link: "https://www.google.com/search?hs=xyu&sxsrf=AHTn8zoMTtMlcX88PeOrxEhX_485Xxc22Q%3A1744046850603&kgmid=%2Fg%2F1v_smz44&q=Cynthia+L+Deleon&shndl=30&shem=lcuae%2Cuaasie&kgs=5f0f22177d51fa70&num=100" }
      ]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Resources & Network
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Everything you need for a successful real estate experience, plus access to my 
            trusted network of industry professionals.
          </p>
        </div>

        {/* Client Testimonials */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-blue-600 to-amber-600 p-8 rounded-2xl text-white text-center">
            <Star className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Client Testimonials 🎉</h3>
            <p className="text-lg mb-6">See what my clients are saying about their experience</p>
            <a
              href="#"
              className="inline-flex items-center space-x-2 bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              <span>View Google Reviews</span>
              <ExternalLink size={16} />
            </a>
          </div>
        </div>

        {/* Resources Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Buyer Resources */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Home className="w-6 h-6 mr-2 text-blue-600" />
              Buyer Resources 🏘
            </h3>
            <div className="space-y-4">
              {buyerResources.map((resource, index) => (
                <a
                  key={index}
                  href={resource.link}
                  className="flex items-center p-4 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors duration-200 group"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center mr-4">
                    {resource.icon}
                  </div>
                  <div className="flex-grow">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600">
                      {resource.title}
                    </h4>
                    <p className="text-gray-600 text-sm">{resource.description}</p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-600" />
                </a>
              ))}
            </div>
          </div>

          {/* Seller Resources */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <TrendingUp className="w-6 h-6 mr-2 text-amber-600" />
              Seller Resources 🏘
            </h3>
            <div className="space-y-4">
              {sellerResources.map((resource, index) => (
                <a
                  key={index}
                  href={resource.link}
                  className="flex items-center p-4 bg-amber-50 hover:bg-amber-100 rounded-lg transition-colors duration-200 group"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-amber-600 text-white rounded-lg flex items-center justify-center mr-4">
                    {resource.icon}
                  </div>
                  <div className="flex-grow">
                    <h4 className="font-semibold text-gray-900 group-hover:text-amber-600">
                      {resource.title}
                    </h4>
                    <p className="text-gray-600 text-sm">{resource.description}</p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-amber-600" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mb-16">
          <div className="bg-gradient-to-br from-gray-50 to-blue-50 p-8 rounded-2xl text-center">
            <BookOpen className="w-12 h-12 mx-auto mb-4 text-blue-600" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Weekly Newsletter 📧</h3>
            <p className="text-lg text-gray-600 mb-6">Confessions of a Spokane Realtor..</p>
            <a
              href="#"
              className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors duration-200"
            >
              <span>Subscribe Now</span>
              <ExternalLink size={16} />
            </a>
          </div>
        </div>

        {/* Professional Network */}
        <div>
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            My Professional Network
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {professionalNetwork.map((category, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl">
                <h4 className="text-lg font-bold text-gray-900 mb-4">{category.category}</h4>
                <div className="space-y-3">
                  {category.professionals.map((professional, profIndex) => (
                    <a
                      key={profIndex}
                      href={professional.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 hover:bg-white p-2 rounded-lg transition-colors duration-200"
                    >
                      <Users className="w-4 h-4 text-blue-600 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-gray-900">{professional.name}</p>
                        {professional.company && (
                          <p className="text-sm text-gray-600">{professional.company}</p>
                        )}
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resources;