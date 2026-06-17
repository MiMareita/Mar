import { motion } from "framer-motion";

export default function Boat({ progress }) {
  return (
    <motion.div
      className="boat"
      animate={{
        x: `${progress * 80}%`,
        y: [0, -10, 0],
        rotate: [-3, 3, -3]
      }}
      transition={{
        y: { repeat: Infinity, duration: 3 },
        rotate: { repeat: Infinity, duration: 4 }
      }}
    >
      ⛵
    </motion.div>
  );
}