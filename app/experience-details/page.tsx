import type { Metadata } from "next";
import ExperienceDetailsPage from "@/components/experience-details/experience-details-page";

export const metadata: Metadata = {
  title: "Experience Details — Fadhlu Ibnu",
  description:
    "Detailed timeline of Fadhlu Ibnu's professional journey, internships, academic contributions, and organizational experience.",
};

export default function ExperienceDetailsRoute() {
  return <ExperienceDetailsPage />;
}
