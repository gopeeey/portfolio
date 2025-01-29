type Props = {
  stroke?: string;
};

export default function ExternalLinkIcon({ stroke = "black" }: Props) {
  return (
    <svg
      width={22}
      height={22}
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_441_35)">
        <path
          d="M18.3334 11.9167V20.1667H1.83337V3.66675H10.0834"
          stroke={stroke}
          strokeWidth={2}
          strokeLinecap="round"
        />
        <path
          d="M14.6666 1.83325H20.1666V7.33325"
          stroke={stroke}
          strokeWidth={2}
          strokeLinecap="round"
        />
        <path
          d="M11 11L19.8 2.19995"
          stroke={stroke}
          strokeWidth={2}
          strokeLinecap="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_441_35">
          <rect width={22} height={22} fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
