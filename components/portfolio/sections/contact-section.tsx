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
import { Reveal } from "@/components/animation/reveal";

export default function ContactSection({
  contactForm,
  errors,
  onChange,
  onCopyEmail,
  onSubmit,
  isSubmitting,
}: {
  contactForm: ContactFormState;
  errors: ContactFormErrors;
  onChange: ContactInputChangeHandler;
  onCopyEmail: () => void;
  onSubmit: ContactSubmitHandler;
  isSubmitting: boolean;
}) {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-inner">
        <Reveal>
          <SectionHeading
            eyebrowClass="contact"
            title="Let’s Connect and Collaborate"
            subtitle="Open for freelance projects, internship opportunities, collaborations, and tech discussions."
          />
        </Reveal>

        <div className="contact-layout">
          <aside className="contact-left" aria-label="Contact information">
            <Reveal delay={100}>
              <article className="contact-info-card group hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl transition-all duration-300">
                <div className="contact-icon-bubble group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300" aria-hidden="true">
                  <MailIcon />
                </div>
                <div className="contact-card-body">
                  <p className="contact-label">Email</p>
                  <div className="contact-value-row">
                    <p className="contact-value">{CONTACT_EMAIL}</p>
                    <button className="mini-copy-btn js-copy-email transition-transform duration-200 hover:scale-105 active:scale-95" type="button" aria-label="Copy email address" onClick={onCopyEmail}>
                      <CopyIcon />
                    </button>
                  </div>
                  <p className="contact-helper">Click copy or send a message through the form.</p>
                </div>
              </article>
            </Reveal>

            <Reveal delay={200}>
              <article className="contact-info-card group hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl transition-all duration-300">
                <div className="contact-icon-bubble group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300" aria-hidden="true">
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
            </Reveal>

            <Reveal delay={300}>
              <article className="contact-info-card group hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl transition-all duration-300">
                <div className="contact-icon-bubble group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300" aria-hidden="true">
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
            </Reveal>

            <Reveal delay={400}>
              <SocialPanel variant="contact" />
            </Reveal>

            <Reveal delay={500}>
              <article className="focus-card hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl transition-all duration-300">
                <h3 className="focus-title">Current Focus</h3>
                <p className="focus-subtitle">Areas I’m currently sharpening and building around.</p>
                <div className="focus-tags">
                  {focusTags.map((tag) => (
                    <span className="focus-tag hover:bg-primary/10 hover:text-primary transition-colors duration-200" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          </aside>

          <Reveal delay={300} className="w-full">
            <form className="contact-form-card hover:border-primary/30 transition-colors duration-500" noValidate onSubmit={onSubmit}>
              <h3 className="form-heading">Tell me about your idea</h3>
              <p className="form-description">
                Use this form to prepare an email draft. It will open your email app with the message already filled in.
              </p>

              <div className="contact-form-grid">
                <FormField label="Your Name" error={errors.name}>
                  <input
                    className="form-control focus:border-primary transition-colors duration-200"
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
                    className="form-control focus:border-primary transition-colors duration-200"
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
                    className="form-control focus:border-primary transition-colors duration-200"
                    type="text"
                    name="subject"
                    placeholder="Project collaboration, opportunity, or question"
                    value={contactForm.subject}
                    onChange={onChange}
                  />
                </FormField>

                <FormField label="Message" error={errors.message} full>
                  <textarea
                    className="form-control focus:border-primary transition-colors duration-200"
                    name="message"
                    placeholder="Write your message here..."
                    value={contactForm.message}
                    onChange={onChange}
                    disabled={isSubmitting}
                  />
                </FormField>
                
                <input type="text" name="_honey" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />
              </div>

              <div className="contact-form-actions">
                <p className="form-note">I usually respond within 24–48 hours.</p>
                <button className="btn btn-primary send-btn group transition-transform duration-300 hover:-translate-y-0.5 active:scale-[0.98]" type="submit" disabled={isSubmitting}>
                  <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"><SendIcon /></span>
                </button>
              </div>
            </form>
          </Reveal>
        </div>

        <footer className="contact-footer">
          <p>© 2026 Fadhlu Ibnu `Abbad. Built with passion, precision, and clean code.</p>
        </footer>
      </div>
    </section>
  );
}
