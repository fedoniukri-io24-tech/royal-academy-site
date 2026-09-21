import type { Metadata } from 'next'
import MarathonLanding from './components/MarathonLanding'
import { BEGINNER_LANDING, getLandingCanonical } from './landings'

export const metadata: Metadata = {
  title: BEGINNER_LANDING.title,
  description: BEGINNER_LANDING.description,
  keywords: [...BEGINNER_LANDING.keywords],
  alternates: { canonical: getLandingCanonical(BEGINNER_LANDING) },
}

export default function Home() {
  return <MarathonLanding landing={BEGINNER_LANDING} />
}
