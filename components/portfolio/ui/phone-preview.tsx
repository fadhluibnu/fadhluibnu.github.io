export default function PhonePreview() {
  return (
    <div className="project-visual" aria-hidden="true">
      <PhoneMockup className="phone-back" />
      <PhoneMockup className="phone-front" />
    </div>
  );
}

function PhoneMockup({ className }: { className: string }) {
  return (
    <div className={`phone-mockup ${className}`}>
      <div className="phone-screen">
        <div className="status-bar">
          <span>9:41</span>
          <span>◔ ◔</span>
        </div>
        <div className="screen-profile">
          <span className="screen-avatar" />
          <span>
            <i className="screen-name" />
            <i className="screen-role" />
          </span>
        </div>
        <div className="screen-row">
          <span className="screen-dot" />
          <span className="screen-line" />
        </div>
        <div className="screen-grid">
          <span className="screen-chip" />
          <span className="screen-chip" />
          <span className="screen-chip" />
        </div>
        <div className="screen-panel" />
      </div>
    </div>
  );
}
