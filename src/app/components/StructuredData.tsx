import {
  MARATHON_TARIFFS,
  SITE_EMAIL,
  SITE_HERO_IMAGE,
  SITE_LOGO,
  SITE_NAME,
  SITE_PHONE,
  SITE_URL,
  TELEGRAM_BOT_URL,
} from '../site'
import { BEGINNER_LANDING, getLandingCanonical, type MarathonLandingConfig } from '../landings'

function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

type Props = {
  landing?: MarathonLandingConfig
}

export default function StructuredData({ landing = BEGINNER_LANDING }: Props) {
  const canonical = getLandingCanonical(landing)
  const offersUrl = `${canonical}#tarify`

  const organization = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}${SITE_LOGO}`,
    image: `${SITE_URL}${SITE_HERO_IMAGE}`,
    email: SITE_EMAIL,
    telephone: SITE_PHONE,
    description: landing.description,
    sameAs: [TELEGRAM_BOT_URL],
  }

  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
    inLanguage: 'uk-UA',
    description: landing.description,
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      logo: `${SITE_URL}${SITE_LOGO}`,
    },
  }

  const course = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: `10-тижневий марафон англійської (${landing.levelLabel})`,
    description: landing.description,
    provider: {
      '@type': 'EducationalOrganization',
      name: SITE_NAME,
      url: SITE_URL,
    },
    educationalLevel: landing.educationalLevel,
    inLanguage: 'uk',
    offers: MARATHON_TARIFFS.map((tariff) => ({
      '@type': 'Offer',
      name: `Тариф «${tariff.name}»`,
      price: String(tariff.price),
      priceCurrency: 'UAH',
      availability: 'https://schema.org/InStock',
      url: offersUrl,
    })),
    hasCourseInstance: {
      '@type': 'CourseInstance',
      courseMode: 'online',
      courseWorkload: 'PT1H',
    },
  }

  const webPage = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: landing.title,
    description: landing.description,
    url: canonical,
    inLanguage: 'uk-UA',
    isPartOf: { '@id': `${SITE_URL}#website` },
    about: {
      '@type': 'Thing',
      name: `Марафон англійської мови ${landing.levelLabel}`,
    },
    primaryImageOfPage: `${SITE_URL}${SITE_HERO_IMAGE}`,
  }

  const faqPage = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: landing.faq.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  }

  return (
    <>
      <JsonLd data={{ ...website, '@id': `${SITE_URL}#website` }} />
      <JsonLd data={organization} />
      <JsonLd data={course} />
      <JsonLd data={webPage} />
      <JsonLd data={faqPage} />
    </>
  )
}
