import { Home, Trees, Building2, PencilRuler, Hammer, Users } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Home,
      title: 'House Construction',
      description: 'From foundation to finishing, our team manages every stage of construction with careful planning and attention to detail.',
      color: 'bg-blue-500',
    },
    {
      icon: Trees,
      title: 'Farmhouse Construction',
      description: 'We design and construct comfortable, spacious, and peaceful farmhouse properties that blend modern living with natural surroundings.',
      color: 'bg-green-500',
    },
    {
      icon: Building2,
      title: 'Property Sales',
      description: 'We help clients explore suitable properties based on their requirements, location preferences, and investment goals.',
      color: 'bg-purple-500',
    },
    {
      icon: PencilRuler,
      title: 'Custom Home Design',
      description: 'Our team works with you to transform your ideas into a practical and beautiful home design that matches your lifestyle and budget.',
      color: 'bg-orange-500',
    },
    {
      icon: Hammer,
      title: 'Renovation & Remodeling',
      description: 'From individual spaces to complete renovations, we help transform existing properties with thoughtful designs and quality workmanship.',
      color: 'bg-red-500',
    },
    {
      icon: Users,
      title: 'End-to-End Project Management',
      description: 'We coordinate planning, materials, construction, finishing, and other project requirements to make your construction journey smooth and hassle-free.',
      color: 'bg-teal-500',
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            What We Do
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From the first idea to the final handover, Maria Housing provides complete solutions for your property and construction needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className={`${service.color} w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
