import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Confetti from "react-confetti";
export default function FinalScene() {
  const targetDate = new Date(2026, 5, 17, 14, 0, 0); // 17 de abril 2026 a las 2pm

  const [isUnlocked, setIsUnlocked] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();
      const diff = targetDate - now;

      if (diff <= 0) {
        setIsUnlocked(true);
      } else {
        const totalSeconds = Math.floor(diff / 1000);
        const days = Math.floor(totalSeconds / (24 * 3600));
        const hours = Math.floor((totalSeconds % (24 * 3600)) / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;

        setTimeRemaining({ days, hours, minutes, seconds });
      }
      
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 12 },
    },
  };

  return (
    <motion.div
      style={styles.container}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div style={styles.bg} />
    {<Confetti recycle={true} numberOfPieces={200} />}

      <motion.h1 style={styles.title} variants={itemVariants}>
        ¡Feliz Cumpleaños!
      </motion.h1>

      <motion.h2 style={styles.name} variants={itemVariants}>
        Mi Amor, Mar
      </motion.h2>

      {/* TIMER */}
      {!isUnlocked && (
        <motion.div style={styles.card} variants={itemVariants}>
          <p style={styles.subtitle}>
            La sorpresa estará disponible en:
          </p>

          <div style={styles.timer}>
            {[
              { v: timeRemaining.days, l: "Días" },
              { v: timeRemaining.hours, l: "Horas" },
              { v: timeRemaining.minutes, l: "Min" },
              { v: timeRemaining.seconds, l: "Seg" },
            ].map((item, i) => (
              <motion.div
                key={i}
                style={styles.box}
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 1, repeat: Infinity, delay: i * 0.1 }}
              >
                <div style={styles.number}>
                  {String(item.v).padStart(2, "0")}
                </div>
                <div style={styles.label}>{item.l}</div>
              </motion.div>
            ))}
          </div>

          <p style={styles.date}>
            17 de abril · 2:00 PM
          </p>
        </motion.div>
      )}

      {/* VIDEO SOLO CUANDO SE DESBLOQUEA */}
      {isUnlocked && (
        <motion.div
          style={styles.videoContainer}
          variants={itemVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <iframe
              src="https://www.youtube.com/embed/58H9_2Q-FZ8"
              title="Te amo Mar"
              style={styles.video}
              allowFullScreen
            />
          </motion.div>

          <motion.p
            style={styles.message}
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
          </motion.p>
        </motion.div>
      )}
    </motion.div>
  );
}

const styles = {
container: {
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  fontFamily: "sans-serif",
  padding: "20px",
  position: "relative",
  overflow: "hidden",

  // 🎀 Fondo rosa suave
  background: "linear-gradient(135deg, #ffd1e6 0%, #ff9ec5 50%, #ff7eb3 100%)",
},

  bg: {
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(135deg, #FF69B4 0%, #FFB6D9 25%, #FFC0CB 50%, #FF69B4 75%, #FFB6D9 100%)",
    backgroundSize: "400% 400%",
    zIndex: -1,
  },

title: {
  fontSize: "clamp(36px, 8vw, 52px)",
  fontWeight: "900",
  color: "#ffffff",
  marginBottom: "10px",
  textAlign: "center",
  letterSpacing: "3px",

  // ✨ elegante
  textTransform: "uppercase",

  // 💫 glow suave (no colorido exagerado)
  textShadow: "0 0 10px rgba(255,255,255,0.6), 0 0 25px rgba(255,105,180,0.4)",
},

  name: {
    fontSize: "clamp(28px, 7vw, 44px)",
    marginBottom: "20px",
    color: "#FFFFFF",
    fontWeight: "900",
    letterSpacing: "2px",
    textShadow: "0 4px 15px rgba(255, 20, 147, 0.4)",
  },

 card: {
  background: "linear-gradient(135deg, #ffc1da, #ff9ec5)",
  backdropFilter: "blur(12px)",
  padding: "24px",
  borderRadius: "18px",
  boxShadow: "0 12px 40px rgba(255, 20, 147, 0.25)",
  textAlign: "center",
  border: "1px solid rgba(255, 255, 255, 0.4)",
},

  subtitle: {
    marginBottom: "15px",
    color: "#FF1493",
    fontWeight: "600",
    fontSize: "clamp(14px, 3vw, 18px)",
  },

  timer: {
    display: "flex",
    gap: "12px",
    justifyContent: "center",
  },

  box: {
    background: "#fff",
    borderRadius: "10px",
    padding: "10px",
    minWidth: "60px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
  },

  number: {
    fontSize: "22px",
    fontWeight: "700",
    color: "#ff4d8d",
  },

  label: {
    fontSize: "12px",
    color: "#888",
  },

  date: {
    marginTop: "12px",
    fontSize: "14px",
    color: "#FF1493",
    fontWeight: "500",
  },

  videoContainer: {
    marginTop: "20px",
    width: "90%",
    maxWidth: "600px",
    textAlign: "center",
  },

  video: {
    width: "100%",
    height: "340px",
    borderRadius: "16px",
    border: "none",
    boxShadow: "0 10px 30px rgba(183, 55, 93, 0.2)",
  },

  message: {
    marginTop: "12px",
    color: "#FFFFFF",
    fontSize: "clamp(14px, 4vw, 20px)",
    fontWeight: "600",
    textShadow: "0 2px 8px rgba(255, 20, 147, 0.3)",
  },
};