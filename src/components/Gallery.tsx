import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Residential', 'Farmhouses', 'Villas', 'Interiors', 'Construction'];

  const projects = [
    {
      id: 1,
      category: 'Residential',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
      title: 'Modern Family Home',
    },
    {
      id: 2,
      category: 'Farmhouses',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
      title: 'Luxury Farmhouse',
    },
    {
      id: 3,
      category: 'Villas',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
      title: 'Premium Villa',
    },
    {
      id: 4,
      category: 'Interiors',
      image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80',
      title: 'Modern Interior',
    },
    {
      id: 5,
      category: 'Construction',
      image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80',
      title: 'Construction Site',
    },
    {
      id: 6,
      category: 'Residential',
      image: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800&q=80',
      title: 'Contemporary Home',
    },
  ];

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="gallery" className="py-32 bg-background-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-accent-600 font-semibold text-sm uppercase tracking-widest mb-4 block">
            Portfolio
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-background-900 mb-6">
            Our Work
          </h2>
          <p className="text-lg text-background-600 max-w-2xl mx-auto">
            Every project tells a story. Take a look at our work and discover the quality, craftsmanship, and attention to detail that goes into every Maria Housing project.
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                activeCategory === category
                  ? 'bg-background-900 text-white shadow-lg'
                  : 'bg-white text-background-600 hover:bg-background-200'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Gallery Grid */}
        <AnimatePresence mode='wait'>
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-3xl shadow-lg cursor-pointer"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background-900/90 via-background-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <p className="text-accent-400 text-sm font-medium mb-2">
                      {project.category}
                    </p>
                    <h3 className="text-white text-2xl font-display font-bold">
                      {project.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-16"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center gap-2 bg-background-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-background-800 transition-all shadow-xl"
          >
            View Full Gallery
            <ArrowRight size={20} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
