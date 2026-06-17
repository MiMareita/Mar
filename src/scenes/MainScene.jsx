import { useEffect, useState, useRef } from "react";
import Boat from "../components/Boat";
import Ocean from "../components/Ocean";
import FloatingText from "../components/FloatingText";
import Particles from "../components/Particles";
import { SONG_CONFIG } from "../config/songConfig";

export default function MainScene({ onFinish }) {
  const [progress, setProgress] = useState(0);
  const [visibleTexts, setVisibleTexts] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const animationIntervalRef = useRef(null);

  const textTimestamps = SONG_CONFIG.textTimestamps;

  // Auto-start playback and animation
  useEffect(() => {
    // Start audio playback automatically
    const timer = setTimeout(() => {
      if (audioRef.current && !isPlaying) {
        audioRef.current.play().catch(() => {
          // If audio fails, start animation anyway
          startAnimation();
        });
      }
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const startAnimation = () => {
    if (animationIntervalRef.current) return;

    let currentProgress = 0;
    const duration = audioRef.current?.duration || 20; // Default 20 seconds if no audio
    const totalFrames = duration * 60; // 60 FPS

    animationIntervalRef.current = setInterval(() => {
      currentProgress += 1 / totalFrames;

      if (currentProgress >= 1) {
        currentProgress = 1;
        clearInterval(animationIntervalRef.current);
        animationIntervalRef.current = null;
        setTimeout(onFinish, 500);
      }

      setProgress(Math.min(currentProgress, 1));

      // Update visible texts based on progress time
      const currentTime = currentProgress * (audioRef.current?.duration || 20);
      const visible = textTimestamps
        .filter((item) => currentTime >= item.time)
        .map((item) => item.time);

      setVisibleTexts(visible);
    }, 16); // ~60 FPS
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleTimeUpdate = () => {
      const duration = audio.duration;
      if (duration > 0) {
        const newProgress = audio.currentTime / duration;
        setProgress(Math.min(newProgress, 1));

        // Update visible texts based on current time
        const currentTime = audio.currentTime;
        const visible = textTimestamps
          .filter((item) => currentTime >= item.time)
          .map((item) => item.time);

        setVisibleTexts(visible);

        // Trigger onFinish when song ends
        if (newProgress >= 0.99) {
          if (animationIntervalRef.current) {
            clearInterval(animationIntervalRef.current);
            animationIntervalRef.current = null;
          }
          audio.pause();
          setTimeout(onFinish, 500);
        }
      }
    };

    const handlePlay = () => {
      setIsPlaying(true);
      if (animationIntervalRef.current) {
        clearInterval(animationIntervalRef.current);
        animationIntervalRef.current = null;
      }
    };

    const handlePause = () => {
      setIsPlaying(false);
    };

    const handleEnded = () => {
      setIsPlaying(false);
      if (animationIntervalRef.current) {
        clearInterval(animationIntervalRef.current);
        animationIntervalRef.current = null;
      }
      onFinish();
    };

    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("play", handlePlay);
    audio.addEventListener("pause", handlePause);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("play", handlePlay);
      audio.removeEventListener("pause", handlePause);
      audio.removeEventListener("ended", handleEnded);
    };
  }, [onFinish, textTimestamps]);

  const handleAudioPlay = () => {
    if (audioRef.current) {
      audioRef.current.play().catch((err) => {
        console.error("Error playing audio:", err);
        startAnimation();
      });
    }
  };

  return (
    <div className="scene" style={{ position: "relative", overflow: "hidden" }}>
      {/* Audio Element */}
      <audio
        ref={audioRef}
        src={SONG_CONFIG.audioPath}
        crossOrigin="anonymous"
        style={{ display: "none" }}
      />

      <Ocean progress={progress} />
      <Particles />

      {/* Boat - moves across the ocean */}
      <Boat progress={progress} />

      {/* Synchronized Texts */}
      {textTimestamps.map((item) =>
        visibleTexts.includes(item.time) ? (
          <FloatingText
            key={item.time}
            text={item.text}
            x={item.x}
            y={item.y}
          />
        ) : null
      )}

      {/* Play button if audio not started */}
      {progress === 0 && !isPlaying && (
        <button
          onClick={handleAudioPlay}
          style={{
            position: "absolute",
            bottom: "30px",
            left: "50%",
            transform: "translateX(-50%)",
            padding: "12px 30px",
            fontSize: "16px",
            fontWeight: "bold",
            color: "white",
            backgroundColor: "#FF1493",
            border: "none",
            borderRadius: "25px",
            cursor: "pointer",
            zIndex: 100,
            boxShadow: "0 4px 15px rgba(255, 20, 147, 0.4)",
          }}
        >
          Reproducir Historia
        </button>
      )}

      {/* Progress bar */}
      <div
        style={{
          position: "absolute",
          bottom: "10px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "90%",
          height: "4px",
          backgroundColor: "rgba(255, 255, 255, 0.3)",
          borderRadius: "2px",
          zIndex: 100,
        }}
      >
        <div
          style={{
            height: "100%",
            width: `${progress * 100}%`,
            backgroundColor: "#FF1493",
            borderRadius: "2px",
            transition: "width 0.1s linear",
          }}
        />
      </div>
    </div>
  );
}