import { LESSON_VIDEOS } from '../site'
import LessonVideoCard from './LessonVideoCard'
import styles from './LessonVideos.module.css'

export default function LessonVideos() {
  return (
    <section id="uroky" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>Загляньте всередину марафону</p>
          <h2 className={styles.heading}>Як проходять уроки</h2>
          <p className={styles.lead}>
            Без сухої теорії та нудних таблиць — живі відео, практика та підтримка, які реально
            допомагають заговорити.
          </p>
        </div>

        <div className={styles.grid}>
          {LESSON_VIDEOS.map((video, index) => (
            <LessonVideoCard key={video.id} video={video} featured={index === 1} />
          ))}
        </div>

        <p className={styles.footnote}>
          <span aria-hidden="true">👆</span> Натисніть на відео, щоб подивитись, як виглядає навчання
        </p>
      </div>
    </section>
  )
}
