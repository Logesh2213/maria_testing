import { motion } from 'framer-motion';
import { MessageCircle, DraftingCompass, FileText, HardHat, Sparkles, KeyRound, ArrowRight } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      number: '01',
      icon: MessageCircle,
      title: 'Consultation',
      description: 'Tell us about your requirements, ideas, budget, and expectations.',
    },
    {
      number: '02',
      icon: DraftingCompass,
      title: 'Planning & Design',
      description: 'Our team develops a suitable concept and plan based on your needs.',
    },
    {
      number: '03',
      icon: FileText,
      title: 'Estimation',
      description: 'We provide project estimates and discuss materials, specifications, and timelines.',
    },
    {
      number: '04',
      icon: HardHat,
      title: 'Construction',
      description: 'Our team begins construction while maintaining quality and safety standards.',
    },
    {
      number: '05',
      icon: Sparkles,
      title: 'Finishing',
      description: 'We complete the interiors, exterior work, fixtures, and finishing touches.',
    },
    {
      number: '06',
      icon: KeyRound,
      title: 'Handover',
      description: 'Your completed dream home is ready to welcome you.',
    },
  ];

  return (
    <section className="py-32 bg-background-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-accent-600 font-semibold text-sm uppercase tracking-widest mb-4 block">
            Our Process
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-background-900 mb-6">
            From Dream to Reality
          </h2>
          <p className="text-lg text-background-600 max-w-2xl mx-auto">
            Make your construction journey simple with our structured process.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative bg-white rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 border border-background-200 hover:border-accent-300"
              >
                <div className="absolute -top-4 -left-4 bg-accent-500 text-white w-16 h-16 rounded-2xl flex items-center justify-center font-display font-bold text-xl shadow-lg group-hover:scale-110 transition-transform">
                  {step.number}
                </div>
                <div className="bg-background-100 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon size={40} className="text-accent-600" />
                </div>
                <h3 className="text-2xl font-display font-bold text-background-900 mb-3 group-hover:text-accent-600 transition-colors">
                  {step.title}
                </h3>
                <p className="text-background-600 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-16"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center gap-2 bg-background-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-background-800 transition-all shadow-xl"
          >
            Start Your Project
            <ArrowRight size={20} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Process;
