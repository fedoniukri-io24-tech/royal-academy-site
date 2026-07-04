import { MARATHON_DURATION_STATS } from '../site'
import styles from './MarathonStats.module.css'

type MarathonStatsProps = {
  variant?: 'light' | 'dark'
  className?: string
}

export default function MarathonStats({
  variant = 'light',
  className,
}: MarathonStatsProps) {
  return (
    <p className={[styles.stats, styles[variant], className].filter(Boolean).join(' ')}>
      {MARATHON_DURATION_STATS.map((item, index) => (
        <span key={item} className={styles.itemWrap}>
          {index > 0 && (
            <span className={styles.sep} aria-hidden="true">
              ·
            </span>
          )}
          <span className={styles.item}>{item}</span>
        </span>
      ))}
    </p>
  )
}
