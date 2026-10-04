import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      number: '01',
      title: 'DISCOVER',
      description: 'We understand your requirements, property and vision.',
    },
    {
      number: '02',
      title: 'PLAN',
      description: 'We assess the project, requirements and possibilities.',
    },
    {
      number: '03',
      title: 'DESIGN',
      description: 'We develop the concept, plans and visualizations.',
    },
    {
      number: '04',
      title: 'APPROVE',
      description: 'We assist with the necessary documentation and approvals.',
    },
    {
      number: '05',
      title: 'BUILD',
      description: 'Our team coordinates execution from construction to finishing.',
    },
    {
      number: '06',
      title: 'HANDOVER',
      description: 'The final details are completed and your space is ready.',
    },
  ];

  return (
    <section className="py-32 bg-background-900 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6">
            FROM THE FIRST CONVERSATION
            <br />
            <span className="text-accent-400">TO THE FINAL KEY.</span>
          </h2>
        </motion.div>

        <div className="space-y-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex items-start gap-8 group"
            >
              <div className="flex-shrink-0">
                <div className="bg-accent-500 text-white w-20 h-20 rounded-2xl flex items-center justify-center font-display font-bold text-2xl">
                  {step.number}
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-3xl font-display font-bold mb-3">{step.title}</h3>
                <p className="text-background-300 text-lg">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <ArrowDown className="text-accent-400 flex-shrink-0 mt-8" size={32} />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
