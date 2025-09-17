// Home.tsx
// Main landing page. Displays hero section, gallery, testimonials, and other info.
import { useEffect } from 'react';

import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import About from '../components/About';
import Packages from '../components/Packages';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import Gallery from '../components/Gallery';
import TrekkingPackages from '../components/TrekkingPackages';
import BikeRidingPackage from '../components/BikeRidingPackage';


const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const scrollTo = params.get('scrollTo');
    if (scrollTo) {
      scrollToSection(scrollTo);
    }
  }, [location.search]);

  return (
    <div className="relative bg-gradient-to-br from-green-100 via-yellow-50 to-blue-100 overflow-hidden">
      
     
      <div className="relative z-10">
        <Hero />
        <About />
        <Packages />
        <TrekkingPackages />
        <BikeRidingPackage />
        <Services />
        <Testimonials />
        <Gallery />
      </div>
    </div>
  );
};

export default Home;

