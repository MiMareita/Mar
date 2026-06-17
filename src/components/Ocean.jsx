export default function Ocean({ progress }) {
  return (
    <div
      className="ocean"
      style={{
        filter: `brightness(${1 - progress * 0.5})`
      }}
    />
  );
}