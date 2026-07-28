import Link from 'next/link'
import { MARATHON_INCLUDES, SITE_NAME, TELEGRAM_BOT_URL } from '../site'
import styles from './success.module.css'

type Props = {
  searchParams: { ref?: string }
}

export default function SuccessPage({ searchParams }: Props) {
  const reference = searchParams.ref

  return (
    <div className={`marathon-page ${styles.page}`}>
      <main className={styles.main}>
        <div className={styles.card}>
          <div className={styles.icon} aria-hidden="true">✓</div>
          <h1 className={styles.title}>Оплата успішна!</h1>
          <p className={styles.lead}>
            Дякуємо! Ви отримали доступ до 10-тижневого марафону англійської в {SITE_NAME}.
          </p>

          {reference && (
            <p className={styles.ref}>Номер замовлення: <span>{reference}</span></p>
          )}

          <div className={styles.includes}>
            <p className={styles.includesTitle}>Що далі:</p>
            <ul>
              <li>Перевірте email — туди надійде запрошення від платформи Edio з доступом до занять</li>
              {MARATHON_INCLUDES.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <a
            href={TELEGRAM_BOT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.telegramBtn}
          >
            Перейти в Telegram-бот
            <svg width="18" height="18" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M2 14 L14 2 M6 2 H14 V10" />
            </svg>
          </a>

          <p className={styles.note}>
            Заняття будуть на платформі Edio (лист на пошту). Також можете перейти в Telegram-бот за кнопкою вище.
          </p>

          <Link href="/" className={styles.homeLink}>
            Повернутись на головну
          </Link>
        </div>
      </main>
    </div>
  )
}
