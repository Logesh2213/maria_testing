import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

import residentialImage from '../../Home/IMG-20240223-WA0039.webp';
import commercialImage from '../../Home/IMG-20240223-WA0030.webp';
import prestigiousImage from '../../Home/IMG-20240223-WA0027.webp';

const projectCategories = [
  { title: 'Residential Ongoing Projects', image: residentialImage, imageAlt: 'Residential home project' },
  { title: 'Commercial Projects', image: commercialImage, imageAlt: 'Maria Housing project' },
  { title: 'Prestigious Ongoing Projects', image: prestigiousImage, imageAlt: 'Maria Housing project' },
];

const HomeProjects = () => (
  <section className="bg-[#f3efe9] px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
    <div className="mx-auto max-w-[1200px]">
      <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent-600">Our work</p>
          <h2 className="max-w-2xl text-3xl font-display font-bold text-background-900 sm:text-4xl">
            Projects shaped around the way you live and work.
          </h2>
        </div>
        <Link to="/gallery" className="inline-flex items-center gap-2 font-semibold text-background-800 transition-colors hover:text-accent-600">
          View all projects <ArrowUpRight size={18} />
        </Link>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {projectCategories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
          >
            <Link to="/gallery" className="group relative block aspect-[4/5] overflow-hidden rounded-lg bg-background-200">
              <img
                src={category.image}
                alt={category.imageAlt}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 sm:p-6">
                <h3 className="max-w-[18rem] text-2xl font-display font-bold leading-tight text-white sm:text-3xl">
                  {category.title}
                </h3>
                <span className="mb-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/60 text-white transition-colors group-hover:bg-white group-hover:text-background-900">
                  <ArrowUpRight size={20} />
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HomeProjects;