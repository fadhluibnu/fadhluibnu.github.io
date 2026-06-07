import type { ReactNode } from "react";

export default function MetaBlock({ label, value, icon }: { label: string; value: string; icon: ReactNode }) {
  return (
    <>
      <span className="meta-pill">
        {icon}
        {label}
      </span>
      <p className="meta-value">{value}</p>
    </>
  );
}
