import { useState } from 'react';

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Residential', 'Farmhouses', 'Villas', 'Interiors', 'Construction'];

  const projects = [
    {
      id: 1,
      category: 'Residential',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80',
      title: 'Modern Family Home',
    },
    {
      id: 2,
      category: 'Farmhouses',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80',
      title: 'Luxury Farmhouse',
    },
    {
      id: 3,
      category: 'Villas',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80',
      title: 'Premium Villa',
    },
    {
      id: 4,
      category: 'Interiors',
      image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=80',
      title: 'Modern Interior',
    },
    {
      id: 5,
      category: 'Construction',
      image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&q=80',
      title: 'Construction Site',
    },
    {
      id: 6,
      category: 'Residential',
      image: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=600&q=80',
      title: 'Contemporary Home',
    },
  ];

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our Work
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Every project tells a story. Take a look at our work and discover the quality, craftsmanship, and attention to detail that goes into every Maria Housing project.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                activeCategory === category
                  ? 'bg-primary-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-primary-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-primary-300 text-sm font-medium mb-1">
                    {project.category}
                  </p>
                  <h3 className="text-white text-xl font-bold">
                    {project.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-all"
          >
            View Full Gallery
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
