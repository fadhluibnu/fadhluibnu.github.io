"use client";

import { useState } from "react";
import { initialContactForm } from "../portfolio.data";
import type {
  ContactFormErrors,
  ContactFormState,
  ContactInputChangeHandler,
  ContactSubmitHandler,
} from "../portfolio.types";

export function useContactForm(recipientEmail: string, showToast: (message?: string) => void) {
  const [contactForm, setContactForm] = useState<ContactFormState>(initialContactForm);
  const [contactErrors, setContactErrors] = useState<ContactFormErrors>({});

  const handleContactInputChange: ContactInputChangeHandler = (event) => {
    const fieldName = event.target.name as keyof ContactFormState;
    const { value } = event.target;

    setContactForm((currentForm) => ({ ...currentForm, [fieldName]: value }));

    if (contactErrors[fieldName]) {
      setContactErrors((currentErrors) => ({ ...currentErrors, [fieldName]: undefined }));
    }
  };

  const validateContactForm = () => {
    const nextErrors: ContactFormErrors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!contactForm.name.trim()) nextErrors.name = "Name is required.";
    if (!emailPattern.test(contactForm.email.trim())) nextErrors.email = "Valid email is required.";
    if (!contactForm.subject.trim()) nextErrors.subject = "Subject is required.";
    if (!contactForm.message.trim()) nextErrors.message = "Message is required.";

    setContactErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleContactSubmit: ContactSubmitHandler = (event) => {
    event.preventDefault();

    if (!validateContactForm()) {
      showToast("Lengkapi form terlebih dahulu");
      return;
    }

    const name = contactForm.name.trim();
    const senderEmail = contactForm.email.trim();
    const subject = contactForm.subject.trim();
    const message = contactForm.message.trim();
    const body = `Halo Ibnu,\n\n${message}\n\nRegards,\n${name}\n${senderEmail}`;

    window.location.href = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    showToast("Email draft siap dibuka");
    setContactForm(initialContactForm);
    setContactErrors({});
  };

  return { contactForm, contactErrors, handleContactInputChange, handleContactSubmit };
}
