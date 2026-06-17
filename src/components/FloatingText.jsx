import { motion } from "framer-motion";

export default function FloatingText({ text, x, y }) {
  const floatingAnimation = {
    initial: { opacity: 0, y: 20, scale: 0.8 },
    animate: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
    },
    exit: { opacity: 0, y: -20, scale: 0.8 },
  };

  const pulseAnimation = {
    animate: {
      y: [0, -8, 0],
    },
    transition: {
      duration: 2.5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  return (
    <motion.div
      variants={floatingAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.8, ease: "easeOut" }}
      style={{
        position: "absolute",
        left: x,
        top: y,
        pointerEvents: "none",
        zIndex: 20,
      }}
    >
      <motion.div
        {...pulseAnimation}
        style={{
          fontSize: "clamp(18px, 5vw, 36px)",
          fontWeight: "700",
          letterSpacing: "2px",
          color: "#ffffff",
          textShadow: `
            0 0 8px rgba(0, 149, 255, 0.6),
            0 0 16px rgba(0, 149, 255, 0.4),
            0 4px 12px rgba(0, 0, 0, 0.3)
          `,
          textAlign: "center",
          whiteSpace: "nowrap",
        }}
      >
        {text}
      </motion.div>
    </motion.div>
  );
}