import TimerCard from './TimerCard'
import { formatPriceUAH, MARATHON_TARIFFS } from '../site'
import styles from './CtaBlock.module.css'

const displayTariffs = [...MARATHON_TARIFFS].sort(
  (a, b) => Number(b.featured) - Number(a.featured),
)

export default function CtaBlock() {
  return (
    <section className={`${styles.section} marathon-glow`}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <div className={styles.priceList}>
            {displayTariffs.map((tariff) => (
              <p key={tariff.id} className={styles.price}>
                <span className={styles.tariffName}>«{tariff.name}»</span>{' '}
                <span className={styles.oldPrice}>{formatPriceUAH(tariff.oldPrice)}</span>{' '}
                <span className={styles.priceArrow} aria-hidden="true">→</span>{' '}
                <span className={styles.newPrice}>{formatPriceUAH(tariff.price)}</span>
              </p>
            ))}
          </div>
          <p className={styles.note}>Місця обмежені. Акція діє до кінця дня</p>
        </div>
        <TimerCard />
      </div>
    </section>
  )
}
