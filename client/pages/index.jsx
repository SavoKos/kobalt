import Footer from '../components/Home/Footer';
import Hero from '../components/Home/Hero';
import Navigation from '../components/Home/Navigation';
import OurProduction from '../components/Home/OurProduction';
import PopularCategory from '../components/Home/PopularCategory';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

export default function Home() {
  return (
    <div>
      <Navigation />
      <Hero />
      <PopularCategory />
      <OurProduction />
      <Footer />
      <ToastContainer position='bottom-left' />
    </div>
  );
}
