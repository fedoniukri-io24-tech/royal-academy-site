'use client'
import Image from 'next/image'
import { getMarathonTariff, formatPrice, MARATHON_LEVEL_LABEL, SITE_HERO_IMAGE, SITE_NAME } from '../site'
import TimerCard from './TimerCard'
import styles from './Hero.module.css'

const supportTariff = getMarathonTariff('support')!
const soloTariff = getMarathonTariff('solo')!

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
          <p className={styles.levelBadge}>
            <span>{MARATHON_LEVEL_LABEL}</span>
            <span className={styles.levelSep} aria-hidden="true">·</span>
            <span>Базові теми для початківців</span>
          </p>
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
            <span className={styles.discountBadge}>🔥 Найпопулярніший тариф</span>
            <p className={styles.priceLead}>Приєднуйся до марафону вже зараз</p>
            <p className={styles.priceRow}>
              <span className={styles.pricePrefix}>«З підтримкою»</span>
              <span className={styles.oldPrice}>{formatPrice(supportTariff.oldPrice)} грн</span>
              <span className={styles.priceInstead}>→</span>
              <span className={styles.newPrice}>{formatPrice(supportTariff.price)} грн</span>
            </p>
            <p className={styles.priceRow}>
              <span className={styles.pricePrefix}>«Я сама»</span>
              <span className={styles.oldPrice}>{formatPrice(soloTariff.oldPrice)} грн</span>
              <span className={styles.priceInstead}>→</span>
              <span className={styles.newPrice}>{formatPrice(soloTariff.price)} грн</span>
            </p>
          </div>
          <TimerCard />
        </div>
      </div>
    </section>
  )
}
