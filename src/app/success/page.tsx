import Link from 'next/link'
import { SITE_NAME, TELEGRAM_BOT_URL } from '../site'
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
            Дякуємо! Ви приєдналися до 10-тижневого марафону англійської в {SITE_NAME}.
          </p>

          {reference && (
            <p className={styles.ref}>Номер замовлення: <span>{reference}</span></p>
          )}

          <div className={styles.emailAlert} role="status">
            <span className={styles.emailAlertIcon} aria-hidden="true">✉️</span>
            <div className={styles.emailAlertBody}>
              <p className={styles.emailAlertTitle}>Перевірте свою електронну пошту</p>
              <p className={styles.emailAlertText}>
                На email, який ви вказали під час оплати, надійде лист від платформи{' '}
                <strong>Edio</strong> із запрошенням і доступом до занять.
              </p>
              <p className={styles.emailAlertHint}>
                Якщо листа немає у «Вхідні» — перегляньте «Спам» або «Промоакції».
              </p>
            </div>
          </div>

          <div className={styles.steps}>
            <p className={styles.stepsTitle}>Що робити далі</p>
            <ol>
              <li>
                <strong>Відкрийте лист від Edio</strong>
                <span>і перейдіть за посиланням у ньому, щоб увійти на платформу з уроками</span>
              </li>
              <li>
                <strong>За потреби зайдіть у Telegram-бот</strong>
                <span>для додаткових матеріалів і підтримки</span>
              </li>
            </ol>
          </div>

          <a
            href={TELEGRAM_BOT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.telegramBtn}
          >
            Відкрити Telegram-бот
            <svg width="18" height="18" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M2 14 L14 2 M6 2 H14 V10" />
            </svg>
          </a>

          <p className={styles.note}>
            Головний доступ до уроків — у листі на пошту. Telegram-бот — додатковий канал.
          </p>

          <Link href="/" className={styles.homeLink}>
            Повернутись на головну
          </Link>
        </div>
      </main>
    </div>
  )
}
