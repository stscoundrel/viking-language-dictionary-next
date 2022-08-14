import { SearchResult } from 'lib/services/search'
import Link from 'next/link'
import styles from './SearchTeaser.module.scss'

interface SearchTeaserProps{
  data: SearchResult
}

export default function SearchTeaser({ data }: SearchTeaserProps) {
  const { slug, headword, foundIn } = data

  return (
    <div className={styles.result}>
      <Link key={`link${slug}`} href={`/word/${slug}`}>
        <a className={styles.link}>{headword.toLowerCase()}</a>
      </Link>
      <ul>
        { foundIn.map((searchResult, index) => (
          <li
            className={styles.foundIn}
            key={`${data.slug}-search-${index}`}
            dangerouslySetInnerHTML={ { __html: searchResult } }
          />
        )) }
      </ul>
    </div>
  )
}
