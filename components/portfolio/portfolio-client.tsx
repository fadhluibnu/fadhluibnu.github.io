"use client";

import {
  createContext,
  type ChangeEvent,
  type FormEvent,
  type ReactNode,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { EMAIL, NAV_ITEMS } from "./portfolio-data";
import { NavIcon, SendIcon } from "./portfolio-icons";

type PortfolioInteractionContextValue = {
  showToast: (message?: string) => void;
};

type ContactFormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type ContactFormField = keyof ContactFormState;

const PortfolioInteractionContext = createContext<PortfolioInteractionContextValue | null>(null);
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const initialContactForm: ContactFormState = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

function usePortfolioInteraction() {
  const context = useContext(PortfolioInteractionContext);

  if (!context) {
    throw new Error("Portfolio interactive components must be rendered inside PortfolioInteractionProvider.");
  }

  return context;
}

export function PortfolioInteractionProvider({ children }: { children: ReactNode }) {
  const [toastMessage, setToastMessage] = useState("Email berhasil disalin");
  const [isToastVisible, setIsToastVisible] = useState(false);
  const toastTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const showToast = useCallback((message = "Email berhasil disalin") => {
    setToastMessage(message);
    setIsToastVisible(true);

    if (toastTimer.current) {
      clearTimeout(toastTimer.current);
    }

    toastTimer.current = setTimeout(() => {
      setIsToastVisible(false);
    }, 1600);
  }, []);

  useEffect(() => {
    return () => {
      if (toastTimer.current) {
        clearTimeout(toastTimer.current);
      }
    };
  }, []);

  return (
    <PortfolioInteractionContext.Provider value={{ showToast }}>
      {children}
      <div className={`copy-toast ${isToastVisible ? "show" : ""}`}>{toastMessage}</div>
    </PortfolioInteractionContext.Provider>
  );
}

export function CopyEmailButton({
  children,
  className,
  ariaLabel = "Copy email address",
}: {
  children: ReactNode;
  className: string;
  ariaLabel?: string;
}) {
  const { showToast } = usePortfolioInteraction();

  const copyEmail = async () => {
    try {
      if (!navigator.clipboard) {
        throw new Error("Clipboard API unavailable");
      }

      await navigator.clipboard.writeText(EMAIL);
      showToast();
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = EMAIL;
      textarea.setAttribute("readonly", "true");
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      textarea.remove();
      showToast();
    }
  };

  return (
    <button className={className} type="button" aria-label={ariaLabel} onClick={copyEmail}>
      {children}
    </button>
  );
}

export function ContactForm() {
  const { showToast } = usePortfolioInteraction();
  const [form, setForm] = useState<ContactFormState>(initialContactForm);
  const [errors, setErrors] = useState<Partial<Record<ContactFormField, string>>>({});

  const updateField = (field: ContactFormField) => {
    return (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((current) => ({ ...current, [field]: event.target.value }));
      setErrors((current) => ({ ...current, [field]: undefined }));
    };
  };

  const validateForm = () => {
    const nextErrors: Partial<Record<ContactFormField, string>> = {};

    if (!form.name.trim()) nextErrors.name = "Name is required.";
    if (!emailPattern.test(form.email.trim())) nextErrors.email = "Valid email is required.";
    if (!form.subject.trim()) nextErrors.subject = "Subject is required.";
    if (!form.message.trim()) nextErrors.message = "Message is required.";

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const submitContactForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validateForm()) {
      showToast("Lengkapi form terlebih dahulu");
      return;
    }

    const name = form.name.trim();
    const senderEmail = form.email.trim();
    const subject = form.subject.trim();
    const message = form.message.trim();
    const body = `Halo Ibnu,

${message}

Regards,
${name}
${senderEmail}`;

    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    showToast("Email draft siap dibuka");
    setForm(initialContactForm);
  };

  const fieldClassName = (field: ContactFormField, isFull = false) => {
    return `form-group${isFull ? " full" : ""}${errors[field] ? " has-error" : ""}`;
  };

  return (
    <form className="contact-form-card" onSubmit={submitContactForm} noValidate>
      <h3 className="form-heading">Tell me about your idea</h3>
      <p className="form-description">
        Use this form to prepare an email draft. It will open your email app with the message already filled in.
      </p>

      <div className="contact-form-grid">
        <label className={fieldClassName("name")}>
          <span className="form-label">Your Name</span>
          <input
            className="form-control"
            type="text"
            name="name"
            placeholder="Your full name"
            autoComplete="name"
            value={form.name}
            onChange={updateField("name")}
          />
          <span className="field-error">{errors.name || "Name is required."}</span>
        </label>

        <label className={fieldClassName("email")}>
          <span className="form-label">Email Address</span>
          <input
            className="form-control"
            type="email"
            name="email"
            placeholder="name@example.com"
            autoComplete="email"
            value={form.email}
            onChange={updateField("email")}
          />
          <span className="field-error">{errors.email || "Valid email is required."}</span>
        </label>

        <label className={fieldClassName("subject", true)}>
          <span className="form-label">Subject</span>
          <input
            className="form-control"
            type="text"
            name="subject"
            placeholder="Project collaboration, opportunity, or question"
            value={form.subject}
            onChange={updateField("subject")}
          />
          <span className="field-error">{errors.subject || "Subject is required."}</span>
        </label>

        <label className={fieldClassName("message", true)}>
          <span className="form-label">Message</span>
          <textarea
            className="form-control"
            name="message"
            placeholder="Write your message here..."
            value={form.message}
            onChange={updateField("message")}
          />
          <span className="field-error">{errors.message || "Message is required."}</span>
        </label>
      </div>

      <div className="contact-form-actions">
        <p className="form-note">I usually respond within 24–48 hours.</p>
        <button className="btn btn-primary send-btn" type="submit">
          <span>Send Message</span>
          <SendIcon className="icon" />
        </button>
      </div>
    </form>
  );
}

export function BottomNavigation() {
  const [activeSectionId, setActiveSectionId] = useState("home");

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>("section[id]"));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) {
          setActiveSectionId(visible.target.id);
        }
      },
      { threshold: [0.15, 0.35, 0.55, 0.75] },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="bottom-nav-shell" aria-label="Main navigation">
      <div className="bottom-nav">
        {NAV_ITEMS.map((item) => {
          const isActive = activeSectionId === item.id;
          const className = ["nav-link", item.className, isActive ? "active" : ""].filter(Boolean).join(" ");

          return (
            <a key={item.id} href={item.href} className={className}>
              <span>{item.label}</span>
              <NavIcon kind={item.icon} />
            </a>
          );
        })}
      </div>
    </nav>
  );
}
