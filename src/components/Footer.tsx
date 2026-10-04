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
    <footer className="bg-background-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16">
          {/* Brand */}
          <div>
            <h3 className="text-3xl font-display font-bold mb-6">MARIA<span className="text-accent-500">.</span></h3>
            <p className="text-background-400 mb-6 leading-relaxed">
              Building Dreams. Creating Homes.
            </p>
            <p className="text-background-400 text-sm leading-relaxed">
              Quality construction and personalized property solutions designed around your vision.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-display font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-background-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
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
                  <a
                    href="#services"
                    className="text-background-400 hover:text-white transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-display font-bold mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-background-400">
                <Phone size={20} className="text-accent-500" />
                <span>+91 70106 80759</span>
              </li>
              <li className="flex items-center gap-3 text-background-400">
                <Mail size={20} className="text-accent-500" />
                <span>Hello@mariasupercity.com</span>
              </li>
              <li className="flex items-start gap-3 text-background-400">
                <MapPin size={20} className="text-accent-500 mt-1" />
                <span className="text-sm leading-relaxed">No, 98/A, Bankmans Colony, Alazhgiri Nagar, Alamelumangapuram, Sathuvachari, Vellore, Tamil Nadu 632009</span>
              </li>
              <li className="flex items-center gap-3 text-background-400">
                <MessageCircle size={20} className="text-accent-500" />
                <span>WhatsApp: +91 70106 80759</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background-400 text-sm">
            © 2026 Maria Housing. All Rights Reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-background-400 hover:text-white transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-background-400 hover:text-white transition-colors text-sm">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
