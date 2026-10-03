import { Heart, Shield, Sparkles } from 'lucide-react';

const DreamHome = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Looking for Your Dream House?
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              At Maria Housing, we specialize in turning ideas into beautifully crafted homes. From conceptualization and planning to construction and finishing, our team focuses on quality, functionality, and lasting value.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              We combine modern design with reliable construction techniques to create homes that are comfortable, elegant, and built to stand the test of time.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary-100 p-3 rounded-lg">
                  <Heart className="text-primary-600" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Personalized Solutions
                  </h3>
                  <p className="text-gray-600">
                    We listen carefully to your needs, preferences, and budget constraints and tailor every project according to your unique requirements.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary-100 p-3 rounded-lg">
                  <Shield className="text-primary-600" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Quality Craftsmanship
                  </h3>
                  <p className="text-gray-600">
                    From selecting quality materials to executing precise construction techniques, we maintain high standards throughout every stage of the project.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary-100 p-3 rounded-lg">
                  <Sparkles className="text-primary-600" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Modern Design
                  </h3>
                  <p className="text-gray-600">
                    Our designs blend contemporary aesthetics with practical functionality to create spaces that inspire and delight.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80"
              alt="Dream Home"
              className="rounded-2xl shadow-2xl w-full h-[600px] object-cover"
            />
            <div className="absolute -top-6 -left-6 bg-accent-500 text-white p-6 rounded-xl shadow-xl hidden sm:block">
              <p className="text-3xl font-bold">100+</p>
              <p className="text-sm">Happy Clients</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DreamHome;
