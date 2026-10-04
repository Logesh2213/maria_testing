import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      title: 'Exceptional Quality',
      description: 'We focus on quality materials, skilled workmanship, and attention to detail in every project we undertake.',
    },
    {
      title: 'Client-Centric Approach',
      description: 'Your requirements come first. We listen to your ideas, preferences, and budget to create solutions tailored specifically to you.',
    },
    {
      title: 'Expertise & Experience',
      description: 'Our experienced team brings practical knowledge and construction expertise to every project.',
    },
    {
      title: 'Integrity & Transparency',
      description: 'We believe in honest communication, transparent processes, and building long-term relationships with our clients.',
    },
    {
      title: 'Attention to Detail',
      description: 'Every stage of construction is carefully planned and executed to ensure quality and consistency.',
    },
    {
      title: 'On-Time Project Support',
      description: 'We coordinate every stage of the project to keep the process organized and efficient.',
    },
  ];

  return (
    <section className="py-32 bg-background-900 text-white relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent-600/10 to-transparent" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-accent-400 font-semibold text-sm uppercase tracking-widest mb-4 block">
                Why Us
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6">
            Why Choose Maria Housing?
          </h2>
          <p className="text-lg text-background-300 max-w-2xl mx-auto">
            Experience the difference that Maria Housing can make in your next construction or real estate project.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-background-800/50 backdrop-blur-sm border border-background-700 rounded-3xl p-8 hover:border-accent-500/50 transition-all duration-300"
            >
              <div className="bg-accent-500/20 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Check className="text-accent-400" size={28} />
              </div>
              <h3 className="text-xl font-display font-bold mb-3">
                {reason.title}
              </h3>
              <p className="text-background-400 leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
