"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export function useToast(defaultMessage = "Email berhasil disalin") {
  const [toastMessage, setToastMessage] = useState(defaultMessage);
  const [isToastVisible, setIsToastVisible] = useState(false);
  const toastTimerRef = useRef<number | null>(null);

  const showToast = useCallback(
    (message = defaultMessage) => {
      setToastMessage(message);
      setIsToastVisible(true);

      if (toastTimerRef.current) window.clearTimeout(toastTimerRef.current);

      toastTimerRef.current = window.setTimeout(() => {
        setIsToastVisible(false);
      }, 1600);
    },
    [defaultMessage],
  );

  useEffect(() => {
    return () => {
      if (toastTimerRef.current) window.clearTimeout(toastTimerRef.current);
    };
  }, []);

  return { toastMessage, isToastVisible, showToast };
}
