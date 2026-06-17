import { motion } from "framer-motion";

export default function Boat({ progress }) {
  return (
    <motion.div
      className="boat"
      animate={{
        x: `${progress * 180}%`,
      }}
      transition={{
        duration: 0.1,
        ease: "linear",
      }}
      style={{
        position: "absolute",
        left: 0,
        top: "50%",
        transform: "translateY(-50%)",
        fontSize: "60px",
        zIndex: 10,
      }}
    >
      <motion.div
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
          ease: "easeInOut",
        }}
      >
        ⛵
      </motion.div>
    </motion.div>
  );
}