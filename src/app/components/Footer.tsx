import Link from 'next/link'
import BrandLogo from './BrandLogo'
import PaymentButton from './PaymentButton'
import { MARATHON_DURATION_STATS, PRIVACY_POLICY_PATH, SITE_EMAIL, SITE_NAME, SITE_NAV, SITE_PHONE, SITE_PHONE_DISPLAY, TELEBOTS_URL } from '../site'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer} data-footer>
      <div className={styles.top}>
        <div className={styles.cols}>
          <div className={styles.col}>
            <h3>Формат</h3>
            <p>{MARATHON_DURATION_STATS.join(' · ')}</p>
            <PaymentButton className={styles.inlineLink} aria-label="Оформити доступ">
              Оформити доступ →
            </PaymentButton>
          </div>

          <div className={styles.col}>
            <h3>Контакт</h3>
            <p>Онлайн-формат</p>
            <a href={`tel:${SITE_PHONE}`} className={styles.inlineLink}>{SITE_PHONE_DISPLAY}</a>
            <a href={`mailto:${SITE_EMAIL}`} className={styles.inlineLink}>{SITE_EMAIL}</a>
          </div>
        </div>
      </div>

      <div className={styles.wordmark}>
        <BrandLogo href="/" size="lg" variant="dark" />
      </div>

      <nav className={styles.links} aria-label="Навігація в підвалі">
        {SITE_NAV.map((item) => (
          <a key={item.href} href={item.href}>{item.label}</a>
        ))}
        <Link href={PRIVACY_POLICY_PATH}>Політика конфіденційності</Link>
      </nav>

      <div className={styles.creditWrap}>
        <a
          href={TELEBOTS_URL}
          className={styles.creditBadge}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Сайт розроблено TeleBots — відкрити telebots.site"
        >
          <span className={styles.creditLabel}>Розроблено</span>
          <span className={styles.creditBrand}>TeleBots</span>
          <svg className={styles.creditIcon} width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M6 3h7v7" />
            <path d="M13 3L6 10" />
            <path d="M3 6v7h7" />
          </svg>
        </a>
      </div>

      <div className={styles.bottom}>
        <span>© {new Date().getFullYear()} {SITE_NAME}. Усі права захищені.</span>
      </div>
    </footer>
  )
}
