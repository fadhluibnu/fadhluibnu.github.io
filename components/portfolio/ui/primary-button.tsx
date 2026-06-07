import type { ReactNode } from "react";

export default function PrimaryButton({ href, target, rel, children }: { href: string; target?: string; rel?: string; children: ReactNode }) {
  return (
    <a href={href} target={target} rel={rel} className="btn btn-primary">
      {children}
    </a>
  );
}
