import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Venkatesh K.',
      project: 'Modern Family Residence',
      location: 'Independent Residence · Vellore',
      text: 'What started as a construction project became a genuinely comfortable experience. The team listened carefully and delivered a home that felt personal from day one.',
    },
    {
      name: 'Priya S.',
      project: 'Contemporary Villa',
      location: 'Residential Project · Vellore',
      text: 'Professional, transparent and thoughtful at every step. The process felt clear and well-organized, and the result was even better than we imagined.',
    },
    {
      name: 'Arun R.',
      project: 'Space Reimagined',
      location: 'Renovation · Vellore',
      text: 'They transformed our existing space into something that works beautifully for our family. The attention to detail and communication made all the difference.',
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
          <p className="text-sm uppercase tracking-[0.25em] text-accent-600 mb-4">Client stories</p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-background-900 mb-6">
            STORIES FROM THE PEOPLE
            <br />
            <span className="text-accent-500">WE BUILT FOR.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-3xl p-10 shadow-lg border border-background-200"
            >
              <div className="bg-accent-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <Quote className="text-accent-600" size={32} />
              </div>
              <p className="text-background-600 leading-relaxed mb-8 text-lg italic">
                “{testimonial.text}”
              </p>
              <div className="border-t border-background-200 pt-6">
                <p className="text-background-900 font-display font-bold text-xl mb-2">
                  {testimonial.project}
                </p>
                <p className="text-background-500 text-sm mb-2">{testimonial.location}</p>
                <p className="text-accent-600 font-semibold">— {testimonial.name}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
