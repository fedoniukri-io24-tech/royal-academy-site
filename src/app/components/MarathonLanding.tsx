import Navbar from './Navbar'
import Hero from './Hero'
import MarathonSections from './MarathonSections'
import ContactSection from './ContactSection'
import Footer from './Footer'
import FloatingCta from './FloatingCta'
import { PaymentProvider } from './PaymentProvider'
import StructuredData from './StructuredData'
import type { MarathonLandingConfig } from '../landings'
import { getLandingNav } from '../landings'

type Props = {
  landing: MarathonLandingConfig
}

export default function MarathonLanding({ landing }: Props) {
  const nav = getLandingNav(landing)

  return (
    <PaymentProvider>
      <div className="marathon-page">
        <StructuredData landing={landing} />
        <Navbar transparent navItems={[...nav]} />
        <main>
          <Hero landing={landing} />
          <MarathonSections landing={landing} />
          <ContactSection />
        </main>
        <Footer navItems={[...nav]} durationStats={landing.durationStats} />
        <FloatingCta />
      </div>
    </PaymentProvider>
  )
}
