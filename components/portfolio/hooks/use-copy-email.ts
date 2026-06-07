"use client";

import { useCallback } from "react";

export function useCopyEmail(email: string, showToast: (message?: string) => void) {
  return useCallback(async () => {
    try {
      if (!navigator.clipboard?.writeText) throw new Error("Clipboard API is unavailable.");
      await navigator.clipboard.writeText(email);
      showToast();
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = email;
      textarea.setAttribute("readonly", "");
      textarea.style.position = "absolute";
      textarea.style.left = "-9999px";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      textarea.remove();
      showToast();
    }
  }, [email, showToast]);
}
