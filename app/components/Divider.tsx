export default function Divider({
  fromColor = "#050505",
  toColor = "#080808",
  flip = false,
}: {
  fromColor?: string;
  toColor?: string;
  flip?: boolean;
}) {
  return (
    <div
      style={{
        position: "relative",
        height: "80px",
        background: fromColor,
        overflow: "hidden",
        transform: flip ? "scaleX(-1)" : "none",
      }}
    >
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        style={{ position: "absolute", bottom: 0, width: "100%", height: "100%", display: "block" }}
      >
        <path d="M0,0 L1440,60 L1440,80 L0,80 Z" fill={toColor} />
      </svg>
    </div>
  );
}
