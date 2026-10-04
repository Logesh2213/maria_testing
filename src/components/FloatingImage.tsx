import { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';

interface FloatingImageProps {
  src: string;
  alt: string;
  className?: string;
  delay?: number;
  rotation?: number;
  scale?: number;
  zIndex?: number;
  label?: string;
  badge?: string;
}

const FloatingImage = ({
  src,
  alt,
  className = '',
  delay = 0,
  rotation = 0,
  scale = 1,
  zIndex = 10,
  label,
  badge,
}: FloatingImageProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const rotateX = useTransform(mouseY, [-200, 200], [5, -5]);
  const rotateY = useTransform(mouseX, [-200, 200], [-5, 5]);
  
  const springRotateX = useSpring(rotateX, { stiffness: 100, damping: 20 });
  const springRotateY = useSpring(rotateY, { stiffness: 100, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      mouseX.set(e.clientX - centerX);
      mouseY.set(e.clientY - centerY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, rotate: rotation }}
      animate={{ 
        opacity: 1, 
        y: 0, 
        rotate: isHovered ? 0 : rotation,
        scale: isHovered ? scale * 1.05 : scale,
      }}
      transition={{ 
        duration: 0.6, 
        delay,
        type: 'spring',
        stiffness: 100,
      }}
      style={{
        rotateX: springRotateX,
        rotateY: springRotateY,
        transformStyle: 'preserve-3d',
        zIndex,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative ${className}`}
    >
      <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-white">
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
        />
        
        {/* Glass overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
        
        {/* Label */}
        {label && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: delay + 0.3 }}
            className="absolute top-4 left-4 glass px-4 py-2 rounded-full text-sm font-medium text-background-900"
          >
            {label}
          </motion.div>
        )}
        
        {/* Badge */}
        {badge && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: delay + 0.4, type: 'spring' }}
            className="absolute bottom-4 right-4 bg-accent-500 text-white px-4 py-2 rounded-full text-sm font-semibold"
          >
            {badge}
          </motion.div>
        )}
      </div>
      
      {/* Shadow */}
      <div className="absolute -bottom-4 left-4 right-4 h-4 bg-black/20 blur-xl rounded-full" />
    </motion.div>
  );
};

export default FloatingImage;
