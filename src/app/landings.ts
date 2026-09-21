import {
  MARATHON_START_DATE,
  SITE_NAME,
  SITE_URL,
} from './site'

export type MarathonLandingId = 'beginner' | 'elementary'

export type MarathonLandingConfig = {
  id: MarathonLandingId
  path: string
  title: string
  description: string
  keywords: readonly string[]
  levelLabel: string
  levelSubtitle: string
  levelShort: string
  educationalLevel: string
  durationStats: readonly string[]
  aboutLead: {
    before: string
    level: string
    after: string
  }
  audience: readonly string[]
  results: readonly string[]
  faq: readonly { q: string; a: string }[]
}

export const BEGINNER_LANDING: MarathonLandingConfig = {
  id: 'beginner',
  path: '/',
  title: `${SITE_NAME} | Марафон англійської для початківців (A1)`,
  description:
    '10-тижневий онлайн-марафон англійської для початківців (рівень A1 / Beginner): базові теми, 10 занять · 10 тижнів · 70 днів підтримки. Старт 12 жовтня. Тарифи від 399 грн.',
  keywords: [
    'Royal Academy School',
    'марафон англійської',
    'англійська для початківців',
    'курс англійської A1',
    'Beginner англійська',
  ],
  levelLabel: 'Beginner · A1',
  levelSubtitle: 'Базові теми для початківців',
  levelShort: 'A1 · Beginner',
  educationalLevel: 'Beginner',
  durationStats: ['Beginner · A1', '10 занять', '10 тижнів', '70 днів підтримки'],
  aboutLead: {
    before: 'Саме тому ми створили 10-тижневий марафон базових тем для початківців (рівень ',
    level: 'A1 · Beginner',
    after:
      '), який допомагає не просто дивитися уроки, а реально почати використовувати англійську. Плюс 70 днів підтримки від куратора.',
  },
  audience: [
    'Для початківців — марафон базових тем (A1 / Beginner)',
    'Для тих, хто починає з нуля',
    'Для тих, хто колись вчив англійську, але все забув',
    'Для тих, хто боїться говорити',
    'Для тих, хто постійно відкладає навчання',
    'Для тих, хто хоче систему та підтримку',
  ],
  results: [
    'Почнете говорити простими реченнями',
    'Освоїте базову граматику рівня А1',
    'Поповните словниковий запас',
    'Навчитеся розуміти просту англійську на слух',
    'Перестанете боятися робити помилки',
    'Отримаєте чіткий план подальшого розвитку',
  ],
  faq: [
    { q: 'Скільки часу потрібно?', a: 'Близько 1 години на день.' },
    {
      q: 'Чи підійде для початківців?',
      a: 'Так. Це марафон базових тем для рівня A1 (Beginner).',
    },
    { q: 'Коли старт марафону?', a: `Старт марафону з ${MARATHON_START_DATE}.` },
    { q: 'Чи перевіряються домашні завдання?', a: 'Так. Кожну роботу перевіряє куратор.' },
    {
      q: 'Чи потрібно вже говорити англійською?',
      a: 'Ні. Ми починаємо з найпростішої бази.',
    },
    {
      q: 'Якщо я пропущу заняття?',
      a: 'Уроки залишаються у вас, тому можна наздогнати програму.',
    },
  ],
}

export const ELEMENTARY_LANDING: MarathonLandingConfig = {
  id: 'elementary',
  path: '/elementary-a2',
  title: `${SITE_NAME} | Марафон англійської Elementary A2`,
  description:
    '10-тижневий онлайн-марафон англійської рівня Elementary A2: базові теми, 10 занять · 10 тижнів · 70 днів підтримки. Старт 12 жовтня. Тарифи від 399 грн.',
  keywords: [
    'Royal Academy School',
    'марафон англійської',
    'англійська Elementary A2',
    'курс англійської A2',
    'Elementary англійська',
  ],
  levelLabel: 'Elementary · A2',
  levelSubtitle: 'Базові теми рівня Elementary A2',
  levelShort: 'A2 · Elementary',
  educationalLevel: 'Elementary',
  durationStats: ['Elementary · A2', '10 занять', '10 тижнів', '70 днів підтримки'],
  aboutLead: {
    before: 'Саме тому ми створили 10-тижневий марафон базових тем (рівень ',
    level: 'A2 · Elementary',
    after:
      '), який допомагає не просто дивитися уроки, а реально почати використовувати англійську. Плюс 70 днів підтримки від куратора.',
  },
  audience: [
    'Для початківців — марафон базових тем (A1 / Elementary)',
    'Для тих, хто має мінімальну базу знань, але плутається, який час, коли і як використовувати',
    'Для тих, хто колись вчив англійську, але все забув',
    'Для тих, хто боїться говорити',
    'Для тих, хто постійно відкладає навчання',
    'Для тих, хто хоче систему та підтримку',
  ],
  results: [
    'Почнете говорити простими реченнями',
    'Освоїте базову граматику рівня А2',
    'Поповните словниковий запас',
    'Навчитеся розуміти просту англійську на слух',
    'Перестанете боятися робити помилки',
    'Отримаєте чіткий план подальшого розвитку',
  ],
  faq: [
    { q: 'Скільки часу потрібно?', a: 'Близько 1 години на день.' },
    {
      q: 'Чи підійде мені цей марафон?',
      a: 'Так. Це марафон базових тем для рівня A2 (Elementary).',
    },
    { q: 'Коли старт марафону?', a: `Старт марафону з ${MARATHON_START_DATE}.` },
    { q: 'Чи перевіряються домашні завдання?', a: 'Так. Кожну роботу перевіряє куратор.' },
    {
      q: 'Чи потрібно вже говорити англійською?',
      a: 'Потрібна мінімальна база. Ми допомагаємо розібратися з часами та впевнено використовувати їх на практиці.',
    },
    {
      q: 'Якщо я пропущу заняття?',
      a: 'Уроки залишаються у вас, тому можна наздогнати програму.',
    },
  ],
}

export function getLandingCanonical(landing: MarathonLandingConfig): string {
  if (landing.path === '/') return SITE_URL
  return `${SITE_URL}${landing.path}`
}

export function getLandingNav(landing: MarathonLandingConfig) {
  const prefix = landing.path === '/' ? '' : landing.path
  return [
    { href: `${prefix}/#pro-marafon`, label: 'Про марафон' },
    { href: `${prefix}/#programa`, label: 'Програма' },
    { href: `${prefix}/#tarify`, label: 'Тарифи' },
    { href: `${prefix}/#faq`, label: 'Питання' },
  ] as const
}
