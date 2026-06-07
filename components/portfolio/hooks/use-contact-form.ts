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
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleContactSubmit: ContactSubmitHandler = async (event) => {
    event.preventDefault();

    const formElement = event.currentTarget as HTMLFormElement;
    const honey = (formElement.elements.namedItem('_honey') as HTMLInputElement)?.value;
    if (honey) return;

    if (!validateContactForm()) {
      showToast("Lengkapi form terlebih dahulu");
      return;
    }

    setIsSubmitting(true);
    showToast("Mengirim pesan...");

    const formData = new FormData();
    formData.append("Name", contactForm.name.trim());
    formData.append("Email", contactForm.email.trim());
    formData.append("Subject", contactForm.subject.trim());
    formData.append("Message", contactForm.message.trim());

    try {
      const url = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL;
      if (!url) throw new Error("URL webhook tidak ditemukan");

      const res = await fetch(url, {
        method: "POST",
        body: formData,
      });
      const data = await res.json();

      if (data.result === "success") {
        showToast("Pesan berhasil dikirim!");
        setContactForm(initialContactForm);
        setContactErrors({});
      } else {
        showToast("Gagal: " + (data.message || "Unknown error"));
      }
    } catch (error: any) {
      showToast("Error jaringan: " + error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return { contactForm, contactErrors, isSubmitting, handleContactInputChange, handleContactSubmit };
}
