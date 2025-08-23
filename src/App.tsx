import Hero from './components/Hero';
import Bio from './components/Bio';
import ForBuyers from './components/ForBuyers';
import ForSellers from './components/ForSellers';
import Skills from './components/Skills';
import GrabMyInfo from './components/GrabMyInfo';
import StayInLoop from './components/StayInLoop';
import InstagramSection from './components/Instagram';
import Resources from './components/Resources';
import Contact from './components/Contact';
import Footer from './components/Footer';

import { useState } from 'react';

function App() {
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);

  return (
    <div className="min-h-screen">
      <Hero />
      <Bio />
      <ForBuyers />
      <ForSellers />
      <Skills />
      <GrabMyInfo />
      <StayInLoop />
      <InstagramSection />
      <Resources />
      <Contact
        showPrivacyPolicy={showPrivacyPolicy}
        setShowPrivacyPolicy={setShowPrivacyPolicy}
      />
      <Footer
        setShowPrivacyPolicy={setShowPrivacyPolicy}
      />
    </div>
  );
}

export default App;