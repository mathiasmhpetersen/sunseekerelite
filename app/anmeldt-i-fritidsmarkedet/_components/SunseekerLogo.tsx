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
      viewBox="0 0 240 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Sunseeker Elite"
    >
      <text
        x="0"
        y="32"
        fill="#ffffff"
        fontFamily="Inter, sans-serif"
        fontWeight={700}
        fontSize={32}
        letterSpacing="-0.02em"
      >
        sunseeker
      </text>
      <rect x="62" y="40" width="178" height="14" fill="#ff5016" />
      <text
        x="194"
        y="51"
        fill="#ffffff"
        fontFamily="Inter, sans-serif"
        fontWeight={600}
        fontSize={13}
      >
        elite
      </text>
    </svg>
  );
}
