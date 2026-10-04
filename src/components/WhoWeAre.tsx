import { motion } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';

const WhoWeAre = () => {
  return (
    <section className="py-32 bg-background-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-background-100/50 to-transparent" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          {/* Image - asymmetric layout */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80"
                alt="Construction Team"
                className="rounded-3xl shadow-2xl w-full h-[600px] object-cover"
              />
              
              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, type: 'spring' }}
                className="absolute -bottom-8 -right-8 glass px-8 py-6 rounded-2xl shadow-xl"
              >
                <p className="text-5xl font-display font-bold text-background-900">10+</p>
                <p className="text-sm text-background-600 font-medium">Years Experience</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Content - editorial layout */}
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
                Who Are We?
              </h2>
            </div>

            <div className="space-y-6 text-lg text-background-600 leading-relaxed">
              <p>
                Maria Housing is a trusted name in house construction, property sales, and farmhouse development. We are committed to delivering quality homes through excellent craftsmanship, carefully selected materials, and attention to every detail.
              </p>
              <p>
                Our goal is simple — to create beautiful, functional, and durable spaces that our clients can proudly call home. We work closely with every client to understand their requirements, preferences, and budget, ensuring that every project is designed and built around their unique vision.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 pt-4">
              <div className="border-l-2 border-accent-500 pl-4">
                <p className="text-3xl font-display font-bold text-background-900">500+</p>
                <p className="text-sm text-background-600">Projects Completed</p>
              </div>
              <div className="border-l-2 border-accent-500 pl-4">
                <p className="text-3xl font-display font-bold text-background-900">100%</p>
                <p className="text-sm text-background-600">Client Satisfaction</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-2 bg-background-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-background-800 transition-all shadow-xl"
              >
                Get Started
                <ArrowRight size={20} />
              </motion.a>
              <motion.a
                href="https://wa.me/917010680759"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-2 border-2 border-background-900 text-background-900 px-8 py-4 rounded-full font-semibold hover:bg-background-900 hover:text-white transition-all"
              >
                <Phone size={20} />
                Contact Us
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
