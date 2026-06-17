import { motion } from "framer-motion";

export default function FloatingText({ text, x, y }) {
  return (
    <motion.div
      className="floating-text"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 2 }}
      style={{ left: x, top: y }}
    >
      {text}
    </motion.div>
  );
}