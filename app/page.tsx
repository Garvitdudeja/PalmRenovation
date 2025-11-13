import Header from '@/components/Header';
import Hero from '@/components/Hero';
import CompanyInfo from '@/components/CompanyInfo';
import Services from '@/components/Services';
import WhyChooseUs from '@/components/WhyChooseUs';
import Testimonials from '@/components/Testimonials';
import FourSteps from '@/components/FourSteps';
import ServiceAreas from '@/components/ServiceAreas';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <CompanyInfo />
        <Services />
        <WhyChooseUs />
        <Testimonials />
        <FourSteps />
        <ServiceAreas />
      </main>
      <Footer />
    </div>
  );
}
