'use client'
import Image from 'next/image'
import {
  formatPriceUAH,
  getMarathonDiscountPercent,
  getMarathonTariff,
  MARATHON_DEFAULT_TARIFF_ID,
  MARATHON_TARIFFS,
  SITE_HERO_IMAGE,
  SITE_NAME,
} from '../site'
import TimerCard from './TimerCard'
import styles from './Hero.module.css'

const featuredTariff = getMarathonTariff(MARATHON_DEFAULT_TARIFF_ID)!
const displayTariffs = [...MARATHON_TARIFFS].sort(
  (a, b) => Number(b.featured) - Number(a.featured),
)

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
            <div className={styles.priceRows}>
              {displayTariffs.map((tariff) => (
                <p key={tariff.id} className={styles.priceRow}>
                  <span className={styles.priceTariffName}>«{tariff.name}»</span>
                  <span className={styles.oldPrice}>{formatPriceUAH(tariff.oldPrice)}</span>
                  <span className={styles.priceInstead}>→</span>
                  <span className={styles.newPrice}>{formatPriceUAH(tariff.price)}</span>
                </p>
              ))}
            </div>
            <span className={styles.discountBadge}>
              Знижка {getMarathonDiscountPercent(featuredTariff)}%
            </span>
          </div>
          <TimerCard />
        </div>
      </div>
    </section>
  )
}
