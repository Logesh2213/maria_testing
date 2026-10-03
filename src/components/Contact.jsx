import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    projectType: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your enquiry! We will get back to you soon.');
    setFormData({
      name: '',
      phone: '',
      email: '',
      projectType: '',
      message: '',
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Let's Build Something Beautiful Together
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have a project in mind? We'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="bg-primary-100 p-3 rounded-lg">
                <MapPin className="text-primary-600" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">Visit Us</h3>
                <p className="text-gray-600">No, 98/A, Bankmans Colony, Alazhgiri Nagar, Alamelumangapuram, Sathuvachari, Vellore, Tamil Nadu 632009</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-primary-100 p-3 rounded-lg">
                <Phone className="text-primary-600" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">Call Us</h3>
                <p className="text-gray-600">+91 70106 80759</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-primary-100 p-3 rounded-lg">
                <Mail className="text-primary-600" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">Email Us</h3>
                <p className="text-gray-600">Hello@mariasupercity.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-green-100 p-3 rounded-lg">
                <MessageCircle className="text-green-600" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">WhatsApp</h3>
                <p className="text-gray-600">+91 70106 80759</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="bg-gray-50 rounded-2xl p-8">
            <div className="space-y-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Project Type</label>
                <select
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
                >
                  <option value="">Select project type</option>
                  <option value="House Construction">House Construction</option>
                  <option value="Farmhouse">Farmhouse</option>
                  <option value="Property Purchase">Property Purchase</option>
                  <option value="Renovation">Renovation</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your requirements"
                  rows="4"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary-600 text-white py-4 rounded-lg font-semibold hover:bg-primary-700 transition-all transform hover:scale-105"
              >
                Send Enquiry
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
