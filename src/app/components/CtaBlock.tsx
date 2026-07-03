import TimerCard from './TimerCard'
import { MARATHON_PRICE, MARATHON_PRICE_FROM } from '../site'
import styles from './CtaBlock.module.css'

export default function CtaBlock() {
  return (
    <section className={`${styles.section} marathon-glow`}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <p className={styles.price}>
            Тариф «З підтримкою» — <span className={styles.newPrice}>{MARATHON_PRICE} грн</span>{' '}
            <span className={styles.oldPrice}>або від {MARATHON_PRICE_FROM} грн</span>
          </p>
          <p className={styles.note}>Місця обмежені. Акція діє до кінця дня</p>
        </div>
        <TimerCard />
      </div>
    </section>
  )
}
