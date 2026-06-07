import type { Metadata } from "next";
import ExperienceDetailsPage from "@/components/experience-details/experience-details-page";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Pengalaman",
  description: "Detail pengalaman kerja, internship, dan riset Fadhlu Ibnu sebagai Backend Developer & FullStack Engineer.",
  alternates: { canonical: "/experience-details" },
  openGraph: {
    title: "Pengalaman — Fadhlu Ibnu",
    description: "Detail pengalaman kerja dan proyek Fadhlu Ibnu.",
    url: "https://fadhluibnu.my.id/experience-details",
  },
};

export default function ExperienceDetailsRoute() {
  return (
    <>
      <BreadcrumbJsonLd />
      <ExperienceDetailsPage />
    </>
  );
}
