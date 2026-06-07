import { navigationItems } from "../portfolio.data";
import type { NavIconKey, SectionId } from "../portfolio.types";
import {
  CalendarIcon,
  CertificateNavIcon,
  ChatIcon,
  DatabaseIcon,
  LabIcon,
  MenuIcon,
} from "../icons/portfolio-icons";

export default function BottomNavigation({ activeSection }: { activeSection: SectionId }) {
  return (
    <nav className="bottom-nav-shell" aria-label="Main navigation">
      <div className="bottom-nav">
        {navigationItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`nav-link${item.className ? ` ${item.className}` : ""}${activeSection === item.id ? " active" : ""}`}
          >
            <span>{item.label}</span>
            <NavIcon icon={item.icon} />
          </a>
        ))}
      </div>
    </nav>
  );
}

function NavIcon({ icon }: { icon: NavIconKey }) {
  if (icon === "menu") return <MenuIcon />;
  if (icon === "database") return <DatabaseIcon />;
  if (icon === "calendar") return <CalendarIcon />;
  if (icon === "lab") return <LabIcon />;
  if (icon === "certificate") return <CertificateNavIcon />;
  return <ChatIcon />;
}
