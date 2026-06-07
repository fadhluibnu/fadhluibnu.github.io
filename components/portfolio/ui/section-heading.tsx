export default function SectionHeading({
  eyebrowClass,
  title,
  subtitle,
}: {
  eyebrowClass: string;
  title: string;
  subtitle: string;
}) {
  return (
    <header className={`${eyebrowClass}-header`}>
      <h2 className={`${eyebrowClass}-title`}>
        <span className={`title-line ${eyebrowClass}-line`}>{title}</span>
      </h2>
      <p className={`${eyebrowClass}-subtitle`}>{subtitle}</p>
    </header>
  );
}
