import { ContentType } from 'lib/models/content-types'
import { getSchema } from 'lib/services/schema'

describe('Schema structure tests', () => {
  process.env.NEXT_PUBLIC_SITE_URL = 'https://viking-language-dictionary.test'

  const words = [
    {
      headword: 'þess',
      definition: 'm/n gen sg of sá/þat',
      isCommon: false,
      slug: 'thess',
    },
    {
      headword: 'þessi',
      definition: '(also sjá) <f þessi, n þetta, m acc sg þenna, m dat sg & all dat pl þessum~þeima, m/n gen sg þessa, m nom pl þessir, all gen pl þessa~þessar(r)a, f acc sg þessa, f dat sg þessi~þessar(r)i, f gen sg þessar~þessar(r)ar, n dat sg þessu~þvísa, n nom/acc pl þessi> dem pron this, these',
      isCommon: true,
      slug: 'thessi',
    },
  ]

  test('Handles "word" Schema', () => {
    const expected = JSON.stringify(
      {
        '@context': 'https://schema.org/',
        '@type': 'DefinedTerm',
        '@id': 'https://viking-language-dictionary.test/word/thess',
        name: 'Viking Language Dictionary - Þess',
        description: 'm/n gen sg of sá/þat',
        inDefinedTermSet: 'https://viking-language-dictionary.test',
      },
    )

    const result = getSchema(words[0], ContentType.Word)

    expect(result).toEqual(expected)
  })

  test('Handles "letter" Schema', () => {
    const expected = JSON.stringify(
      {
        '@context': 'https://schema.org/',
        '@type': 'DefinedTermSet',
        '@id': 'https://viking-language-dictionary.test/letter/th',
        name: 'Viking Language Dictionary - Letter Þ',
        description: 'Meanings of common Old Norse words starting with letter Þ',
      },
    )

    const result = getSchema(words, ContentType.Letter)

    expect(result).toEqual(expected)
  })

  test('Handles "breadcrumbs" Schema', () => {
    const expected = JSON.stringify(
      {
        '@context': 'https://schema.org/',
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'First breadcrumb',
            item: 'https://viking-language-dictionary.test/first-link',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Second breadcrumb',
            item: 'https://viking-language-dictionary.test/second-link',
          },
        ],
      },
    )

    const breadcrumbs = [
      {
        label: 'First breadcrumb',
        url: '/first-link',
      },
      {
        label: 'Second breadcrumb',
        url: '/second-link',
      },
    ]
    const result = getSchema(breadcrumbs, ContentType.Breadcrumbs)

    expect(result).toEqual(expected)
  })

  test('Handles "default" Schema', () => {
    const expected = JSON.stringify(
      {
        '@context': 'https://schema.org/',
        '@type': 'DefinedTermSet',
        '@id': 'https://viking-language-dictionary.test',
        name: 'Viking Language Dictionary',
        description: 'Compact dictionary of Old Norse',
      },
    )

    const result = getSchema()

    expect(result).toEqual(expected)
  })
})
