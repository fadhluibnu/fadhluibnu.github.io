import type { Metadata } from 'next'
import { siteConfig } from '@/lib/site-config'
import { JsonLd } from '@/components/seo/json-ld'
import { PageTransition } from '@/components/animation/page-transition'
import ExperienceDetailsPage from "@/components/experience-details/experience-details-page";

const pageTitle = "Experience Details"
const pageDescription =
  "Explore Fadhlu Ibnu 'Abbad's professional experience, including backend development, AI development, research projects, internships, system analysis, and web application contributions."
const pagePath = '/experience-details'
const pageUrl = `${siteConfig.url}${pagePath}`
const pageOgImage = '/og/fadhlu-ibnu-experience-details.png'

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: pagePath,
  },
  openGraph: {
    title: `${pageTitle} — ${siteConfig.shortName}`,
    description: pageDescription,
    url: pagePath,
    type: 'profile',
    images: [
      {
        url: pageOgImage,
        width: 1200,
        height: 630,
        alt: "Fadhlu Ibnu 'Abbad experience timeline preview",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${pageTitle} — ${siteConfig.shortName}`,
    description: pageDescription,
    images: [pageOgImage],
  },
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: siteConfig.url,
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Experience Details',
      item: pageUrl,
    },
  ],
}

const webPageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  '@id': `${pageUrl}#webpage`,
  url: pageUrl,
  name: `${pageTitle} — ${siteConfig.shortName}`,
  description: pageDescription,
  inLanguage: siteConfig.language,
  isPartOf: {
    '@id': `${siteConfig.url}/#website`,
  },
  about: {
    '@id': `${siteConfig.url}/#person`,
  },
}

export default function ExperienceDetailsRoute() {
  return (
    <PageTransition>
      <JsonLd data={[breadcrumbJsonLd, webPageJsonLd]} />
      <ExperienceDetailsPage />
    </PageTransition>
  );
}
