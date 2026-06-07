import type { ReactNode } from "react";

export default function PrimaryButton({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} className="btn btn-primary">
      {children}
    </a>
  );
}
