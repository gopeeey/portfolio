export default function NpmIcon({
  fill = "rgb(var(--background))",
}: {
  fill?: string;
}) {
  return (
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{"npm"}</title>
      <path d="M20,4H4V20h8V8h4V20h4V4" fill={fill} />
      <rect width={24} height={24} fill="none" />
    </svg>
  );
}
