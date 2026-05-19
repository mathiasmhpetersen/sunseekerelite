interface SunseekerLogoProps {
  height?: number;
  className?: string;
}

export default function SunseekerLogo({
  height = 28,
  className = "",
}: SunseekerLogoProps) {
  return (
    <svg
      className={className}
      height={height}
      viewBox="0 0 240 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Sunseeker Elite"
    >
      <text
        x="0"
        y="30"
        fill="#ffffff"
        fontFamily="Inter, sans-serif"
        fontWeight={700}
        fontSize={30}
        letterSpacing="-0.04em"
      >
        sunseeker
      </text>
      <rect x="0" y="35" width="240" height="13" fill="#ff5016" />
      <text
        x="208"
        y="46"
        fill="#ffffff"
        fontFamily="Inter, sans-serif"
        fontWeight={600}
        fontSize={12}
        letterSpacing="-0.01em"
        textAnchor="end"
      >
        elite
      </text>
    </svg>
  );
}
