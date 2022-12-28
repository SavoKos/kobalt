import Footer from '../components/Home/Footer';
import Hero from '../components/Home/Hero';
import Navigation from '../components/Home/Navigation';
import OurProduction from '../components/Home/OurProduction';
import PopularCategory from '../components/Home/PopularCategory';
import axios from '../utils/axiosBackend';

export default function Home() {
  axios.get('/food').then((res) => console.log(res.data.data));
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
