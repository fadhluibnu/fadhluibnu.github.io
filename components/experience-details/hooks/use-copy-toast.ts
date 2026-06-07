"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export function useCopyToast(defaultMessage = "Email berhasil disalin") {
  const [toastMessage, setToastMessage] = useState(defaultMessage);
  const [isToastVisible, setIsToastVisible] = useState(false);
  const timerRef = useRef<number | null>(null);

  const showToast = useCallback(
    (message = defaultMessage) => {
      setToastMessage(message);
      setIsToastVisible(true);

      if (timerRef.current) {
        window.clearTimeout(timerRef.current);
      }

      timerRef.current = window.setTimeout(() => {
        setIsToastVisible(false);
      }, 1600);
    },
    [defaultMessage],
  );

  const copyText = useCallback(
    async (value: string, successMessage = defaultMessage) => {
      try {
        if (navigator.clipboard?.writeText) {
          await navigator.clipboard.writeText(value);
        } else {
          throw new Error("Clipboard API unavailable");
        }

        showToast(successMessage);
      } catch {
        const temporaryTextarea = document.createElement("textarea");
        temporaryTextarea.value = value;
        temporaryTextarea.setAttribute("readonly", "");
        temporaryTextarea.style.position = "fixed";
        temporaryTextarea.style.left = "-9999px";
        document.body.appendChild(temporaryTextarea);
        temporaryTextarea.select();
        document.execCommand("copy");
        temporaryTextarea.remove();

        showToast(successMessage);
      }
    },
    [defaultMessage, showToast],
  );

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        window.clearTimeout(timerRef.current);
      }
    };
  }, []);

  return {
    toastMessage,
    isToastVisible,
    showToast,
    copyText,
  };
}
