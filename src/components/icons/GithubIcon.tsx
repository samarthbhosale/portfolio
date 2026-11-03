
interface GithubIconProps {
  size?: number;
  className?: string;
}

export default function GithubIcon({
  size = 28,
  className = "",
}: GithubIconProps) {
  return (
    <img
      src="/icons/GitHub-logo.gif"
      alt="GitHub"
      width={size}
      height={size}
      className={className}
    />
  );
}
