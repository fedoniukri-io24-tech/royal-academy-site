'use client'

import { useEffect, useState } from 'react'
import { formatPrice, getMarathonTariff } from '../site'
import PaymentButton from './PaymentButton'
import styles from './FloatingCta.module.css'

const supportTariff = getMarathonTariff('support')!

export default function FloatingCta() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const hero = document.querySelector('[data-hero]')
    const footer = document.querySelector('[data-footer]')

    let heroInView = Boolean(hero)
    let footerInView = false

    const updateVisibility = () => {
      setVisible(!heroInView && !footerInView)
    }

    const observers: IntersectionObserver[] = []

    if (hero) {
      const heroObserver = new IntersectionObserver(
        ([entry]) => {
          heroInView = entry.isIntersecting
          updateVisibility()
        },
        { threshold: 0.12 },
      )
      heroObserver.observe(hero)
      observers.push(heroObserver)
    }

    if (footer) {
      const footerObserver = new IntersectionObserver(
        ([entry]) => {
          footerInView = entry.isIntersecting
          updateVisibility()
        },
        { threshold: 0.05, rootMargin: '0px 0px -40px 0px' },
      )
      footerObserver.observe(footer)
      observers.push(footerObserver)
    }

    if (!hero) {
      updateVisibility()
    }

    return () => observers.forEach((observer) => observer.disconnect())
  }, [])

  return (
    <PaymentButton
      className={`${styles.fab} ${visible ? styles.visible : ''}`}
      aria-label="Приєднатися до марафону"
      disabled={!visible}
    >
      <span className={styles.label}>Приєднатися</span>
      <span className={styles.discount}>
        {formatPrice(supportTariff.oldPrice)} → {formatPrice(supportTariff.price)}
      </span>
      <svg className={styles.arrow} width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M2 14 L14 2 M6 2 H14 V10" />
      </svg>
    </PaymentButton>
  )
}
