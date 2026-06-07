type IconProps = {
  className?: string;
};

export function CopyIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M5.4 4.75V3.35C5.4 2.66 5.96 2.1 6.65 2.1H11.8C12.49 2.1 13.05 2.66 13.05 3.35V8.5C13.05 9.19 12.49 9.75 11.8 9.75H10.4"
        stroke="currentColor"
        strokeWidth="1.45"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.75"
      />
      <path
        d="M3.95 6.25H8.7C9.39 6.25 9.95 6.81 9.95 7.5V12.65C9.95 13.34 9.39 13.9 8.7 13.9H3.55C2.86 13.9 2.3 13.34 2.3 12.65V7.9C2.3 6.99 3.04 6.25 3.95 6.25Z"
        stroke="currentColor"
        strokeWidth="1.45"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.75"
      />
    </svg>
  );
}

export function BackArrowIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M11.45 4.55L4.55 11.45M4.55 6.45V11.45H9.55"
        stroke="currentColor"
        strokeWidth="1.65"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ChevronDownIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M4 6.25L8 10.25L12 6.25" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
