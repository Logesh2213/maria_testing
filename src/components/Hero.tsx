import { ArrowRight, Phone } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with White Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80"
          alt="Modern House"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
            Build the Home You've Always Dreamed Of
          </h1>
          {/* <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed font-semibold">
            Maria Housing brings your vision to life with thoughtfully designed homes, quality construction, and personalized service. From planning and design to construction and completion, we take care of every detail to create a home that reflects your lifestyle, needs, and expectations.
          </p> */}

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-all transform hover:scale-105 shadow-lg"
            >
              Get Started
              <ArrowRight size={20} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-700 transition-all transform hover:scale-105 shadow-lg"
            >
              Contact Us
              <Phone size={20} />
            </a>
          </div>

          <div className="inline-flex items-center gap-2 bg-primary-50 px-6 py-3 rounded-full">
            <span className="text-accent-500 font-bold text-xl">10+</span>
            <span className="text-gray-700 font-medium">Years of Experience</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
