export default function Intro({ onStart }) {
  return (
    <div className="intro" onClick={onStart}>
      <p>haz click para recordar…</p>
    </div>
  );
}