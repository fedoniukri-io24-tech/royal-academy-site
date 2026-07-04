'use client'
import useCountdown from '../hooks/useCountdown'
import {
  formatPriceUAH,
  getMarathonDiscountPercent,
  getMarathonTariff,
  MARATHON_DEFAULT_TARIFF_ID,
} from '../site'
import PaymentButton from './PaymentButton'
import styles from './TimerCard.module.css'

const featuredTariff = getMarathonTariff(MARATHON_DEFAULT_TARIFF_ID)!

export default function TimerCard({ className = '' }: { className?: string }) {
  const time = useCountdown()
  const discount = getMarathonDiscountPercent(featuredTariff)

  return (
    <PaymentButton
      className={`${styles.card} ${className}`}
      aria-label={`Оформити доступ за ${featuredTariff.price} грн замість ${featuredTariff.oldPrice} грн`}
    >
      <div className={styles.cardText}>
        <p className={styles.timer}>
          <b>{time.h}</b><span>г</span>
          <b>{time.m}</b><span>хв</span>
          <b>{time.s}</b><span>с</span>
        </p>
        <p className={styles.cardPrice}>
          <span className={styles.cardOldPrice}>{formatPriceUAH(featuredTariff.oldPrice)}</span>
          <span className={styles.cardArrowSign} aria-hidden="true">→</span>
          <span className={styles.cardNewPrice}>{formatPriceUAH(featuredTariff.price)}</span>
        </p>
        <p className={styles.cardLabel}>Оформити доступ · знижка {discount}%</p>
      </div>
      <div className={styles.cardArrow}>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M2 14 L14 2 M6 2 H14 V10" />
        </svg>
      </div>
    </PaymentButton>
  )
}
