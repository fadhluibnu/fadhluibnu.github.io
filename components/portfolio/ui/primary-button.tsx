import type { ReactNode } from "react";

export default function PrimaryButton({ href, target, rel, children }: { href: string; target?: string; rel?: string; children: ReactNode }) {
  return (
    <a href={href} target={target} rel={rel} className="btn btn-primary group transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-lg active:scale-[0.98]">
      {children}
    </a>
  );
}
