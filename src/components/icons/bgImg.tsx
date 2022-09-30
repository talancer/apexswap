export function BgImg(props: React.SVGAttributes<{}>) {
  return (
    <svg width="100%" height="100%" {...props}>
      <rect width="100%" height="100%" fill="red" />
      <circle cx="100%" cy="100%" r="150" fill="blue" stroke="black" />
      <polygon points="120,0 240,225 0,225" fill="green" />
      <text
        x="50"
        y="100"
        fontFamily="Verdana"
        fontSize="55"
        fill="white"
        stroke="black"
        strokeWidth="2"
      >
        Hello!
      </text>
    </svg>
  );
}
