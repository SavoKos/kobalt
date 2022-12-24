import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Navigation from '../components/Navigation';
import Newsletter from '../components/Newsletter';
import OurProduction from '../components/OurProduction';
import PopularCategory from '../components/PopularCategory';

export default function Home() {
  return (
    <div>
      <Navigation />
      <Hero />
      <PopularCategory />
      <OurProduction />
      <Footer />
    </div>
  );
}
