import ExternalLink from 'components/ExternalLink'
import LetterLink from 'components/LetterLink'
import ContentArea from 'components/ContentArea'
import { AlphabetLetter } from 'lib/services/dictionary'
import styles from './Footer.module.scss'

interface FooterProps{
  letters: AlphabetLetter[]
}

export default function Footer({ letters }: FooterProps) {
  return (
    <footer className={styles.section}>
      <div className="container">

        <ContentArea>
          <h2>About</h2>
          <p><em>`Viking Language`</em> is a book series by
          <ExternalLink
            title="Jesse L. Byock"
            href="http://www.viking.ucla.edu/"
          />
          which teaches basics of Old Norse language.<br />
          The books are accompanied by a small dictionary at the end,
          providing learners a place to look for translations of the books passages.</p>

          <p>This searchable dictionary is compiled from a
          <ExternalLink
              title="blog post"
              href="https://oldnorse.org/2020/09/06/the-old-norse-dictionary/"
            />
           by the books publisher
          <ExternalLink
              title="Jules William Press"
              href="https://juleswilliampress.com/"
            />
          </p>

          <p>All rights to Viking Language series belong to
            Jules William Press and Jesse L. Byock.
            Data in this dictionary is based on data made openly available by the publisher.
          </p>
        </ContentArea>

        <ContentArea>
          <h3>Old Norse language</h3>
          <p>Old Norse was a North Germanic language that was spoken by inhabitants of
          Scandinavia and their overseas settlements from about the 7th to the 15th centuries.</p>

          <p>Also known as &quot;the viking language&quot;,
          &quot;Old Nordic&quot;, or
          &quot;Old Scandinavian&quot;</p>
        </ContentArea>

        <div className={styles.navs}>
          <nav className={styles.nav}>
            <h4 className={styles.navTitle}>Dictionary project</h4>
            <ul>
              <li>
                <ExternalLink
                  title="Source code"
                  href="https://github.com/stscoundrel/viking-language-dictionary-next"
                />
              </li>
              <li>
                <ExternalLink
                  title="Data source"
                  href="https://github.com/stscoundrel/viking-language-dictionary"
                />
              </li>
              <li>
                <ExternalLink
                  title="Abbreviations"
                  href="https://github.com/stscoundrel/viking-language-dictionary-abbrevations"
                />
              </li>
            </ul>
          </nav>

          <nav className={styles.nav}>
            <h4 className={styles.navTitle}>Related dictionary projects</h4>
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
                  href="https://viking-language-dictionary.vercel.app/"
                />
              </li>
              <li>
                <ExternalLink
                  title="Old Norse Alphabet"
                  href="https://github.com/stscoundrel/old-norse-alphabet"
                />
              </li>
            </ul>
          </nav>

          <nav className={styles.nav}>
            <h4 className={styles.navTitle}>Quick links</h4>
            <ul className={styles.navColumns}>
              {letters.map((entry) => (
                <li className={styles.navColumnItem} key={entry.slug}>
                  <LetterLink letter={entry} />
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <small className={styles.copyright}>{`Copyright © 2022 - ${new Date().getFullYear()}`}
          <br />
          <ExternalLink
            title="Sampo Silvennoinen / StScoundrel"
            href="https://github.com/stscoundrel"
          />
        </small>
      </div>
    </footer>
  )
}
