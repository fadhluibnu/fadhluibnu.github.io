"use client";

import { useEffect } from "react";

export function useRevealOnScroll(selector: string, revealClassName: string, dependencyKey: string) {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const elements = Array.from(document.querySelectorAll<HTMLElement>(selector));

    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add(revealClassName));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.add(revealClassName);
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12 },
    );

    elements.forEach((element, index) => {
      element.classList.remove(revealClassName);
      element.style.transitionDelay = `${Math.min(index * 60, 360)}ms`;
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, [dependencyKey, revealClassName, selector]);
}
