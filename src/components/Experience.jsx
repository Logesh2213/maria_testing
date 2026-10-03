import { TrendingUp, Building2, Heart, ShieldCheck } from 'lucide-react';

const Experience = () => {
  const stats = [
    {
      icon: TrendingUp,
      number: '10+',
      label: 'Years of Experience',
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/20',
      borderColor: 'border-blue-400',
    },
    {
      icon: Building2,
      number: '100+',
      label: 'Projects Completed',
      color: 'text-amber-400',
      bgColor: 'bg-amber-500/20',
      borderColor: 'border-amber-400',
    },
    {
      icon: Heart,
      number: '100+',
      label: 'Happy Clients',
      color: 'text-rose-400',
      bgColor: 'bg-rose-500/20',
      borderColor: 'border-rose-400',
    },
    {
      icon: ShieldCheck,
      number: '100%',
      label: 'Commitment to Quality',
      color: 'text-emerald-400',
      bgColor: 'bg-emerald-500/20',
      borderColor: 'border-emerald-400',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-primary-900 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Our Numbers Speak for Themselves
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            A track record of excellence in construction and customer satisfaction
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className={`relative bg-white/5 backdrop-blur-lg rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-300 group border ${stat.borderColor} hover:shadow-2xl hover:shadow-${stat.borderColor}/50`}
              >
                <div className={`${stat.bgColor} w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 border-2 ${stat.borderColor}`}>
                  <Icon size={40} className={stat.color} />
                </div>
                <p className="text-5xl sm:text-6xl font-bold text-white mb-3 group-hover:scale-105 transition-transform">
                  {stat.number}
                </p>
                <p className="text-gray-300 font-medium text-sm uppercase tracking-wide">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
