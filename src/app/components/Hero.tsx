'use client'
import Image from 'next/image'
import { MARATHON_PRICE, MARATHON_PRICE_FROM, SITE_HERO_IMAGE, SITE_NAME } from '../site'
import MarathonStats from './MarathonStats'
import TimerCard from './TimerCard'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero} data-hero aria-label="Головний банер марафону">
      <div className={styles.bg}>
        <Image
          src={SITE_HERO_IMAGE}
          alt={`Марафон англійської ${SITE_NAME}: почни говорити вже за 10 занять`}
          fill
          priority
          sizes="100vw"
          className={styles.bgImage}
        />
      </div>
      <div className={styles.overlay} />

      <div className={styles.body}>
        <div className={styles.textBlock}>
          <h1 className={styles.headline}>
            Почни говорити <em>англійською</em>{' '}
            <span className={styles.highlight}>вже за 10 занять</span>
          </h1>

          <MarathonStats variant="dark" className={styles.durationStats} />

          <p className={styles.prizeBlock}>
            <span className={styles.prizeLabel}>
              <span className={styles.prizeLabelDesktop}>Покращуй й вигравай</span>
              <span className={styles.prizeLabelMobile}>Вигравай</span>
            </span>
            <span className={styles.prizeAmount}>10 000 грн</span>
          </p>
        </div>

        <div className={styles.bottomRow}>
          <div className={styles.priceBlock}>
            <p className={styles.priceLead}>Приєднуйся до марафону вже зараз</p>
            <p className={styles.priceRow}>
              <span className={styles.pricePrefix}>тариф «З підтримкою»</span>
              <span className={styles.newPrice}>{MARATHON_PRICE} грн</span>
              <span className={styles.priceInstead}>або від</span>
              <span className={styles.oldPrice}>{MARATHON_PRICE_FROM} грн</span>
            </p>
            <span className={styles.discountBadge}>🔥 Найпопулярніший тариф</span>
          </div>
          <TimerCard />
        </div>
      </div>
    </section>
  )
}
