
interface LocationIconProps {
  size?: number;
  className?: string;
}

export default function LocationIcon({
  size = 28,
  className = "",
}: LocationIconProps) {
  return (
    <img
      src="/icons/location-pin.gif"
      alt="Location"
      width={size}
      height={size}
      className={className}
    />
  );
}
