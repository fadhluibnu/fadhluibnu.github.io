import { experienceStats } from "../experience-details.data";
import styles from "../experience-details.module.css";

export function ExperienceDetailsHeader() {
  return (
    <section className={styles.pageHeader} id="top">
      <div className={styles.eyebrow}>
        <span className={styles.eyebrowDot} />
        <span>Professional Journey Timeline</span>
      </div>

      <h1 className={styles.sectionTitle}>
        <span className={styles.highlightLine}>Experience Details</span>
      </h1>

      <p className={styles.sectionSubtitle}>
        A detailed timeline of my professional journey, academic contributions, internships, and organizational
        experience.
      </p>

      <div className={styles.statsGrid} aria-label="Experience summary">
        {experienceStats.map((stat) => (
          <div className={styles.statCard} key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
