import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

import home1 from '../../Home/IMG-20240206-WA0018.webp';
import home2 from '../../Home/IMG-20240223-WA0018.webp';
import home3 from '../../Home/IMG-20240223-WA0027.webp';
import home4 from '../../Home/IMG-20240223-WA0030.webp';
import home5 from '../../Home/IMG-20240223-WA0039.webp';

interface Project {
  id: number;
  category: string;
  image: string;
  title: string;
  location: string;
  type: string;
}

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Home', 'Renovation', 'Farm House', '2D & 3D Design'];

  const projects: Project[] = [
    { id: 1, category: 'Home', image: home1, title: 'Front Elevation', location: 'Vellore', type: 'Residential' },
    { id: 2, category: 'Home', image: home2, title: 'Interior Staircase', location: 'Vellore', type: 'Residential' },
    { id: 3, category: 'Home', image: home3, title: 'Architecture View', location: 'Vellore', type: 'Residential' },
    { id: 4, category: 'Home', image: home4, title: 'Property Exterior', location: 'Vellore', type: 'Residential' },
    { id: 5, category: 'Home', image: home5, title: 'Modern Home', location: 'Vellore', type: 'Residential' },
    { id: 6, category: 'Renovation', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80', title: 'Space Reimagined', location: 'Vellore', type: 'Renovation' },
    { id: 7, category: 'Farm House', image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80', title: 'Farm House Living', location: 'Vellore', type: 'Farm House' },
    { id: 8, category: '2D & 3D Design', image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200&q=80', title: '3D Planning Concept', location: 'Vellore', type: 'Design' },
    { id: 9, category: 'Renovation', image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?w=1200&q=80', title: 'Transforming Space', location: 'Vellore', type: 'Renovation' },
    { id: 10, category: 'Farm House', image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1200&q=80', title: 'Modern Farm Residence', location: 'Vellore', type: 'Farm House' },
  ];

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter((project) => project.category === activeCategory);

  return (
    <section id="gallery" className="min-h-screen bg-[#f3efe9] px-4 pb-20 pt-28 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1200px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center"
        >
          <h2 className="text-4xl font-display font-bold text-background-900 sm:text-5xl lg:text-[4.2rem] lg:leading-[1]">
            Let's checkout our previous works
          </h2>
          {/* <p className="mt-3 text-base italic text-background-600"> */}
            {/* Vitae porttitor sapien nam ac. Tristique duis ultricies in elementum. */}
          {/* </p> */}
        </motion.div>

        <div className="mb-10 flex flex-wrap justify-center gap-4 sm:gap-5">
          {categories.map((category) => (
            <motion.button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all sm:px-5 ${
                activeCategory === category
                  ? 'bg-background-900 text-white shadow-lg'
                  : 'bg-transparent text-background-700 hover:bg-white/70'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="grid gap-6 md:grid-cols-2 xl:grid-cols-4"
          >
            {filteredProjects.map((project, index) => (
              <Link key={project.id} to={`/project/${project.id}`} className="group block">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.06 }}
                  className="overflow-hidden rounded-[26px] border border-background-200 bg-white shadow-[0_12px_24px_rgba(21,21,21,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_30px_rgba(21,21,21,0.12)]"
                >
                  <div className="relative h-[310px] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background-900/20 via-transparent to-transparent" />
                  </div>

                  <div className="flex items-center justify-between p-4">
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.18em] text-background-500">{project.type}</p>
                      <h3 className="mt-1 text-lg font-display font-bold text-background-900">{project.title}</h3>
                    </div>
                    <span className="inline-flex items-center gap-1 text-accent-600">
                      <ArrowRight size={16} />
                    </span>
                  </div>
                </motion.div>
              </Link>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Gallery;
