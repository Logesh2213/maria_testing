import { Target, Eye } from 'lucide-react';
import chairman from '../assets/chairman.png';
import director from '../assets/director.png';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
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

        {/* Team Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The leadership team behind Maria Housing's success
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Owner Card */}
            

            {/* Chairman Card */}
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 hover:shadow-3xl transition-shadow">
              <div className="relative bg-gradient-to-br from-primary-50 to-accent-50">
                <img
                  src={chairman}
                  alt="J Inego Lancy"
                  className="w-full h-80 object-cover object-center"
                />
                <div className="absolute top-4 left-4 bg-primary-600 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                  Chairman
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  J Inego Lancy
                </h3>
                <p className="text-primary-600 font-semibold mb-3">
                  Chairman
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Providing strategic leadership and guiding the company's vision for growth and excellence.
                </p>
              </div>
            </div>

            {/* Managing Director Card */}
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 hover:shadow-3xl transition-shadow">
              <div className="relative bg-gradient-to-br from-green-50 to-primary-50">
                <img
                  src={director}
                  alt="L Kiran Harishan"
                  className="w-full h-80 object-cover object-center"
                />
                <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                  Managing Director
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  L Kiran Harishan
                </h3>
                <p className="text-primary-600 font-semibold mb-3">
                  Managing Director
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Overseeing operations and ensuring delivery of quality construction projects.
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
