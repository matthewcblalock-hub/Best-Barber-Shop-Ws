import Header from './components/Header';
import Hero from './components/Hero';
import ServiceShowcase from './components/ServiceShowcase';
import AboutSection from './components/AboutSection';
import MeetTheBarber from './components/MeetTheBarber';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import PricingMenu from './components/PricingMenu';
import PhotoGallery from './components/PhotoGallery';
import WalkInProcess from './components/WalkInProcess';
import LocationHours from './components/LocationHours';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import MobileActionBar from './components/MobileActionBar';
import { useReveal } from './hooks/useReveal';

export default function App() {
  useReveal();

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-brass focus:px-4 focus:py-3 focus:text-charcoal"
      >
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <ServiceShowcase />
        <AboutSection />
        <MeetTheBarber />
        <WhyChooseUs />
        <Testimonials />
        <PricingMenu />
        <PhotoGallery />
        <WalkInProcess />
        <LocationHours />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <MobileActionBar />
    </>
  );
}
