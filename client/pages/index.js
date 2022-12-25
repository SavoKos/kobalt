import Footer from '../components/Home/Footer';
import Hero from '../components/Home/Hero';
import Navigation from '../components/Home/Navigation';
import OurProduction from '../components/Home/OurProduction';
import PopularCategory from '../components/Home/PopularCategory';

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
