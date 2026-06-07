"use client";

import { useMemo, useState } from "react";
import { CONTACT_EMAIL, experienceItems } from "./experience-details.data";
import styles from "./experience-details.module.css";
import type { ExperienceFilter } from "./experience-details.types";
import { useCopyToast } from "./hooks/use-copy-toast";
import { useRevealOnScroll } from "./hooks/use-reveal-on-scroll";
import { ExperienceCta } from "./sections/experience-cta";
import { ExperienceDetailsHeader } from "./sections/experience-details-header";
import { ExperienceDetailsTopbar } from "./sections/experience-details-topbar";
import { ExperienceFilterBar } from "./sections/experience-filter-bar";
import { ExperienceTimeline } from "./sections/experience-timeline";
import { Toast } from "./ui/toast";

export default function ExperienceDetailsPage() {
  const [activeFilter, setActiveFilter] = useState<ExperienceFilter>("all");
  const [openedIds, setOpenedIds] = useState<Set<string>>(() => new Set());
  const { toastMessage, isToastVisible, copyText } = useCopyToast();

  const visibleItems = useMemo(() => {
    if (activeFilter === "all") return experienceItems;
    return experienceItems.filter((item) => item.categories.includes(activeFilter));
  }, [activeFilter]);

  useRevealOnScroll(`.${styles.timelineItem}`, styles.reveal, activeFilter);

  const handleCopyEmail = () => {
    void copyText(CONTACT_EMAIL);
  };

  const handleToggleDetails = (id: string) => {
    setOpenedIds((currentIds) => {
      const nextIds = new Set(currentIds);

      if (nextIds.has(id)) {
        nextIds.delete(id);
      } else {
        nextIds.add(id);
      }

      return nextIds;
    });
  };

  return (
    <div className={styles.page}>
      <main className={styles.shell}>
        <ExperienceDetailsTopbar onCopyEmail={handleCopyEmail} />
        <ExperienceDetailsHeader />
        <ExperienceFilterBar activeFilter={activeFilter} onFilterChange={setActiveFilter} />
        <ExperienceTimeline items={visibleItems} openedIds={openedIds} onToggle={handleToggleDetails} />
        <ExperienceCta />
        <footer className={styles.footer}>© 2026 Fadhlu Ibnu `Abbad. Built with passion and precision.</footer>
      </main>

      <Toast message={toastMessage} isVisible={isToastVisible} />
    </div>
  );
}
