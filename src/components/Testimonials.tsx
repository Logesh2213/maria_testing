import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Happy Homeowner',
      text: 'Maria Housing understood exactly what we wanted and guided us through every stage of construction. The attention to detail and quality of work was excellent.',
    },
    {
      name: 'Residential Client',
      text: 'The entire process was smooth and transparent. The team was responsive, professional, and committed to delivering what we envisioned.',
    },
    {
      name: 'Farmhouse Client',
      text: 'We are extremely happy with our farmhouse. Maria Housing transformed our idea into a beautiful space that our family enjoys.',
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
            Testimonials
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-background-900 mb-6">
            What Our Clients Say
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-300 border border-background-200 hover:border-accent-300"
            >
              <div className="bg-accent-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <Quote className="text-accent-600" size={32} />
              </div>
              <p className="text-background-600 leading-relaxed mb-8 text-lg italic">
                "{testimonial.text}"
              </p>
              <p className="text-background-900 font-display font-bold text-xl">
                — {testimonial.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
