export const SITE_NAME = 'Royal Academy School'
export const SITE_SHORT_NAME = 'Royal Academy'
export const SITE_LOGO = '/images/PNG-зображення 1.png'
export const SITE_HERO_IMAGE = '/images/102.jpg'
export const SITE_CONTACT_IMAGE = '/images/3D4A6903.JPG'
export const SITE_MARATHON_STEPS_IMAGE = '/images/024.JPG'

function normalizeSiteUrl(url: string): string {
  const trimmed = url.trim().replace(/\/$/, '')
  if (!trimmed) return 'https://royalacademy.school'
  if (/^https?:\/\//i.test(trimmed)) return trimmed
  return `https://${trimmed}`
}

export const SITE_URL = normalizeSiteUrl(
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://royalacademy.school',
)

export const SITE_TITLE = `${SITE_NAME} | Марафон англійської для початківців (A1)`
export const SITE_DESCRIPTION =
  '10-тижневий онлайн-марафон англійської для початківців (рівень A1 / Beginner): базові теми, 10 занять · 10 тижнів · 70 днів підтримки. Старт 10 серпня. Тарифи від 399 грн.'

export const MARATHON_LEVEL_LABEL = 'Beginner · A1'
export const MARATHON_LEVEL_DESCRIPTION = 'Марафон базових тем для початківців'
export const MARATHON_START_DATE = '10 серпня'
export const MARATHON_START_LABEL = `Старт марафону з ${MARATHON_START_DATE}`
export const EDIO_PLATFORM_URL = 'https://my.edio.ai/'

export const SITE_KEYWORDS = [
  'Royal Academy School',
  'марафон англійської',
  'вивчення англійської онлайн',
  'англійська для початківців',
  'курс англійської A1',
  'англійська за 10 занять',
  'онлайн курс англійської',
  'speaking англійська',
]

export const SITE_EMAIL = 'hello@royalacademy.school'
export const SITE_PHONE = '+380971234567'
export const SITE_PHONE_DISPLAY = '+380 97 123 45 67'

export const SITE_THEME_COLOR = '#C41E3A'

export const MARATHON_DURATION_STATS = [
  'Beginner · A1',
  '10 занять',
  '10 тижнів',
  '70 днів підтримки',
] as const

export const MARATHON_TARIFF_FEATURES = [
  'Авторська програма з англійської від Жаборовської Тетяни з простим і зрозумілим поясненням граматики',
  '10 повноцінних уроків із усіма необхідними матеріалами (відео, аудіо, PDF-конспекти)',
  'Доступ до всіх матеріалів протягом 2 місяців після завершення марафону',
  'Технічна підтримка протягом усього навчання',
  'PDF-конспекти всіх уроків для зручного повторення',
  'PDF-конспект із додатковими ресурсами та корисними матеріалами',
  'Перевірка домашніх завдань і персональний фідбек',
  'Живе спілкування, практика та відповіді на запитання',
  'Бонусна система з можливістю виграти 10 000 грн та інші подарунки',
] as const

export const MARATHON_SOLO_EXCLUDED_FEATURES = [
  'PDF-конспект із додатковими ресурсами та корисними матеріалами',
  'Перевірка домашніх завдань і персональний фідбек',
  'Живе спілкування, практика та відповіді на запитання',
  'Бонусна система з можливістю виграти 10 000 грн та інші подарунки',
] as const

export type MarathonTariff = {
  id: string
  name: string
  price: number
  oldPrice: number
  description: string
  features: readonly string[]
  excludedFeatures?: readonly string[]
  featured?: boolean
  badge?: string
}

export function formatPrice(amount: number): string {
  return amount.toLocaleString('uk-UA')
}

export const MARATHON_TARIFFS: readonly MarathonTariff[] = [
  {
    id: 'solo',
    name: 'Я сама',
    price: 399,
    oldPrice: 1995,
    description:
      'Для тих, хто хоче пройти марафон у власному темпі та самостійно закріпити знання.',
    features: MARATHON_TARIFF_FEATURES,
    excludedFeatures: MARATHON_SOLO_EXCLUDED_FEATURES,
  },
  {
    id: 'support',
    name: 'З підтримкою',
    price: 599,
    oldPrice: 2995,
    description:
      'Для тих, хто хоче швидше заговорити, отримувати підтримку та впевнено використовувати англійську на практиці.',
    features: MARATHON_TARIFF_FEATURES,
    featured: true,
    badge: '🔥 Найпопулярніший',
  },
] as const

export const MARATHON_DEFAULT_TARIFF_ID = 'support'

export function getMarathonTariff(id: string): MarathonTariff | undefined {
  return MARATHON_TARIFFS.find((tariff) => tariff.id === id)
}

export const MARATHON_PRICE_FROM = Math.min(...MARATHON_TARIFFS.map((tariff) => tariff.price))
export const MARATHON_PRICE =
  getMarathonTariff(MARATHON_DEFAULT_TARIFF_ID)?.price ?? MARATHON_PRICE_FROM

export const TELEGRAM_BOT_URL =
  process.env.NEXT_PUBLIC_TELEGRAM_BOT_URL ?? 'https://t.me/TeleBotsNowayrmBot'

export const LESSON_VIDEOS = [
  {
    id: 'lesson-intro',
    srcBase: '/videos/lessons/lesson-intro',
    poster: '/videos/lessons/lesson-intro-poster.webp',
    tag: '🎬 Відеоурок',
    title: 'Зрозуміле пояснення граматики',
    caption: 'Короткі відео з простими прикладами — дивіться у зручний для вас час.',
  },
  {
    id: 'lesson-practice',
    srcBase: '/videos/lessons/lesson-practice',
    poster: '/videos/lessons/lesson-practice-poster.webp',
    tag: '💬 Практика',
    title: 'Живе спілкування та закріплення',
    caption: 'Speaking, відповіді на запитання та практика, яка допомагає не боятися говорити.',
  },
] as const

export const SITE_NAV = [
  { href: '/#pro-marafon', label: 'Про марафон' },
  { href: '/#programa', label: 'Програма' },
  { href: '/#tarify', label: 'Тарифи' },
  { href: '/#faq', label: 'Питання' },
] as const

export const PRIVACY_POLICY_PATH = '/privacy'

export const TELEBOTS_URL = 'https://telebots.site/uk'

export const MARATHON_INCLUDES = [
  '10 занять з відео, практикою та speaking',
  '70 днів підтримки від куратора',
  'Перевірка домашніх завдань',
  'Доступ до Telegram-бота з уроками',
  'Участь у розіграші 10 000 грн',
] as const

export const SITE_FAQ = [
  { q: 'Скільки часу потрібно?', a: 'Близько 1 години на день.' },
  { q: 'Чи підійде для початківців?', a: 'Так. Це марафон базових тем для рівня A1 (Beginner).' },
  { q: 'Коли старт марафону?', a: `Старт марафону з ${MARATHON_START_DATE}.` },
  { q: 'Чи перевіряються домашні завдання?', a: 'Так. Кожну роботу перевіряє куратор.' },
  { q: 'Чи потрібно вже говорити англійською?', a: 'Ні. Ми починаємо з найпростішої бази.' },
  { q: 'Якщо я пропущу заняття?', a: 'Уроки залишаються у вас, тому можна наздогнати програму.' },
] as const
