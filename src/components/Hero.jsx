import { ArrowRight, Phone } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80"
          alt="Modern House"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/80 to-gray-900/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Build the Home You've Always Dreamed Of
          </h1>
          <p className="text-lg sm:text-xl text-gray-100 mb-8 leading-relaxed">
            Maria Housing brings your vision to life with thoughtfully designed homes, quality construction, and personalized service. From planning and design to construction and completion, we take care of every detail to create a home that reflects your lifestyle, needs, and expectations.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-accent-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-accent-600 transition-all transform hover:scale-105 shadow-lg"
            >
              Get Started
              <ArrowRight size={20} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-primary-800 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
            >
              Contact Us
              <Phone size={20} />
            </a>
          </div>

          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
            <span className="text-accent-400 font-bold text-xl">10+</span>
            <span className="text-white font-medium">Years of Experience</span>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10" />
    </section>
  );
};

export default Hero;
