"use client";

import { CONTACT_EMAIL, SECTION_IDS } from "./portfolio.data";
import { useActiveSection } from "./hooks/use-active-section";
import { useContactForm } from "./hooks/use-contact-form";
import { useCopyEmail } from "./hooks/use-copy-email";
import { useToast } from "./hooks/use-toast";
import HeroSection from "./sections/hero-section";
import AboutSection from "./sections/about-section";
import ExperienceSection from "./sections/experience-section";
import ProjectsSection from "./sections/projects-section";
import CertificationsSection from "./sections/certifications-section";
import ContactSection from "./sections/contact-section";
import BottomNavigation from "./ui/bottom-navigation";

export default function PortfolioHomePage() {
  const activeSection = useActiveSection(SECTION_IDS);
  const { toastMessage, isToastVisible, showToast } = useToast();
  const copyEmail = useCopyEmail(CONTACT_EMAIL, showToast);
  const { contactForm, contactErrors, isSubmitting, handleContactInputChange, handleContactSubmit } = useContactForm(
    CONTACT_EMAIL,
    showToast,
  );

  return (
    <div className="page">
      <HeroSection onCopyEmail={copyEmail} />
      <AboutSection onCopyEmail={copyEmail} />
      <ExperienceSection />
      <ProjectsSection />
      <CertificationsSection />
      <ContactSection
        contactForm={contactForm}
        errors={contactErrors}
        onChange={handleContactInputChange}
        onCopyEmail={copyEmail}
        onSubmit={handleContactSubmit}
        isSubmitting={isSubmitting}
      />
      <BottomNavigation activeSection={activeSection} />
      <div className={`copy-toast${isToastVisible ? " show" : ""}`}>{toastMessage}</div>
    </div>
  );
}
