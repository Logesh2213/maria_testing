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
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all"
            >
              <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center mb-6">
                <Quote className="text-primary-600" size={24} />
              </div>
              <p className="text-gray-600 leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>
              <p className="text-gray-900 font-bold">
                — {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
