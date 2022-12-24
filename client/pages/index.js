import Hero from '../components/Hero';
import Navigation from '../components/Navigation';
import OurProduction from '../components/OurProduction';
import PopularCategory from '../components/PopularCategory';

export default function Home() {
  return (
    <div>
      <Navigation />
      <Hero />
      <PopularCategory />
      <OurProduction />
    </div>
  );
}
