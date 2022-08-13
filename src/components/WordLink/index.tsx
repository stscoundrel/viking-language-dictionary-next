import Link from 'next/link'
import styles from './WordLink.module.scss'

interface WordLinkPros{
  data: {
    slug: string,
    headword: string,
  }
}

export default function WordLink({ data: { slug, headword } }: WordLinkPros) {
  return (
   <Link key={`link${slug}`} href={`/word/${slug}`}>
      <a className={styles.link}>{headword.toLowerCase()}</a>
    </Link>
  )
}
