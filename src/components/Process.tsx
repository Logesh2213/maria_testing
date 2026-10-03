import { MessageCircle, DraftingCompass, FileText, HardHat, Sparkles, KeyRound } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      number: '01',
      icon: MessageCircle,
      title: 'Consultation',
      description: 'Tell us about your requirements, ideas, budget, and expectations.',
      color: 'bg-blue-500',
      iconBg: 'bg-blue-100',
    },
    {
      number: '02',
      icon: DraftingCompass,
      title: 'Planning & Design',
      description: 'Our team develops a suitable concept and plan based on your needs.',
      color: 'bg-purple-500',
      iconBg: 'bg-purple-100',
    },
    {
      number: '03',
      icon: FileText,
      title: 'Estimation',
      description: 'We provide project estimates and discuss materials, specifications, and timelines.',
      color: 'bg-orange-500',
      iconBg: 'bg-orange-100',
    },
    {
      number: '04',
      icon: HardHat,
      title: 'Construction',
      description: 'Our team begins construction while maintaining quality and safety standards.',
      color: 'bg-yellow-500',
      iconBg: 'bg-yellow-100',
    },
    {
      number: '05',
      icon: Sparkles,
      title: 'Finishing',
      description: 'We complete the interiors, exterior work, fixtures, and finishing touches.',
      color: 'bg-pink-500',
      iconBg: 'bg-pink-100',
    },
    {
      number: '06',
      icon: KeyRound,
      title: 'Handover',
      description: 'Your completed dream home is ready to welcome you.',
      color: 'bg-green-500',
      iconBg: 'bg-green-100',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            From Dream to Reality
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Make your construction journey simple with our structured process.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 group border border-gray-200 hover:border-primary-300"
              >
                <div className={`absolute -top-4 -left-4 ${step.color} text-white w-14 h-14 rounded-full flex items-center justify-center font-bold text-lg shadow-lg group-hover:scale-110 transition-transform`}>
                  {step.number}
                </div>
                <div className={`${step.iconBg} w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                  <Icon size={40} className={step.color.replace('bg-', 'text-')} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Process;
