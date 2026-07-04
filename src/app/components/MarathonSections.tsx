import CtaBlock from './CtaBlock'
import PaymentButton from './PaymentButton'
import ScenarioGrid from './ScenarioGrid'
import FaqAccordion from './FaqAccordion'
import LessonVideos from './LessonVideos'
import MarathonStats from './MarathonStats'
import Image from 'next/image'
import { formatPriceUAH, MARATHON_TARIFFS, SITE_FAQ, SITE_MARATHON_STEPS_IMAGE, SITE_NAME } from '../site'
import styles from './MarathonSections.module.css'

const BENEFITS = [
  { icon: '📖', text: 'Короткі зрозумілі уроки' },
  { icon: '✍️', text: 'Практика після кожної теми' },
  { icon: '✅', text: 'Перевірка домашніх завдань' },
  { icon: '🗣️', text: 'Speaking-завдання' },
  { icon: '📹', text: 'Zoom-зустрічі' },
  { icon: '💪', text: 'Мотивація та підтримка' },
  { icon: '🏆', text: 'Призи для найактивніших учасників' },
]

const PRIZES = [
  {
    icon: '🎁',
    title: 'Головний приз',
    desc: 'Розіграш 10 000 грн за проходження всього марафону та виконання всіх завдань',
    featured: true,
  },
  { icon: '🥈', title: '2-е місце', desc: '8 індивідуальних занять з англійської' },
  { icon: '🥉', title: '3-є місце', desc: 'Подарунковий бокс з нашим мерчем' },
]

const SCENARIOS = [
  { icon: '✈️', title: 'Запитати дорогу та зрозуміти відповідь', translation: 'How can I get to the city center?' },
  { icon: '🏨', title: 'Самостійно заселитися в готель', translation: 'I would like to check in, please.' },
  { icon: '☕', title: 'Замовити їжу та напої в кафе', translation: 'I would like a coffee, please.' },
  { icon: '🚕', title: 'Пояснити водію таксі, куди вам потрібно', translation: 'I need to go to the airport, please.' },
  { icon: '🛍️', title: 'Купити потрібні речі в магазині та поставити запитання продавцю', translation: 'How much does this cost?' },
  { icon: '🗣️', title: 'Розповісти про себе, свою роботу та захоплення', translation: 'My name is Anna. I work in an office.' },
  { icon: '📅', title: 'Говорити про свої плани', translation: 'I am going to travel next month.' },
  { icon: '❓', title: 'Ставити запитання та підтримувати просту розмову англійською', translation: 'Could you tell me more about it?' },
  { icon: '💬', title: 'Давати поради та рекомендації', translation: 'You should try this restaurant.' },
  { icon: '👨‍⚕️', title: 'Пояснити, що вас турбує, та розповісти про самопочуття', translation: 'I do not feel well. I have a headache.' },
  { icon: '✨', title: 'Перестати боятися говорити англійською та почати використовувати її в реальному житті', translation: 'I can speak English in real life.' },
]

const PROBLEMS = [
  'Вчать слова окремо',
  'Вчать граматику окремо',
  'Не говорять',
  'Не отримують зворотного зв\'язку',
  'Не доводять базу до автоматизму',
]

const LESSON_INCLUDES = [
  { icon: '🎥', text: 'Відеопояснення граматики та слів' },
  { icon: '🎧', text: 'Аудіо для запам\'ятовування' },
  { icon: '📄', text: 'PDF-конспект' },
  { icon: '🗣', text: 'Speaking-завдання' },
  { icon: '📝', text: 'Домашня робота' },
  { icon: '👩‍🏫', text: 'Перевірка куратором' },
  { icon: '🏆', text: 'Бали за активність' },
]

const BONUSES = [
  { icon: '🎵', text: 'Розбір популярних англомовних пісень' },
  { icon: '🎥', text: 'Прямі ефіри' },
  { icon: '💬', text: 'Живі Zoom-зустрічі' },
  { icon: '📚', text: 'PDF-конспект усіх уроків' },
  { icon: '🔗', text: 'Список корисних ресурсів для подальшого навчання' },
  { icon: '🎯', text: 'Фінальний тест' },
  { icon: '🎁', text: 'Знижка на наступний курс' },
]

