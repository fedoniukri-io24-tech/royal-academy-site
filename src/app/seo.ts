import type { Metadata } from 'next'
import {
  MARATHON_PRICE_FROM,
  SITE_DESCRIPTION,
  SITE_HERO_IMAGE,
  SITE_KEYWORDS,
  SITE_LOGO,
  SITE_NAME,
  SITE_TITLE,
  SITE_URL,
} from './site'

const ogImage = {
  url: SITE_HERO_IMAGE,
  width: 1200,
  height: 630,
  alt: `Марафон англійської ${SITE_NAME}`,
}

export const rootMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [...SITE_KEYWORDS],
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: 'education',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
    languages: {
      'uk-UA': '/',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'uk_UA',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [ogImage],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [SITE_HERO_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: SITE_LOGO,
    apple: SITE_LOGO,
  },
  other: {
    'product:price:amount': String(MARATHON_PRICE_FROM),
    'product:price:currency': 'UAH',
  },
}
