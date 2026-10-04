import { motion } from 'framer-motion';
import { Target, Eye } from 'lucide-react';
import chairman from '../assets/chairman.png';
import director from '../assets/director.png';

const About = () => {
  return (
    <section id="about" className="py-32 bg-background-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-16 items-center mb-32">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            <img
              src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80"
              alt="About Maria Housing"
              className="rounded-3xl shadow-2xl w-full h-[600px] object-cover"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-6 lg:col-start-7 space-y-8"
          >
            <div>
              <span className="text-accent-600 font-semibold text-sm uppercase tracking-widest mb-4 block">
                About Us
              </span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-background-900 leading-tight">
                Building Homes. Creating Trust.
              </h2>
            </div>

            <p className="text-lg text-background-600 leading-relaxed">
              At Maria Housing, we believe a home is more than just a building. It is a place where families grow, memories are created, and futures are built.
            </p>

            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-white rounded-3xl p-8 shadow-lg border border-background-200"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-accent-500 p-3 rounded-2xl">
                    <Target className="text-white" size={24} />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-background-900">Our Mission</h3>
                </div>
                <p className="text-background-600 leading-relaxed">
                  To deliver high-quality homes and property solutions that combine excellent craftsmanship, thoughtful design, and lasting value.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="bg-white rounded-3xl p-8 shadow-lg border border-background-200"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-accent-500 p-3 rounded-2xl">
                    <Eye className="text-white" size={24} />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-background-900">Our Vision</h3>
                </div>
                <p className="text-background-600 leading-relaxed">
                  To become a trusted and respected name in the construction and real estate industry by consistently delivering quality projects and building lasting relationships with our clients.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-accent-600 font-semibold text-sm uppercase tracking-widest mb-4 block">
            Leadership
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-background-900 mb-6">
            Meet Our Team
          </h2>
          <p className="text-lg text-background-600 max-w-2xl mx-auto">
            The leadership team behind Maria Housing's success
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Chairman Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="group bg-white rounded-3xl shadow-2xl overflow-hidden border border-background-200 hover:shadow-3xl transition-all duration-300"
          >
            <div className="relative bg-gradient-to-br from-background-100 to-accent-50">
              <img
                src={chairman}
                alt="J Inego Lancy"
                className="w-full h-96 object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute top-6 left-6 bg-accent-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                Chairman
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-display font-bold text-background-900 mb-2">
                J Inego Lancy
              </h3>
              <p className="text-accent-600 font-semibold mb-4">
                Chairman
              </p>
              <p className="text-background-600 leading-relaxed">
                Providing strategic leadership and guiding the company's vision for growth and excellence.
              </p>
            </div>
          </motion.div>

          {/* Managing Director Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="group bg-white rounded-3xl shadow-2xl overflow-hidden border border-background-200 hover:shadow-3xl transition-all duration-300"
          >
            <div className="relative bg-gradient-to-br from-background-100 to-accent-50">
              <img
                src={director}
                alt="L Kiran Harishan"
                className="w-full h-96 object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute top-6 left-6 bg-accent-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                Managing Director
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-display font-bold text-background-900 mb-2">
                L Kiran Harishan
              </h3>
              <p className="text-accent-600 font-semibold mb-4">
                Managing Director
              </p>
              <p className="text-background-600 leading-relaxed">
                Overseeing operations and ensuring delivery of quality construction projects.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