const AUDIENCE = [
  'Для тих, хто починає з нуля',
  'Для тих, хто колись вчив англійську, але все забув',
  'Для тих, хто боїться говорити',
  'Для тих, хто постійно відкладає навчання',
  'Для тих, хто хоче систему та підтримку',
  'Для тих, хто хоче швидко отримати результат',
]

const RESULTS = [
  'Почнете говорити простими реченнями',
  'Освоїте базову граматику рівня А1',
  'Поповните словниковий запас',
  'Навчитеся розуміти просту англійську на слух',
  'Перестанете боятися робити помилки',
  'Отримаєте чіткий план подальшого розвитку',
]

const STEPS = [
  'Реєструєтесь.',
  'Отримуєте доступ до Telegram-бота.',
  'Щовівторка відкривається новий урок.',
  'Виконуєте практичне завдання.',
  'Отримуєте перевірку від куратора.',
  'Заробляєте бали.',
  'Берете участь у Zoom-сесіях.',
  'Отримуєте бонуси та подарунки.',
]

function SectionTitle({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return <h2 className={light ? styles.headingLight : styles.heading}>{children}</h2>
}

export default function MarathonSections() {
  return (
    <>
      {/* Problem + Benefits */}
      <section className={`${styles.section} ${styles.light}`}>
        <div className={styles.container}>
          <div className={styles.introPanel}>
            <h2 className={styles.introHeading}>
              Ви вже багато разів починали вивчати <span>англійську?</span>
            </h2>

            <div className={styles.introGrid}>
              <div className={styles.introCol}>
                <p className={styles.proseLead}>
                  Купували курси. Дивилися відео на YouTube. Вчили слова. Зберігали корисні таблиці.
                </p>
                <p>
                  Але коли потрібно сказати навіть просте речення англійською,{' '}
                  <strong>слова просто зникають з голови.</strong>
                </p>
              </div>

              <div className={styles.introCol}>
                <p className={styles.emphasis}>Знайомо?</p>
                <p>
                  Ви не ліниві. У вас немає проблем із пам&apos;яттю. Просто більшість людей
                  вивчають англійську хаотично.
                </p>
              </div>
            </div>
          </div>

          <div id="pro-marafon" className={styles.marathonAbout}>
            <MarathonStats className={styles.durationStats} />
            <p className={styles.leadBox}>
              Саме тому ми створили <strong>10-тижневий марафон</strong>, який допомагає не просто
              дивитися уроки, а <em>реально почати використовувати англійську.</em> Плюс{' '}
              <strong>70 днів підтримки</strong> від куратора.
            </p>

            <div className={styles.benefitGrid}>
            {BENEFITS.map((item, i) => (
              <div
                key={item.text}
                className={`${styles.benefitCard} ${i === BENEFITS.length - 1 ? styles.benefitFeatured : ''}`}
              >
                <span className={styles.benefitWatermark}>{String(i + 1).padStart(2, '0')}</span>
                <span className={styles.benefitIcon}>{item.icon}</span>
                <p className={styles.benefitText}>{item.text}</p>
              </div>
            ))}
            </div>
          </div>
        </div>
      </section>

      {/* Prizes */}
      <section className={`${styles.section} ${styles.lightToMuted}`}>
        <div className={styles.container}>
          <SectionTitle>Мотивація, яка працює</SectionTitle>
          <div className={styles.prizeGrid}>
            {PRIZES.map(p => (
              <div key={p.title} className={`${styles.prizeCard} ${p.featured ? styles.prizeFeatured : ''}`}>
                <span className={styles.prizeIcon}>{p.icon}</span>
                <p className={styles.prizeTitle}>{p.title}</p>
                <p className={styles.prizeDesc}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scenarios */}
      <section className={`${styles.section} ${styles.muted}`}>
        <div className={styles.container}>
          <SectionTitle>Що ви зможете робити вже через 10 занять</SectionTitle>
          <p className={styles.scenarioHint}>
            Натисніть на картку, щоб побачити приклад англійською. Натисніть ще раз, щоб повернути.
          </p>
          <ScenarioGrid scenarios={SCENARIOS} />
        </div>
      </section>

      <CtaBlock />

      {/* Why fail */}
      <section className={`${styles.section} ${styles.accent}`}>
        <div className={styles.container}>
          <SectionTitle>Чому більшість людей роками не можуть заговорити англійською?</SectionTitle>
          <p className={styles.subheading}>Тому що вони:</p>
          <div className={styles.problemGrid}>
            {PROBLEMS.map(p => (
              <div key={p} className={styles.problemCard}>
                <span className={styles.problemIcon}>✕</span>
                <p>{p}</p>
              </div>
            ))}
          </div>
          <div className={styles.problemOutcome}>
            <p className={styles.quoteIntro}>
              У результаті людина може знати десятки правил і сотні слів, але не може сказати навіть:
            </p>
            <blockquote className={styles.quoteBlock}>
              <span>&ldquo;Мене звати Олена.&rdquo;</span>
              <span>&ldquo;Я працюю в офісі.&rdquo;</span>
              <span>&ldquo;Завтра я їду в аеропорт.&rdquo;</span>
            </blockquote>
            <p className={styles.leadBox}>Саме це ми виправляємо на марафоні.</p>
          </div>
        </div>
      </section>

      {/* Lesson + Bonuses */}
      <section id="programa" className={`${styles.section} ${styles.whiteFromAccent}`}>
        <div className={styles.container}>
          <SectionTitle>Що входить у кожен урок</SectionTitle>
          <div className={styles.lessonGrid}>
            {LESSON_INCLUDES.map(item => (
              <div key={item.text} className={styles.lessonCard}>
                <span className={styles.lessonIcon}>{item.icon}</span>
                <p className={styles.lessonText}>{item.text}</p>
              </div>
            ))}
          </div>

          <div className={styles.bonusBlock}>
            <h3 className={styles.bonusHeading}>Бонуси для учасників</h3>
            <div className={styles.bonusGrid}>
              {BONUSES.map(b => (
                <div key={b.text} className={styles.bonusItem}>
                  <span className={styles.bonusIcon}>{b.icon}</span>
                  <p>{b.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <LessonVideos />

      {/* Audience */}
      <section className={`${styles.section} ${styles.mutedFromWhite}`}>
        <div className={styles.container}>
          <SectionTitle>Для кого цей марафон</SectionTitle>
          <div className={styles.audienceGrid}>
            {AUDIENCE.map(a => (
              <div key={a} className={styles.audienceCard}>
                <span className={styles.audienceCheck}>✓</span>
                <p>{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className={`${styles.section} ${styles.dark} marathon-glow`}>
        <div className={styles.container}>
          <SectionTitle light>Що ви отримаєте після 10 занять</SectionTitle>
          <p className={styles.subheadingLight}>Після проходження марафону ви:</p>
          <div className={styles.resultGrid}>
            {RESULTS.map(r => (
              <div key={r} className={styles.resultCard}>
                <span className={styles.resultCheck}>✓</span>
                <p>{r}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className={`${styles.section} ${styles.whiteFromDark} ${styles.stepsSection}`}>
        <div className={styles.container}>
          <SectionTitle>Як проходить марафон</SectionTitle>
          <div className={styles.stepsPhotoWrap}>
            <Image
              src={SITE_MARATHON_STEPS_IMAGE}
              alt={`Як проходить марафон англійської в ${SITE_NAME}`}
              fill
              sizes="(max-width: 768px) 100vw, 1240px"
              className={styles.stepsPhoto}
              loading="lazy"
            />
          </div>
          <ol className={styles.timeline}>
            {STEPS.map((step, i) => (
              <li key={step}>
                <span className={styles.stepNum}>{i + 1}</span>
                <p>{step}</p>
                {i < STEPS.length - 1 && (
                  <span className={styles.stepArrow} aria-hidden="true">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 9 H15 M10 4 L15 9 L10 14" />
                    </svg>
                  </span>
                )}
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <section id="tarify" className={`${styles.section} ${styles.pricingSection}`}>
        <div className={styles.container}>
          <SectionTitle>Оберіть свій тариф</SectionTitle>
          <p className={styles.pricingLead}>
            Обидва тарифи включають повну програму марафону. Різниця — у форматі проходження та рівні підтримки.
          </p>
          <div className={styles.tariffGrid}>
            {MARATHON_TARIFFS.map((tariff) => (
              <article
                key={tariff.id}
                className={`${styles.tariffCard} ${tariff.featured ? styles.tariffFeatured : ''}`}
              >
                {tariff.badge && <span className={styles.tariffBadge}>{tariff.badge}</span>}
                <div className={styles.tariffHeader}>
                  <h3 className={styles.tariffName}>{tariff.name}</h3>
                  <p className={styles.tariffPrice}>
                    <span className={styles.tariffOldPrice}>{formatPriceUAH(tariff.oldPrice)}</span>
                    <span className={styles.tariffAmount}>{tariff.price}</span>
                    <span className={styles.tariffCurrency}>грн</span>
                  </p>
                </div>
                <p className={styles.tariffDescription}>{tariff.description}</p>
                <ul className={styles.tariffFeatures}>
                  {tariff.features.map((feature) => {
                    const excluded = tariff.excludedFeatures?.includes(feature)

                    return (
                      <li
                        key={feature}
                        className={excluded ? styles.tariffFeatureExcluded : undefined}
                      >
                        <span
                          className={excluded ? styles.tariffCross : styles.tariffCheck}
                          aria-hidden="true"
                        >
                          {excluded ? '✕' : '✓'}
                        </span>
                        <span className={excluded ? styles.tariffFeatureTextExcluded : undefined}>
                          {feature}
                        </span>
                      </li>
                    )
                  })}
                </ul>
                <PaymentButton
                  className={`${styles.tariffCta} ${tariff.featured ? styles.tariffCtaFeatured : ''}`}
                  tariffId={tariff.id}
                  aria-label={`Обрати тариф ${tariff.name} за ${tariff.price} грн`}
                >
                  Обрати тариф «{tariff.name}»
                  <svg width="18" height="18" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M2 14 L14 2 M6 2 H14 V10" />
                  </svg>
                </PaymentButton>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className={`${styles.section} ${styles.mutedFromWhite}`}>
        <div className={styles.container}>
          <SectionTitle>Відповіді на популярні питання</SectionTitle>
          <FaqAccordion items={[...SITE_FAQ]} />
        </div>
      </section>

      {/* Final urgency */}
      <section className={`${styles.section} ${styles.final} marathon-glow`}>
        <div className={styles.container}>
          <div className={styles.finalInner}>
            <SectionTitle light>Не відкладайте англійську ще на один понеділок</SectionTitle>
            <div className={styles.finalProse}>
              <p>Через 10 занять ці 10 тижнів все одно пройдуть.</p>
              <p className={styles.emphasisLight}>
                Ви будете далі думати &ldquo;треба вивчити англійську&rdquo;, чи вже почнете говорити?
              </p>
            </div>
            <PaymentButton
              className={styles.finalCta}
              tariffId="support"
              aria-label="Приєднатись до марафону за 599 грн"
            >
              🚀 Приєднатись до марафону за 599 грн
              <svg width="18" height="18" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M2 14 L14 2 M6 2 H14 V10" />
              </svg>
            </PaymentButton>
            <p className={styles.finalAltPrice}>
              Або оберіть тариф «Я сама» за{' '}
              <PaymentButton className={styles.finalAltLink} tariffId="solo">
                399 грн
              </PaymentButton>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
