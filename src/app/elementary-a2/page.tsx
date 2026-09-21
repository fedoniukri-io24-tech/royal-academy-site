import type { Metadata } from 'next'
import MarathonLanding from '../components/MarathonLanding'
import { ELEMENTARY_LANDING, getLandingCanonical } from '../landings'

export const metadata: Metadata = {
  title: ELEMENTARY_LANDING.title,
  description: ELEMENTARY_LANDING.description,
  keywords: [...ELEMENTARY_LANDING.keywords],
  alternates: { canonical: getLandingCanonical(ELEMENTARY_LANDING) },
}

export default function ElementaryA2Page() {
  return <MarathonLanding landing={ELEMENTARY_LANDING} />
}
