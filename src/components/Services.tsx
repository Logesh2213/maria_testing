import { motion } from 'framer-motion';
import { ArrowRight, Home, PenTool, Wrench, Building, MessageCircle, FileCheck } from 'lucide-react';

const Services = () => {
  const services = [
    {
      number: '01',
      icon: Home,
      title: 'CONSTRUCTION',
      description: 'From planning and site execution to finishing, we manage the full build journey with practical oversight and quality control.',
    },
    {
      number: '02',
      icon: PenTool,
      title: 'DESIGN',
      description: '2D plans and 3D visualizations that help you understand the space before it is built.',
    },
    {
      number: '03',
      icon: Wrench,
      title: 'RENOVATION',
      description: 'Transform an existing property into a space that feels more functional, more beautiful and more personal.',
    },
    {
      number: '04',
      icon: Building,
      title: 'REAL ESTATE',
      description: 'Strategic guidance for residential and commercial property decisions across the buying and development journey.',
    },
    {
      number: '05',
      icon: MessageCircle,
      title: 'CONSULTANCY',
      description: 'Practical advice to help you understand requirements, feasibility, budget and the right next steps.',
    },
    {
      number: '06',
      icon: FileCheck,
      title: 'APPROVALS',
      description: 'Support with documentation and approvals so your project progresses with clarity and confidence.',
    },
  ];

  return (
    <section id="services" className="py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-sm uppercase tracking-[0.25em] text-accent-600 mb-4">What we do</p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-background-900 mb-6">
            WHAT WE DO
            <br />
            <span className="text-accent-500">BUILDING WITH CLARITY.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative bg-background-50 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 border border-background-200 hover:border-accent-300"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="bg-accent-500 w-16 h-16 rounded-2xl flex items-center justify-center">
                    <Icon className="text-white" size={32} />
                  </div>
                  <span className="text-4xl font-display font-bold text-background-300">
                    {service.number}
                  </span>
                </div>
                <h3 className="text-2xl font-display font-bold text-background-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-background-600 leading-relaxed mb-6">
                  {service.description}
                </p>
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 text-accent-600 font-semibold hover:text-accent-700 transition-colors"
                >
                  Explore
                  <ArrowRight size={16} />
                </motion.a>

                <div className="absolute inset-0 border-2 border-accent-500/0 rounded-3xl group-hover:border-accent-500/30 transition-all duration-500 pointer-events-none" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
