'use client'
import { useState, useEffect } from 'react'
import BrandLogo from './BrandLogo'
import PaymentButton from './PaymentButton'
import { SITE_NAV } from '../site'
import styles from './Navbar.module.css'

type NavItem = { href: string; label: string }

export default function Navbar({
  transparent = false,
  navItems = SITE_NAV as unknown as NavItem[],
}: {
  transparent?: boolean
  navItems?: NavItem[]
}) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const isLightHeader = transparent && !scrolled

  return (
    <>
      <nav className={`${styles.nav} ${isLightHeader ? styles.transparent : styles.solid}`} aria-label="Головна навігація">
        <BrandLogo className={styles.brand} variant={isLightHeader ? 'light' : 'dark'} />

        <div className={styles.center}>
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>{item.label}</a>
          ))}
        </div>

        <div className={styles.right}>
          <PaymentButton className={styles.cta} aria-label="Оформити доступ">
            Оформити доступ
            <svg width="13" height="13" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M2 12 L12 2 M5 2 H12 V9"/>
            </svg>
          </PaymentButton>
        </div>

        <button className={styles.hamburger} onClick={() => setMenuOpen(true)} aria-label="Відкрити меню">
          <span/><span/><span/>
        </button>
      </nav>

      <div className={`${styles.drawer} ${menuOpen ? styles.open : ''}`} role="dialog" aria-modal="true" aria-label="Мобільне меню">
        <button className={styles.drawerClose} onClick={() => setMenuOpen(false)} aria-label="Закрити">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round">
            <path d="M4 4 L24 24 M24 4 L4 24"/>
          </svg>
        </button>
        <BrandLogo href={undefined} size="sm" className={styles.drawerBrand} />
        {navItems.map((item) => (
          <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}</a>
        ))}
        <PaymentButton className={styles.drawerCta} onBeforeOpen={() => setMenuOpen(false)} aria-label="Оформити доступ">
          Оформити доступ
        </PaymentButton>
      </div>
    </>
  )
}
