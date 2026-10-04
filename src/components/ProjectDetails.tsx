import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin, Home, Layout, Video, Image, Building, Users, Info } from 'lucide-react';

interface ProjectDetailsProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    id: number;
    title: string;
    category: string;
    image: string;
  };
}

const ProjectDetails = ({ isOpen, onClose, project }: ProjectDetailsProps) => {
  if (!isOpen) return null;

  const sections = [
    { id: 'synopsis', icon: Info, title: 'Project Synopsis' },
    { id: 'map', icon: MapPin, title: 'Live Map' },
    { id: 'specs', icon: Home, title: 'Project Specifications' },
    { id: 'floor', icon: Layout, title: 'Floor Plans' },
    { id: 'walkthrough', icon: Video, title: 'Model Apartment Walkthrough' },
    { id: 'gallery', icon: Image, title: 'Gallery' },
    { id: 'interior', icon: Building, title: 'Interior' },
    { id: 'exterior', icon: Building, title: 'Exterior' },
    { id: 'clubhouse', icon: Users, title: 'Club House' },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-background-900/80 backdrop-blur-sm z-50"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed inset-4 md:inset-10 lg:inset-20 bg-white rounded-3xl shadow-2xl z-50 overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="relative h-64 md:h-80">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background-900/80 to-transparent" />
              <button
                onClick={onClose}
                className="absolute top-4 right-4 bg-white/20 backdrop-blur-md p-2 rounded-full hover:bg-white/30 transition-colors"
              >
                <X className="text-white" size={24} />
              </button>
              <div className="absolute bottom-6 left-6 md:left-10">
                <span className="text-accent-400 text-sm font-semibold uppercase tracking-wider mb-2 block">
                  {project.category}
                </span>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-white">
                  {project.title}
                </h2>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6 md:p-10">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {sections.map((section, index) => {
                  const Icon = section.icon;
                  return (
                    <motion.div
                      key={section.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="group bg-background-50 rounded-2xl p-6 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer border border-background-200 hover:border-accent-300"
                    >
                      <div className="bg-accent-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <Icon className="text-accent-600" size={24} />
                      </div>
                      <h3 className="font-display font-semibold text-background-900 text-sm md:text-base">
                        {section.title}
                      </h3>
                    </motion.div>
                  );
                })}
              </div>

              {/* Project Synopsis Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-10 bg-background-50 rounded-3xl p-8 border border-background-200"
              >
                <h3 className="text-2xl font-display font-bold text-background-900 mb-4 flex items-center gap-3">
                  <Info className="text-accent-600" size={28} />
                  Project Synopsis
                </h3>
                <p className="text-background-600 leading-relaxed">
                  This premium residential project represents the pinnacle of modern living. 
                  Designed with meticulous attention to detail, it offers spacious layouts, 
                  premium finishes, and world-class amenities. The project features contemporary 
                  architecture blended with sustainable design principles, creating homes that 
                  are both beautiful and environmentally responsible.
                </p>
              </motion.div>

              {/* Specifications */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-8 grid md:grid-cols-3 gap-6"
              >
                <div className="bg-background-50 rounded-2xl p-6 border border-background-200">
                  <h4 className="text-accent-600 font-semibold mb-2">Total Area</h4>
                  <p className="text-2xl font-display font-bold text-background-900">5 Acres</p>
                </div>
                <div className="bg-background-50 rounded-2xl p-6 border border-background-200">
                  <h4 className="text-accent-600 font-semibold mb-2">Units</h4>
                  <p className="text-2xl font-display font-bold text-background-900">120 Villas</p>
                </div>
                <div className="bg-background-50 rounded-2xl p-6 border border-background-200">
                  <h4 className="text-accent-600 font-semibold mb-2">Starting Price</h4>
                  <p className="text-2xl font-display font-bold text-background-900">₹2.5 Cr</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProjectDetails;
