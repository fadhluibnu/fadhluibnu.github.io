import PortfolioHomePage from "@/components/portfolio/portfolio-home-page";
import type { Metadata } from 'next'
import { siteConfig } from '@/lib/site-config'
import { JsonLd } from '@/components/seo/json-ld'
import { PageTransition } from '@/components/animation/page-transition'

export const metadata: Metadata = {
  title: "Fadhlu Ibnu - Backend Developer, AI Developer & Software Engineer",
  description: siteConfig.description,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: '/',
    type: 'website',
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Fadhlu Ibnu 'Abbad portfolio preview",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
}

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': `${siteConfig.url}/#person`,
  name: siteConfig.name,
  alternateName: siteConfig.shortName,
  url: siteConfig.url,
  email: `mailto:${siteConfig.email}`,
  image: `${siteConfig.url}/images/fadhlu-ibnu-abbad-profile-photo.webp`,
  jobTitle: ['Backend Developer', 'AI Developer', 'Software Engineer'],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Semarang',
    addressCountry: 'ID',
  },
  sameAs: [siteConfig.links.github, siteConfig.links.linkedin],
  knowsAbout: [
    'Backend Development',
    'System Architecture',
    'Artificial Intelligence',
    'Retrieval-Augmented Generation',
    'Web Application Development',
    'Node.js',
    'Laravel',
    'React',
    'Next.js',
  ],
}

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${siteConfig.url}/#website`,
  url: siteConfig.url,
  name: siteConfig.shortName,
  description: siteConfig.description,
  inLanguage: siteConfig.language,
  publisher: {
    '@id': `${siteConfig.url}/#person`,
  },
}

export default function Home() {
  return (
    <PageTransition>
      <JsonLd data={[personJsonLd, websiteJsonLd]} />
      <PortfolioHomePage />
    </PageTransition>
  );
}
