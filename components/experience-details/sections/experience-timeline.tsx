import Image from "next/image";
import type { ExperienceItem } from "../experience-details.types";
import styles from "../experience-details.module.css";
import { ChevronDownIcon } from "../ui/icons";

export function ExperienceTimeline({
  items,
  openedIds,
  onToggle,
}: {
  items: ExperienceItem[];
  openedIds: Set<string>;
  onToggle: (id: string) => void;
}) {
  return (
    <>
      <section className={styles.timeline} aria-label="Detailed experience timeline">
        {items.map((item) => (
          <ExperienceTimelineItem
            key={item.id}
            item={item}
            isOpen={openedIds.has(item.id)}
            onToggle={() => onToggle(item.id)}
          />
        ))}
      </section>

      <div className={`${styles.emptyState}${items.length === 0 ? ` ${styles.show}` : ""}`}>
        Tidak ada experience yang cocok dengan filter ini.
      </div>
    </>
  );
}

function ExperienceTimelineItem({
  item,
  isOpen,
  onToggle,
}: {
  item: ExperienceItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const isOngoing = item.status === "ongoing";

  return (
    <article className={styles.timelineItem} data-ongoing={String(isOngoing)}>
      <div className={styles.timelineDotWrap}>
        <span className={styles.timelineDot} />
      </div>

      <div className={`${styles.experienceCard}${isOpen ? ` ${styles.open}` : ""}`}>
        <div className={styles.cardInner}>
          <div className={styles.experienceTop}>
            <div className={styles.logoPlaceholder} style={{ overflow: "hidden", position: "relative" }}>
              {item.logoImage ? (
                <Image src={item.logoImage} alt={`${item.company} logo`} fill className="object-cover" />
              ) : (
                item.logo
              )}
            </div>

            <div className={styles.experienceTitle}>
              <h2>{item.company}</h2>
              <p className={styles.experienceMeta}>{item.meta}</p>
            </div>

            <span className={`${styles.statusBadge}${!isOngoing ? ` ${styles.past}` : ""}`}>
              <span className={styles.statusDot} />
              {isOngoing ? "Ongoing" : "Completed"}
            </span>
          </div>

          <div className={styles.summaryGrid}>
            <MiniInfo label="Type" value={item.type} />
            <MiniInfo label="Role" value={item.role} />
            <MiniInfo label="Duration" value={item.duration} />
          </div>

          <p className={styles.experienceSummary}>{item.summary}</p>

          <div className={styles.details}>
            <div className={styles.detailsInner}>
              <div className={styles.detailsContent}>
                <div className={styles.detailBlock}>
                  <h3>Key Contributions</h3>
                  <ul className={styles.detailList}>
                    {item.contributions.map((contribution) => (
                      <li key={contribution}>{contribution}</li>
                    ))}
                  </ul>
                </div>

                <div className={styles.detailBlock}>
                  <h3>Tech Stack & Focus</h3>
                  <div className={styles.stackList}>
                    {item.stacks.map((stack) => (
                      <span className={styles.stackChip} key={stack}>
                        {stack}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.experienceFooter}>
            <button className={styles.toggleDetails} type="button" aria-expanded={isOpen} onClick={onToggle}>
              <ChevronDownIcon className={`${styles.icon} ${styles.chevron}`} />
              <span>{isOpen ? "Show Less" : "Show More"}</span>
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}

function MiniInfo({ label, value }: { label: string; value: string }) {
  return (
    <div className={styles.miniInfo}>
      <span className={styles.miniLabel}>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}
