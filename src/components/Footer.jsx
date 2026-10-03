import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Our Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact Us', href: '#contact' },
  ];

  const services = [
    'House Construction',
    'Farmhouse Construction',
    'Property Sales',
    'Custom Home Design',
    'Renovation',
    'Project Management',
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">MARIA HOUSING</h3>
            <p className="text-gray-400 mb-4">
              Building Dreams. Creating Homes.
            </p>
            <p className="text-gray-400 text-sm leading-relaxed">
              Quality construction and personalized property solutions designed around your vision.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-4">Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-gray-400">
                <Phone size={18} />
                <span>+91 70106 80759</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Mail size={18} />
                <span>Hello@mariasupercity.com</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <MapPin size={18} />
                <span>No, 98/A, Bankmans Colony, Alazhgiri Nagar, Alamelumangapuram, Sathuvachari, Vellore, Tamil Nadu 632009</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <MessageCircle size={18} />
                <span>WhatsApp: +91 70106 80759</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2026 Maria Housing. All Rights Reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
