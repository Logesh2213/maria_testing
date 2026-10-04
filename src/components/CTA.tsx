import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-32 bg-background-900 text-white relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-600/20 to-background-900" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent-400/10 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-accent-400 font-semibold text-sm uppercase tracking-widest mb-4 block">
            Get Started
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6">
            Ready to Build Your Dream Home?
          </h2>
          <p className="text-lg text-background-300 max-w-2xl mx-auto mb-12">
            Let's turn your ideas into a space you will be proud to call home. Whether you're planning a new house, farmhouse, renovation, or looking for the right property, Maria Housing is ready to help.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center gap-2 bg-white text-background-900 px-8 py-4 rounded-full font-semibold hover:bg-background-100 transition-all shadow-xl"
            >
              Start Your Project
              <ArrowRight size={20} />
            </motion.a>
            <motion.a
              href="https://wa.me/917010680759?text=Hello%20Maria%20Housing%2C%20I%20would%20like%20to%20inquire%20about%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center gap-2 bg-accent-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-accent-600 transition-all shadow-lg shadow-accent-500/30"
            >
              Chat on WhatsApp
              <MessageCircle size={20} />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
