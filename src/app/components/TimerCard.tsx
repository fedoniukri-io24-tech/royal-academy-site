'use client'
import useCountdown from '../hooks/useCountdown'
import { formatPrice, getMarathonTariff } from '../site'
import PaymentButton from './PaymentButton'
import styles from './TimerCard.module.css'

const supportTariff = getMarathonTariff('support')!

export default function TimerCard({ className = '' }: { className?: string }) {
  const time = useCountdown()

  return (
    <PaymentButton
      className={`${styles.card} ${className}`}
      aria-label={`Оформити доступ: ${formatPrice(supportTariff.oldPrice)} грн замість ${formatPrice(supportTariff.price)} грн`}
    >
      <div className={styles.cardText}>
        <p className={styles.timer}>
          <b>{time.h}</b><span>г</span>
          <b>{time.m}</b><span>хв</span>
          <b>{time.s}</b><span>с</span>
        </p>
        <p className={styles.cardLabel}>
          <span className={styles.cardOldPrice}>{formatPrice(supportTariff.oldPrice)} грн</span>
          <span className={styles.cardArrowPrice} aria-hidden="true">→</span>
          <span className={styles.cardNewPrice}>{formatPrice(supportTariff.price)} грн</span>
        </p>
      </div>
      <div className={styles.cardArrow}>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M2 14 L14 2 M6 2 H14 V10" />
        </svg>
      </div>
    </PaymentButton>
  )
}
