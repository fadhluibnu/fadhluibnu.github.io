import type { ReactNode } from "react";

export default function FormField({
  label,
  error,
  full,
  children,
}: {
  label: string;
  error?: string;
  full?: boolean;
  children: ReactNode;
}) {
  return (
    <label className={`form-group${full ? " full" : ""}${error ? " has-error" : ""}`}>
      <span className="form-label">{label}</span>
      {children}
      <span className="field-error">{error ?? ""}</span>
    </label>
  );
}
