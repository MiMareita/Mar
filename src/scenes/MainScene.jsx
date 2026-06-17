import { useEffect, useState } from "react";
import Boat from "../components/Boat";
import Ocean from "../components/Ocean";
import FloatingText from "../components/FloatingText";
import Particles from "../components/Particles";

export default function MainScene({ onFinish }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 1) {
          onFinish();
          return 1;
        }
        return p + 0.0015;
      });
    }, 16);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="scene">

      <Ocean progress={progress} />
      <Particles />

      <Boat progress={progress} />

      {/* TEXTO ROMÁNTICO */}
      {progress > 0.1 && (
        <FloatingText text="En un barco de papel yo volveré" x="15%" y="35%" />
      )}

      {progress > 0.3 && (
        <FloatingText text="Por ti mi amor francés limón" x="55%" y="45%" />
      )}

      {progress > 0.55 && (
        <FloatingText text="Las luces de la ciudad se apagarán" x="30%" y="25%" />
      )}

      {progress > 0.75 && (
        <FloatingText text="Te besaré, me besarás" x="60%" y="40%" />
      )}

    </div>
  );
}