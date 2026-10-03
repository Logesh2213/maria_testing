import { ArrowRight, MessageCircle } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
          Ready to Build Your Dream Home?
        </h2>
        <p className="text-lg text-primary-100 max-w-2xl mx-auto mb-8">
          Let's turn your ideas into a space you will be proud to call home. Whether you're planning a new house, farmhouse, renovation, or looking for the right property, Maria Housing is ready to help.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 bg-white text-primary-800 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
          >
            Start Your Project
            <ArrowRight size={20} />
          </a>
          <a
            href="https://wa.me/917010680759"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-600 transition-all transform hover:scale-105 shadow-lg"
          >
            Chat on WhatsApp
            <MessageCircle size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
