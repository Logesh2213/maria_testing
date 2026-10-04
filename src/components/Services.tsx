import { motion } from 'framer-motion';
import { Home, Trees, Building2, PencilRuler, Hammer, Users, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Home,
      title: 'House Construction',
      description: 'From foundation to finishing, our team manages every stage of construction with careful planning and attention to detail.',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80',
    },
    {
      icon: Trees,
      title: 'Farmhouse Construction',
      description: 'We design and construct comfortable, spacious, and peaceful farmhouse properties that blend modern living with natural surroundings.',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80',
    },
    {
      icon: Building2,
      title: 'Property Sales',
      description: 'We help clients explore suitable properties based on their requirements, location preferences, and investment goals.',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80',
    },
    {
      icon: PencilRuler,
      title: 'Custom Home Design',
      description: 'Our team works with you to transform your ideas into a practical and beautiful home design that matches your lifestyle and budget.',
      image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=600&q=80',
    },
    {
      icon: Hammer,
      title: 'Renovation & Remodeling',
      description: 'From individual spaces to complete renovations, we help transform existing properties with thoughtful designs and quality workmanship.',
      image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&q=80',
    },
    {
      icon: Users,
      title: 'End-to-End Project Management',
      description: 'We coordinate planning, materials, construction, finishing, and other project requirements to make your construction journey smooth and hassle-free.',
      image: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=600&q=80',
    },
  ];

  return (
    <section id="services" className="py-32 bg-background-100 relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent-400/5 rounded-full blur-3xl -translate-y-1/2" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-accent-600 font-semibold text-sm uppercase tracking-widest mb-4 block">
            Our Services
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-background-900 mb-6">
            What We Do
          </h2>
          <p className="text-lg text-background-600 max-w-2xl mx-auto">
            From the first idea to the final handover, Maria Housing provides complete solutions for your property and construction needs.
          </p>
        </motion.div>

        {/* Editorial Grid */}
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
                className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background-900/80 via-background-900/20 to-transparent" />
                  
                  {/* Icon overlay */}
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                      <Icon size={24} className="text-white" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-xl font-display font-bold text-background-900 mb-3 group-hover:text-accent-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-background-600 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  
                  <motion.a
                    href="#contact"
                    whileHover={{ x: 5 }}
                    className="inline-flex items-center gap-2 text-accent-600 font-semibold text-sm group-hover:gap-3 transition-all"
                  >
                    Learn More
                    <ArrowRight size={16} />
                  </motion.a>
                </div>

                {/* Hover effect border */}
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
