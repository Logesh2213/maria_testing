import { Target, Eye } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80"
              alt="About Maria Housing"
              className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Building Homes. Creating Trust.
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              At Maria Housing, we believe a home is more than just a building. It is a place where families grow, memories are created, and futures are built.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Our approach combines quality construction, thoughtful design, transparent communication, and personalized service. Whether you are planning a new home, farmhouse, renovation, or looking for a property, our team is here to guide you throughout the journey.
            </p>

            <div className="space-y-6">
              <div className="bg-primary-50 rounded-xl p-6">
                <div className="flex items-center gap-4 mb-3">
                  <div className="bg-primary-600 p-2 rounded-lg">
                    <Target className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Our Mission</h3>
                </div>
                <p className="text-gray-600">
                  To deliver high-quality homes and property solutions that combine excellent craftsmanship, thoughtful design, and lasting value.
                </p>
              </div>

              <div className="bg-accent-50 rounded-xl p-6">
                <div className="flex items-center gap-4 mb-3">
                  <div className="bg-accent-500 p-2 rounded-lg">
                    <Eye className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Our Vision</h3>
                </div>
                <p className="text-gray-600">
                  To become a trusted and respected name in the construction and real estate industry by consistently delivering quality projects and building lasting relationships with our clients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
