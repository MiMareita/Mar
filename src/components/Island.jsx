import { motion } from 'framer-motion';

export default function Island({ x, y, size = 'medium', label }) {
  const sizes = {
    small: { width: 80, height: 60 },
    medium: { width: 120, height: 90 },
    large: { width: 160, height: 120 },
  };

  const sizeStyles = sizes[size];

  return (
    <motion.div
      className="island"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
      style={{
        position: 'absolute',
        left: x,
        bottom: y,
        width: sizeStyles.width,
        height: sizeStyles.height,
        zIndex: 2,
      }}
    >
      <svg viewBox="0 0 200 150" className="island-svg">
        {/* Island shape */}
        <ellipse cx="100" cy="100" rx="90" ry="70" fill="#D4A574" />
        {/* Sand highlight */}
        <ellipse cx="100" cy="80" rx="70" ry="50" fill="#DEB887" />
        {/* Palm trees */}
        <g transform="translate(50, 40)">
          <line x1="0" y1="0" x2="0" y2="-30" stroke="#8B7355" strokeWidth="3" />
          <circle cx="0" cy="-35" r="20" fill="#228B22" />
        </g>
        <g transform="translate(150, 50)">
          <line x1="0" y1="0" x2="0" y2="-25" stroke="#8B7355" strokeWidth="3" />
          <circle cx="0" cy="-30" r="15" fill="#228B22" />
        </g>
      </svg>
      {label && (
        <p
          style={{
            position: 'absolute',
            bottom: -30,
            left: '50%',
            transform: 'translateX(-50%)',
            fontSize: '12px',
            color: '#666',
            fontWeight: 'bold',
            whiteSpace: 'nowrap',
          }}
        >
          {label}
        </p>
      )}
    </motion.div>
  );
}
