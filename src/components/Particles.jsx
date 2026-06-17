export default function Particles() {
  const particles = Array.from({ length: 30 });

  return (
    <div className="particles">
      {particles.map((_, i) => (
        <span key={i} className="particle" />
      ))}
    </div>
  );
}