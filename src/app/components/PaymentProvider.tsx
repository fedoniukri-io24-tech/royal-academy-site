'use client'

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react'
import {
  getMarathonTariff,
  MARATHON_DEFAULT_TARIFF_ID,
  MARATHON_TARIFFS,
} from '../site'
import ConsentLabel from './ConsentLabel'
import { startPayment } from '@/lib/startPayment'
import styles from './PaymentModal.module.css'

type PaymentFormState = {
  name: string
  email: string
  contact: string
  consent: boolean
}

type PaymentContextValue = {
  openPaymentModal: (tariffId?: string) => void
}

const PaymentContext = createContext<PaymentContextValue | null>(null)

const emptyForm = (): PaymentFormState => ({
  name: '',
  email: '',
  contact: '',
  consent: false,
})

export function PaymentProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false)
  const [selectedTariffId, setSelectedTariffId] = useState(MARATHON_DEFAULT_TARIFF_ID)
  const [form, setForm] = useState<PaymentFormState>(emptyForm)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const selectedTariff =
    getMarathonTariff(selectedTariffId) ?? getMarathonTariff(MARATHON_DEFAULT_TARIFF_ID)!

  const close = useCallback(() => {
    if (loading) return
    setOpen(false)
    setError('')
    setForm(emptyForm())
  }, [loading])

  const openPaymentModal = useCallback((tariffId?: string) => {
    setError('')
    setForm(emptyForm())
    setSelectedTariffId(tariffId ?? MARATHON_DEFAULT_TARIFF_ID)
    setOpen(true)
  }, [])

  useEffect(() => {
    if (!open) return

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [open, close])

  const setField = (key: keyof PaymentFormState) => (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
    setForm((prev) => ({ ...prev, [key]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const name = form.name.trim()
    const email = form.email.trim().toLowerCase()
    const contact = form.contact.trim()

    if (!name) {
      setError('Вкажіть ім\'я')
      return
    }

    if (!email || !email.includes('@') || !email.includes('.')) {
      setError('Вкажіть коректний email')
      return
    }

    if (!contact) {
      setError('Вкажіть телефон або Telegram')
      return
    }

    if (!form.consent) return

    setLoading(true)
    setError('')

    try {
      await startPayment({ name, email, contact, tariffId: selectedTariff.id })
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Сталася помилка. Спробуйте ще раз.')
      setLoading(false)
    }
  }

  return (
    <PaymentContext.Provider value={{ openPaymentModal }}>
      {children}

      {open && (
        <div
          className={styles.overlay}
          role="presentation"
          onClick={close}
        >
          <div
            className={styles.dialog}
            role="dialog"
            aria-modal="true"
            aria-labelledby="payment-modal-title"
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles.header}>
              <div>
                <h2 id="payment-modal-title" className={styles.title}>
                  Оформлення доступу
                </h2>
                <p className={styles.subtitle}>
                  Тариф «{selectedTariff.name}» — {selectedTariff.price} грн. Після оплати доступ до курсу надішлемо на email.
                </p>
              </div>
              <button type="button" className={styles.close} onClick={close} aria-label="Закрити">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
                  <path d="M4 4 L14 14 M14 4 L4 14" />
                </svg>
              </button>
            </div>

            <form className={styles.form} onSubmit={handleSubmit} noValidate>
              <div className={styles.tariffPicker} role="radiogroup" aria-label="Оберіть тариф">
                {MARATHON_TARIFFS.map((tariff) => (
                  <label
                    key={tariff.id}
                    className={`${styles.tariffOption} ${tariff.featured ? styles.tariffOptionFeatured : ''} ${selectedTariffId === tariff.id ? styles.tariffOptionActive : ''}`}
                  >
                    <input
                      type="radio"
                      name="tariff"
                      value={tariff.id}
                      checked={selectedTariffId === tariff.id}
                      onChange={() => setSelectedTariffId(tariff.id)}
                    />
                    {tariff.badge && (
                      <span className={styles.tariffOptionBadge}>{tariff.badge}</span>
                    )}
                    <span className={styles.tariffOptionName}>{tariff.name}</span>
                    <span className={styles.tariffOptionPrice}>{tariff.price} грн</span>
                  </label>
                ))}
              </div>

              <div className={styles.field}>
                <label htmlFor="payment-name">Ім&apos;я</label>
                <input
                  id="payment-name"
                  type="text"
                  placeholder="Введіть ім'я"
                  value={form.name}
                  onChange={setField('name')}
                  required
                  autoFocus
                />
              </div>

              <div className={styles.field}>
                <label htmlFor="payment-email">Email</label>
                <input
                  id="payment-email"
                  type="email"
                  placeholder="name@example.com"
                  value={form.email}
                  onChange={setField('email')}
                  required
                  autoComplete="email"
                />
                <p className={styles.hint}>
                  На цю адресу надійде запрошення до курсу на платформі Edio
                </p>
              </div>

              <div className={styles.field}>
                <label htmlFor="payment-contact">Телефон або Telegram</label>
                <input
                  id="payment-contact"
                  type="text"
                  placeholder="+380... або @username"
                  value={form.contact}
                  onChange={setField('contact')}
                  required
                  autoComplete="tel username"
                />
              </div>

              <label className={styles.consent}>
                <input
                  type="checkbox"
                  checked={form.consent}
                  onChange={setField('consent')}
                  required
                />
                <span><ConsentLabel /></span>
              </label>

              {error && <p className={styles.error}>{error}</p>}

              <button type="submit" className={styles.submit} disabled={!form.consent || loading}>
                {loading ? (
                  'Перенаправлення на оплату…'
                ) : (
                  <>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <rect x="2" y="5" width="20" height="14" rx="2" />
                      <path d="M2 10h20" />
                      <path d="M6 15h4" />
                    </svg>
                    Перейти до оплати {selectedTariff.price} грн
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      )}
    </PaymentContext.Provider>
  )
}

export function usePaymentModal(): PaymentContextValue {
  const context = useContext(PaymentContext)
  if (!context) {
    throw new Error('usePaymentModal must be used within PaymentProvider')
  }
  return context
}
