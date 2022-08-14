import { capitalize } from 'lib/utils/strings'
import { lettersToShortTwigRunes, lettersToLongBranchRunes } from 'younger-futhark'
import { Abbreviation, addAbbreviationsToContent } from 'lib/services/abbreviations'
import { DictionaryEntry } from 'lib/models/dictionary'
import Abbreviations from 'components/Abbreviations'
import styles from './WordDefinition.module.scss'

interface WordDefinitionProps{
  data: DictionaryEntry,
  abbreviations: Abbreviation[]
}

export default function WordDefinition({ data, abbreviations }: WordDefinitionProps) {
  const { headword, definition } = data

  return (
    <article className={styles.section}>
      <header>
        <h1 lang="non">{capitalize(headword)}</h1>

        <small className={styles.subHeading}>
          Viking Language Dictionary - {headword.toLowerCase()}
        </small>
        <p>Meaning of Old Norse / Old Icelandic word <em>&quot;{headword}&quot;</em></p>
      </header>

      <dl className={styles.definitionList}>
        <dt><strong>{headword}</strong></dt>
        <dd
          lang="nor"
          className={styles.itemDescription}
          dangerouslySetInnerHTML={{
            __html: addAbbreviationsToContent(definition, abbreviations),
          } }
        ></dd>
      </dl>

      <p>Possible runic inscriptions in <em>Younger Futhark:</em></p>
      <ul>
        <li>
          - Long branch (Danish):
          <span className={styles.rune}>{ lettersToLongBranchRunes(headword) }</span>
        </li>
        <li>
          - Short twig (Swedish & Norwegian):
          <span className={styles.rune}>{ lettersToShortTwigRunes(headword) }</span>
        </li>
      </ul>

      <Abbreviations abbreviations={abbreviations} />
    </article>
  )
}
