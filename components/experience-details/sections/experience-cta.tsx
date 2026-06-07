import Link from "next/link";
import { CONTACT_EMAIL } from "../experience-details.data";
import styles from "../experience-details.module.css";

export function ExperienceCta() {
  const mailSubject = encodeURIComponent("Collaboration Opportunity with Fadhlu Ibnu");

  return (
    <section className={styles.ctaCard} aria-label="Collaboration call to action">
      <div>
        <h2>Interested in working together?</h2>
        <p>I’m open to collaboration, internship opportunities, freelance projects, and technical discussions.</p>
      </div>

      <div className={styles.ctaActions}>
        <a className={`${styles.pillButton} ${styles.white}`} href={`mailto:${CONTACT_EMAIL}?subject=${mailSubject}`}>
          Let’s Connect
        </a>

        <Link className={styles.pillButton} href="/#experience">
          Back to Portfolio
        </Link>
      </div>
    </section>
  );
}
