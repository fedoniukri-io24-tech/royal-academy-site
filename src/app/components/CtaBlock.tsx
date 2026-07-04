import TimerCard from './TimerCard'
import { formatPrice, getMarathonTariff } from '../site'
import styles from './CtaBlock.module.css'

const supportTariff = getMarathonTariff('support')!
const soloTariff = getMarathonTariff('solo')!

export default function CtaBlock() {
  return (
    <section className={`${styles.section} marathon-glow`}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <p className={styles.price}>
            «З підтримкою»{' '}
            <span className={styles.oldPrice}>{formatPrice(supportTariff.oldPrice)} грн</span>{' '}
            <span className={styles.priceArrow}>→</span>{' '}
            <span className={styles.newPrice}>{formatPrice(supportTariff.price)} грн</span>
          </p>
          <p className={styles.priceSecondary}>
            «Я сама»{' '}
            <span className={styles.oldPrice}>{formatPrice(soloTariff.oldPrice)} грн</span>{' '}
            <span className={styles.priceArrow}>→</span>{' '}
            <span className={styles.newPrice}>{formatPrice(soloTariff.price)} грн</span>
          </p>
          <p className={styles.note}>Місця обмежені. Акція діє до кінця дня</p>
        </div>
        <TimerCard />
      </div>
    </section>
  )
}
