import Image from "next/image";
import Link from "next/link";
import { CONTACT_EMAIL } from "../experience-details.data";
import styles from "../experience-details.module.css";
import { BackArrowIcon, CopyIcon } from "../ui/icons";

export function ExperienceDetailsTopbar({ onCopyEmail }: { onCopyEmail: () => void }) {
  return (
    <header className={styles.topbar}>
      <Link href="/#home" className={styles.brand} aria-label="Back to Fadhlu Ibnu portfolio">
        <Image
          src="/assets/logo/logo-fadhluibnu.png"
          alt="Fadhlu Ibnu Logo"
          width={38}
          height={38}
          className={`${styles.brandMark} object-cover`}
        />
        <span className={styles.brandText}>Fadhlu Ibnu</span>
      </Link>

      <div className={styles.topActions}>
        <button className={styles.pillButton} type="button" aria-label="Copy email address" onClick={onCopyEmail}>
          <span>email: {CONTACT_EMAIL}</span>
          <CopyIcon className={styles.icon} />
        </button>

        <Link href="/#home" className={`${styles.pillButton} ${styles.white}`}>
          <span>Back to Portfolio</span>
          <BackArrowIcon className={styles.icon} />
        </Link>
      </div>
    </header>
  );
}
