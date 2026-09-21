import styles from './MarathonStats.module.css'

type MarathonStatsProps = {
  variant?: 'light' | 'dark'
  className?: string
  stats: readonly string[]
}

export default function MarathonStats({
  variant = 'light',
  className,
  stats,
}: MarathonStatsProps) {
  return (
    <p className={[styles.stats, styles[variant], className].filter(Boolean).join(' ')}>
      {stats.map((item, index) => (
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
