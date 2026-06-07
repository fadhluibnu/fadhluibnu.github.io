import styles from "../experience-details.module.css";

export function Toast({ message, isVisible }: { message: string; isVisible: boolean }) {
  return <div className={`${styles.copyToast}${isVisible ? ` ${styles.show}` : ""}`}>{message}</div>;
}
