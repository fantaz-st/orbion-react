import React, { useState } from 'react';
import Features from './Components/Features/Features';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import MusicPlayer from './Components/MusicPlayer/MusicPlayer';
import Services from './Components/Services/Services';
import Team from './Components/Team/Team';
import Testimonials from './Components/Testimonials/Testimonials';
import Pricing from './Components/Pricing/Pricing';
import FAQs from './Components/FAQs/FAQs';
import Blog from './Components/Blog/Blog';
import Newsletter from './Components/Newsletter/Newsletter';
import Footer from './Components/Footer/Footer';
import ScrollTop from './Components/UI/ScrollTop';

const App = () => {
  const [showScroll, setShowScroll] = useState(false);
  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };
  window.addEventListener('scroll', checkScrollTop);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Features />
      <MusicPlayer />
      <Testimonials />
      <Team />
      <Pricing />
      <FAQs />
      <Blog />
      <Newsletter />
      <Footer />
      {showScroll && <ScrollTop onScrollToTop={scrollToTop} />}
    </>
  );
};

export default App;
