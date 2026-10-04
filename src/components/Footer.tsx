import { Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/gallery' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
  ];

  const services = [
    'Construction',
    'Design',
    'Renovation',
    'Real Estate',
    'Consultancy',
    'Approvals',
  ];

  return (
    <footer className="bg-background-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <img src="/Logo.png" alt="Maria Housing" className="h-12 w-auto mb-6" />
            <p className="text-background-400 mb-4 leading-relaxed">
              Building Spaces. Creating Futures.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-display font-bold mb-6">Company</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-background-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-display font-bold mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-background-400 hover:text-white transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-display font-bold mb-6">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-background-400">
                <MapPin size={18} />
                <span>Vellore, Tamil Nadu</span>
              </li>
              <li className="flex items-center gap-3 text-background-400">
                <Phone size={18} />
                <span>+91 70106 80759</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background-400 text-sm">
            2026 Maria Housing. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
