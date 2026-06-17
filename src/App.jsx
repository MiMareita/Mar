import { useState } from "react";
import Intro from "./scenes/Intro";
import MainScene from "./scenes/MainScene";
import FinalScene from "./scenes/FinalScene";
import "./styles.css";

export default function App() {
  const [started, setStarted] = useState(false);
  const [finished, setFinished] = useState(false);

  if (!started) return <Intro onStart={() => setStarted(true)} />;
  if (finished) return <FinalScene />;

  return <MainScene onFinish={() => setFinished(true)} />;
}