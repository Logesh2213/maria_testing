import { ArrowRight, Phone } from 'lucide-react';

const WhoWeAre = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80"
              alt="Construction Team"
              className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
            />
            <div className="absolute -bottom-6 -right-6 bg-primary-600 text-white p-6 rounded-xl shadow-xl hidden sm:block">
              <p className="text-4xl font-bold">10+</p>
              <p className="text-sm">Years Experience</p>
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Who Are We?
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Maria Housing is a trusted name in house construction, property sales, and farmhouse development. We are committed to delivering quality homes through excellent craftsmanship, carefully selected materials, and attention to every detail.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Our goal is simple — to create beautiful, functional, and durable spaces that our clients can proudly call home. We work closely with every client to understand their requirements, preferences, and budget, ensuring that every project is designed and built around their unique vision.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-all"
              >
                Get Started
                <ArrowRight size={20} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 border-2 border-primary-600 text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-all"
              >
                Contact Us
                <Phone size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
