
interface LinkedinIconProps {
  size?: number;
  className?: string;
}

export default function LinkedinIcon({
  size = 28,
  className = "",
}: LinkedinIconProps) {
  return (
    <img
      src="/icons/LinkedIn-logo.gif"
      alt="LinkedIn"
      width={size}
      height={size}
      className={className}
    />
  );
}
