# Royal Academy School — Next.js 14 Website

Сайт марафону англійської **Royal Academy School** на Next.js 14 + TypeScript + CSS Modules.

## Запуск

```bash
npm install
npm run dev
```

Відкрийте [http://localhost:3000](http://localhost:3000)

## Структура

```
src/app/
├── layout.tsx              # Root layout (fonts, metadata)
├── page.tsx                # Головна сторінка
├── site.ts                 # Бренд, контакти, SEO-константи
├── robots.ts               # robots.txt
├── sitemap.ts              # sitemap.xml
├── manifest.ts             # Web App Manifest
├── site.css                # Стилі сторінки
├── globals.css             # Глобальні стилі
├── hooks/
│   └── useCountdown.ts     # Таймер зворотного відліку
└── components/
    ├── Navbar.tsx          # Навігація
    ├── Hero.tsx            # Hero з фото
    ├── MarathonSections.tsx
    ├── ContactSection.tsx
    └── Footer.tsx
```

## Оплата (Monobank) + доступ до курсу (Edio)

1. Скопіюйте `.env.example` у `.env` і заповніть змінні
2. `MONO_TOKEN` — токен з [web.monobank.ua](https://web.monobank.ua) (тільки на сервері)
3. `TELEGRAM_BOT_TOKEN` та `TELEGRAM_CHAT_ID` — для сповіщень про оплату в групу
4. `NEXT_PUBLIC_TELEGRAM_BOT_URL` — посилання на бот для сторінки `/success`
5. `NEXT_PUBLIC_SITE_URL` — публічний URL сайту (потрібен для webhook Monobank)
6. `EDIO_API_TOKEN`, `EDIO_SCHOOL_ID`, `EDIO_PRODUCT_ID` — запрошення студента на курс після оплати

Потік: форма (імʼя + email + контакт) → `/api/payment/create` → Monobank → webhook `/api/mono-webhook` → Edio invite + Telegram → redirect `/success`

Після успішної оплати сайт викликає Edio API `inviteStudentToCourse`. Edio сам надсилає лист із доступом до курсу. Обидва тарифи ведуть на один і той самий продукт.

## SEO

- Metadata: title, description, keywords, Open Graph, Twitter Cards
- `robots.txt` та `sitemap.xml` генеруються автоматично
- JSON-LD: Organization, Course, WebPage, FAQPage
- Canonical URL та `metadataBase`

Перед деплоєм вкажіть домен у `.env`:

```bash
NEXT_PUBLIC_SITE_URL=https://ваш-домен.com
```

## Конфігурація

Змініть контактні дані в:
- `components/Footer.tsx` — телефон, email, соцмережі
- `site.ts` — назва, контакти, FAQ, URL сайту
- `app/layout.tsx` — metadata
