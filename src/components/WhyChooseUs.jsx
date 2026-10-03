import { Check } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      title: 'Exceptional Quality',
      description: 'We focus on quality materials, skilled workmanship, and attention to detail in every project we undertake.',
    },
    {
      title: 'Client-Centric Approach',
      description: 'Your requirements come first. We listen to your ideas, preferences, and budget to create solutions tailored specifically to you.',
    },
    {
      title: 'Expertise & Experience',
      description: 'Our experienced team brings practical knowledge and construction expertise to every project.',
    },
    {
      title: 'Integrity & Transparency',
      description: 'We believe in honest communication, transparent processes, and building long-term relationships with our clients.',
    },
    {
      title: 'Attention to Detail',
      description: 'Every stage of construction is carefully planned and executed to ensure quality and consistency.',
    },
    {
      title: 'On-Time Project Support',
      description: 'We coordinate every stage of the project to keep the process organized and efficient.',
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Maria Housing?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience the difference that Maria Housing can make in your next construction or real estate project.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all"
            >
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Check className="text-green-600" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {reason.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#gallery"
            className="inline-flex items-center justify-center gap-2 bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-all"
          >
            View Our Gallery
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
