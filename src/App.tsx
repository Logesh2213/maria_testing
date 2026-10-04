import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhoWeAre from './components/WhoWeAre';
import Stats from './components/Stats';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Process from './components/Process';
import WhyChooseUs from './components/WhyChooseUs';
import About from './components/About';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectDetailsPage from './components/ProjectDetailsPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <WhoWeAre />
              <Stats />
              <Services />
              <Gallery />
              <Process />
              <WhyChooseUs />
              <About />
              <Testimonials />
              <CTA />
              <Contact />
              <Footer />
            </>
          } />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/project/:id" element={<ProjectDetailsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
