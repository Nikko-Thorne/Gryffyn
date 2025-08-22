import Hero from './components/Hero';
import Bio from './components/Bio';
import ForBuyers from './components/ForBuyers';
import ForSellers from './components/ForSellers';
import ExchangeContact from './components/ExchangeContact';
import StayInLoop from './components/StayInLoop';
import InstagramSection from './components/Instagram';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Bio />
      <ForBuyers />
      <ForSellers />
      <ExchangeContact />
      <StayInLoop />
      <InstagramSection />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;