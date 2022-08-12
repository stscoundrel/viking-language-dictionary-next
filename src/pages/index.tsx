// Services.
import { getAlphabet, AlphabetLetter } from 'lib/services/dictionary'

// Components.
import Layout from 'components/Layout'
import ContentArea from 'components/ContentArea'
import Link from 'next/link'
import { ContentType } from 'lib/models/content-types'
import ExternalLink from 'components/ExternalLink'

interface IndexProps{
  letters: AlphabetLetter[]
}

export async function getStaticProps() {
  const letters = getAlphabet()

  return {
    props: {
      letters,
    },
  }
}

export default function Index({ letters }: IndexProps) {
  return (
    <Layout letters={letters} type={ContentType.Page} content={null} letter={null} noSearch={false}>
      <ContentArea>
        <h1 className="h2">Viking Language dictionary</h1>
        <p>Online dictionary for most common Old Norse / Old Icelandic words.
          To accompany &quot;Viking Language&quot; study book.</p>

        <p>The dictionary contains over 2000 translations
          from Old Norse to English. While it will not cover all words in Sagas,
          it should contain definitions of most common Old Norse words.
        </p>

        <p>Data in this dictionary is based on data made openly available by the publisher.</p>

        <Link href="/search">
         <a className="button">Search the dictionary</a>
        </Link>

        <br />
        <br />

        <h2>Other dictionaries</h2>
        <p>There are much larger and more complete dictionaries
          covering sagas and other Old Norse text.</p>

        <p>Cleasby / Vigfusson dictionary is one of the largest sources,
          but many prefer &quot;A Concise Dictionary of Old Icelandic&quot;, which is
          an easier-to-read version of the Cleasby / Vigfusson book.
        </p>

        <ul>
          <li>
            <ExternalLink
              title="Cleasby and Vigfusson Old Norse Dictionary"
              href="https://cleasby-vigfusson-dictionary.vercel.app/"
            />
          </li>
          <li>
            <ExternalLink
              title="A Concise Dictionary of Old Icelandic"
              href="https://old-icelandic.vercel.app/"
            />
          </li>
          <li>
            <ExternalLink
              title="Dictionary of the Old Norwegian Language"
              href="https://old-norwegian-dictionary.vercel.app/"
            />
          </li>
        </ul>
      </ContentArea>
    </Layout>
  )
}
