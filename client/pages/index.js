import Hero from '../components/Hero';
import Navigation from '../components/Navigation';
import PopularCategory from '../components/PopularCategory';

export default function Home() {
  return (
    <div>
      <Navigation />
      <Hero />
      <PopularCategory />
    </div>
  );
}
