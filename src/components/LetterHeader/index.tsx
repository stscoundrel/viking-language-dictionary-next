import styles from './LetterHeader.module.scss'

interface LetterHeaderProps{
  letter: string,
  count: number,
}

export default function LetterHeader({ letter, count }: LetterHeaderProps) {
  return (
   <header className={styles.section}>
    <h1 className={styles.title}>Letter {letter.toUpperCase()}</h1>
    <small className={styles.subHeading}>
      Viking Language Dictionary - Letter {letter.toUpperCase()}
    </small>
    <p>Common Old Norse words starting with letter {letter.toUpperCase()}.
    Click individual words to see definition.</p>
    <small className={styles.count}>Total of {count} words</small>
  </header>
  )
}
