import { motion } from 'framer-motion';
import { Heart, Shield, Sparkles } from 'lucide-react';

const DreamHome = () => {
  return (
    <section className="py-32 bg-background-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 space-y-8"
          >
            <div>
              <span className="text-accent-600 font-semibold text-sm uppercase tracking-widest mb-4 block">
                Your Vision
              </span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-background-900 leading-tight">
                Looking for Your Dream House?
              </h2>
            </div>

            <p className="text-lg text-background-600 leading-relaxed">
              At Maria Housing, we specialize in turning ideas into beautifully crafted homes. From conceptualization and planning to construction and finishing, our team focuses on quality, functionality, and lasting value.
            </p>

            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex items-start gap-4 p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="bg-accent-100 p-3 rounded-xl">
                  <Heart className="text-accent-600" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-display font-bold text-background-900 mb-2">
                    Personalized Solutions
                  </h3>
                  <p className="text-background-600">
                    We listen carefully to your needs, preferences, and budget constraints and tailor every project according to your unique requirements.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex items-start gap-4 p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="bg-accent-100 p-3 rounded-xl">
                  <Shield className="text-accent-600" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-display font-bold text-background-900 mb-2">
                    Quality Craftsmanship
                  </h3>
                  <p className="text-background-600">
                    From selecting quality materials to executing precise construction techniques, we maintain high standards throughout every stage of the project.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="flex items-start gap-4 p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="bg-accent-100 p-3 rounded-xl">
                  <Sparkles className="text-accent-600" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-display font-bold text-background-900 mb-2">
                    Modern Design
                  </h3>
                  <p className="text-background-600">
                    Our designs blend contemporary aesthetics with practical functionality to create spaces that inspire and delight.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-6 relative"
          >
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80"
              alt="Dream Home"
              className="rounded-3xl shadow-2xl w-full h-[600px] object-cover"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, type: 'spring' }}
              className="absolute -top-8 -right-8 glass px-8 py-6 rounded-2xl shadow-xl"
            >
              <p className="text-5xl font-display font-bold text-background-900">100+</p>
              <p className="text-sm text-background-600 font-medium">Happy Clients</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DreamHome;
