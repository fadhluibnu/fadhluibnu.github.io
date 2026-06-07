import { CONTACT_EMAIL, focusTags } from "../portfolio.data";
import type {
  ContactFormErrors,
  ContactFormState,
  ContactInputChangeHandler,
  ContactSubmitHandler,
} from "../portfolio.types";
import { CopyIcon, MailIcon, LocationIcon, MessageIcon, SendIcon } from "../icons/portfolio-icons";
import FormField from "../ui/form-field";
import SectionHeading from "../ui/section-heading";
import SocialPanel from "../ui/social-panel";

export default function ContactSection({
  contactForm,
  errors,
  onChange,
  onCopyEmail,
  onSubmit,
}: {
  contactForm: ContactFormState;
  errors: ContactFormErrors;
  onChange: ContactInputChangeHandler;
  onCopyEmail: () => void;
  onSubmit: ContactSubmitHandler;
}) {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-inner">
        <SectionHeading
          eyebrowClass="contact"
          title="Let’s Connect and Collaborate"
          subtitle="Open for freelance projects, internship opportunities, collaborations, and tech discussions."
        />

        <div className="contact-layout">
          <aside className="contact-left" aria-label="Contact information">
            <article className="contact-info-card">
              <div className="contact-icon-bubble" aria-hidden="true">
                <MailIcon />
              </div>
              <div className="contact-card-body">
                <p className="contact-label">Email</p>
                <div className="contact-value-row">
                  <p className="contact-value">{CONTACT_EMAIL}</p>
                  <button className="mini-copy-btn js-copy-email" type="button" aria-label="Copy email address" onClick={onCopyEmail}>
                    <CopyIcon />
                  </button>
                </div>
                <p className="contact-helper">Click copy or send a message through the form.</p>
              </div>
            </article>

            <article className="contact-info-card">
              <div className="contact-icon-bubble" aria-hidden="true">
                <LocationIcon />
              </div>
              <div className="contact-card-body">
                <p className="contact-label">Location</p>
                <p className="contact-value" style={{ marginTop: 8 }}>
                  Semarang, Indonesia
                </p>
                <p className="contact-helper">Available for remote collaboration across time zones.</p>
              </div>
            </article>

            <article className="contact-info-card">
              <div className="contact-icon-bubble" aria-hidden="true">
                <MessageIcon />
              </div>
              <div className="contact-card-body">
                <p className="contact-label">Availability</p>
                <p className="contact-value" style={{ marginTop: 8 }}>
                  Open for Opportunities
                </p>
                <div className="availability-row">
                  <span className="availability-badge">
                    <span className="availability-dot" />
                    Available
                  </span>
                </div>
              </div>
            </article>

            <SocialPanel variant="contact" />

            <article className="focus-card">
              <h3 className="focus-title">Current Focus</h3>
              <p className="focus-subtitle">Areas I’m currently sharpening and building around.</p>
              <div className="focus-tags">
                {focusTags.map((tag) => (
                  <span className="focus-tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          </aside>

          <form className="contact-form-card" noValidate onSubmit={onSubmit}>
            <h3 className="form-heading">Tell me about your idea</h3>
            <p className="form-description">
              Use this form to prepare an email draft. It will open your email app with the message already filled in.
            </p>

            <div className="contact-form-grid">
              <FormField label="Your Name" error={errors.name}>
                <input
                  className="form-control"
                  type="text"
                  name="name"
                  placeholder="Your full name"
                  autoComplete="name"
                  value={contactForm.name}
                  onChange={onChange}
                />
              </FormField>

              <FormField label="Email Address" error={errors.email}>
                <input
                  className="form-control"
                  type="email"
                  name="email"
                  placeholder="name@example.com"
                  autoComplete="email"
                  value={contactForm.email}
                  onChange={onChange}
                />
              </FormField>

              <FormField label="Subject" error={errors.subject} full>
                <input
                  className="form-control"
                  type="text"
                  name="subject"
                  placeholder="Project collaboration, opportunity, or question"
                  value={contactForm.subject}
                  onChange={onChange}
                />
              </FormField>

              <FormField label="Message" error={errors.message} full>
                <textarea
                  className="form-control"
                  name="message"
                  placeholder="Write your message here..."
                  value={contactForm.message}
                  onChange={onChange}
                />
              </FormField>
            </div>

            <div className="contact-form-actions">
              <p className="form-note">I usually respond within 24–48 hours.</p>
              <button className="btn btn-primary send-btn" type="submit">
                <span>Send Message</span>
                <SendIcon />
              </button>
            </div>
          </form>
        </div>

        <footer className="contact-footer">
          <p>© 2026 Fadhlu Ibnu `Abbad. Built with passion, precision, and clean code.</p>
        </footer>
      </div>
    </section>
  );
}
