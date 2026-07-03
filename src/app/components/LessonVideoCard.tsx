'use client'

import { useRef, useState } from 'react'
import styles from './LessonVideos.module.css'

export type LessonVideoItem = {
  id: string
  srcBase: string
  poster: string
  tag: string
  title: string
  caption: string
}

type Props = {
  video: LessonVideoItem
  featured?: boolean
}

export default function LessonVideoCard({ video, featured = false }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(false)

  const togglePlayback = async () => {
    const element = videoRef.current
    if (!element) return

    if (element.paused) {
      element.muted = false
      element.volume = 1

      try {
        await element.play()
        setPlaying(true)
      } catch {
        setPlaying(false)
      }
      return
    }

    element.pause()
    setPlaying(false)
  }

  return (
    <article className={`${styles.card} ${featured ? styles.cardFeatured : ''}`}>
      <div className={styles.frame}>
        <span className={styles.tag}>{video.tag}</span>
        <button
          type="button"
          className={styles.videoButton}
          onClick={togglePlayback}
          aria-label={playing ? `Пауза: ${video.title}` : `Відтворити: ${video.title}`}
        >
          <video
            ref={videoRef}
            className={styles.video}
            playsInline
            preload="metadata"
            poster={video.poster}
            controls={playing}
            onPlay={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
            onEnded={() => setPlaying(false)}
          >
            <source src={`${video.srcBase}.mp4`} type="video/mp4" />
            <source src={`${video.srcBase}.webm`} type="video/webm" />
          </video>

          <span className={`${styles.playOverlay} ${playing ? styles.playOverlayHidden : ''}`} aria-hidden="true">
            <span className={styles.playIcon}>
              <svg width="28" height="28" viewBox="0 0 28 28" fill="currentColor" aria-hidden="true">
                <path d="M8 5.5v17l14-8.5-14-8.5z" />
              </svg>
            </span>
            <span className={styles.playHint}>Дивитись зі звуком</span>
          </span>
        </button>
      </div>

      <div className={styles.copy}>
        <h3 className={styles.title}>{video.title}</h3>
        <p className={styles.caption}>{video.caption}</p>
      </div>
    </article>
  )
}
