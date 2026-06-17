import { motion } from 'framer-motion';
import './Intro.css';

export default function Intro({ onStart }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const floatingVariants = {
    initial: { y: 0 },
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  const pulseVariants = {
    animate: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  const decorElements = [
    { delay: 0, color: '#FF69B4', size: 8 },
    { delay: 0.1, color: '#FFD700', size: 6 },
    { delay: 0.2, color: '#9D4EDD', size: 7 },
    { delay: 0.3, color: '#00D9FF', size: 6 },
    { delay: 0.4, color: '#FF6B9D', size: 8 },
  ];

  return (
    <div className="intro" onClick={onStart}>
      <div className="intro-decor-container">
        {decorElements.map((elem, idx) => (
          <motion.div
            key={idx}
            className="intro-decor-dot"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.8, scale: 1 }}
            transition={{ delay: elem.delay, duration: 0.6 }}
            style={{
              backgroundColor: elem.color,
              width: elem.size,
              height: elem.size,
              left: `${20 + idx * 15}%`,
            }}
          />
        ))}
      </div>

      <motion.div
        className="intro-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="intro-title-container" variants={itemVariants}>
          <motion.h1
            className="intro-title"
            variants={floatingVariants}
            initial="initial"
            animate="animate"
          >
            Te amo, Mar
          </motion.h1>
        </motion.div>

        <motion.div className="intro-subtitle-container" variants={itemVariants}>
          <motion.p
            className="intro-subtitle"
            variants={pulseVariants}
            animate="animate"
          >
            Haz click para comenzar
          </motion.p>
        </motion.div>

        <motion.div
          className="intro-click-hint"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.button
            className="intro-click-button"
            animate={{
              boxShadow: [
                '0 4px 15px rgba(255, 20, 147, 0.4)',
                '0 8px 25px rgba(255, 20, 147, 0.6)',
                '0 4px 15px rgba(255, 20, 147, 0.4)',
              ],
            }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            Comenzar
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
}