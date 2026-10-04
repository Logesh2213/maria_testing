import { motion } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';
import FloatingImage from './FloatingImage';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden grain-overlay">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background-50 via-background-100 to-background-200" />
      
      {/* Subtle decorative elements */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-accent-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-secondary-400/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-accent-100 text-accent-700 text-sm font-semibold mb-6">
                Premium Construction Services
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-display font-bold text-background-900 leading-[0.95] tracking-tight"
            >
              Build the
              <br />
              <span className="text-gradient-accent">Home You've</span>
              <br />
              Always Dreamed Of
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg sm:text-xl text-background-600 max-w-xl leading-relaxed"
            >
              Maria Housing brings your vision to life with thoughtfully designed homes, quality construction, and personalized service.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
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
                className="inline-flex items-center justify-center gap-2 bg-accent-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-accent-600 transition-all shadow-lg shadow-accent-500/30"
              >
                <Phone size={20} />
                WhatsApp Us
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex items-center gap-8 pt-4"
            >
              <div>
                <p className="text-4xl font-display font-bold text-background-900">10+</p>
                <p className="text-sm text-background-600">Years Experience</p>
              </div>
              <div className="w-px h-12 bg-background-300" />
              <div>
                <p className="text-4xl font-display font-bold text-background-900">500+</p>
                <p className="text-sm text-background-600">Projects Completed</p>
              </div>
              <div className="w-px h-12 bg-background-300" />
              <div>
                <p className="text-4xl font-display font-bold text-background-900">100%</p>
                <p className="text-sm text-background-600">Client Satisfaction</p>
              </div>
            </motion.div>
          </div>

          {/* Floating Images */}
          <div className="relative h-[600px] hidden lg:block">
            <FloatingImage
              src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80"
              alt="Modern House"
              className="absolute top-0 right-0 w-80 h-96"
              delay={0.2}
              rotation={3}
              scale={1}
              zIndex={20}
              label="Featured"
              badge="New"
            />
            <FloatingImage
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80"
              alt="Construction"
              className="absolute top-32 left-0 w-72 h-80"
              delay={0.4}
              rotation={-4}
              scale={0.9}
              zIndex={15}
              label="In Progress"
            />
            <FloatingImage
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80"
              alt="Interior"
              className="absolute bottom-0 right-32 w-64 h-72"
              delay={0.6}
              rotation={2}
              scale={0.85}
              zIndex={10}
              badge="Completed"
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs font-medium text-background-400 uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-background-300 rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-background-400 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
