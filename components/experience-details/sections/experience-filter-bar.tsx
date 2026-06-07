import { experienceFilters } from "../experience-details.data";
import type { ExperienceFilter } from "../experience-details.types";
import styles from "../experience-details.module.css";

export function ExperienceFilterBar({
  activeFilter,
  onFilterChange,
}: {
  activeFilter: ExperienceFilter;
  onFilterChange: (filter: ExperienceFilter) => void;
}) {
  return (
    <section className={styles.filterShell} aria-label="Experience filters">
      {experienceFilters.map((filter) => (
        <button
          key={filter.value}
          className={`${styles.filterChip}${activeFilter === filter.value ? ` ${styles.active}` : ""}`}
          type="button"
          onClick={() => onFilterChange(filter.value)}
        >
          {filter.label}
        </button>
      ))}
    </section>
  );
}
