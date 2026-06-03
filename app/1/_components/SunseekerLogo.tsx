import Image from "next/image";

interface SunseekerLogoProps {
  height?: number;
  className?: string;
}

const SRC_W = 1000;
const SRC_H = 300;

export default function SunseekerLogo({
  height = 28,
  className = "",
}: SunseekerLogoProps) {
  const width = Math.round((SRC_W / SRC_H) * height);
  return (
    <Image
      src="/sunseeker/sunseeker-elite-logo.png"
      alt="Sunseeker Elite"
      width={width}
      height={height}
      priority
      className={className}
      style={{ height, width: "auto" }}
    />
  );
}
