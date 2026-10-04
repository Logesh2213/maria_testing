import { motion } from 'framer-motion';

const WhyChooseUs = () => {
  const reasons = [
    {
      number: '01',
      title: 'CLARITY',
      description: 'You should know what you are building, why you are building it and what comes next.',
    },
    {
      number: '02',
      title: 'CRAFT',
      description: 'The quality of a space is found in the details, from the planning stage to the final finish.',
    },
    {
      number: '03',
      title: 'RESPONSIBILITY',
      description: 'A property is a major investment. We treat it that way, with care and accountability.',
    },
    {
      number: '04',
      title: 'RELATIONSHIP',
      description: 'The project may end, but the relationship should carry on with trust and confidence.',
    },
  ];

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-sm uppercase tracking-[0.25em] text-accent-600 mb-4">Maria Philosophy</p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-background-900 mb-6">
            WE BELIEVE GOOD BUILDING
            <br />
            <span className="text-accent-500">IS ABOUT MORE THAN CONSTRUCTION.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-background-50 rounded-3xl p-8 border border-background-200"
            >
              <p className="text-4xl font-display font-bold text-accent-500 mb-4">{reason.number}</p>
              <h3 className="text-2xl font-display font-bold text-background-900 mb-3">
                {reason.title}
              </h3>
              <p className="text-background-600 leading-relaxed">
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
