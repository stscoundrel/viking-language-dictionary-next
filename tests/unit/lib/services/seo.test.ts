import { ContentType } from 'lib/models/content-types'
import { getSeo } from 'lib/services/seo'

describe('SEO / meta tags tests', () => {
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
    {
      headword: 'þetta',
      definition: 'n nom/acc sg of þessi',
      isCommon: false,
      slug: 'thetta',
    },
    {
      headword: 'þér',
      definition: '<acc/dat yðr, gen yðarr~yðvarr> pl pron you; þér frequent dat of þú; see ér',
      isCommon: false,
      slug: 'ther',
    },
    {
      headword: 'Þiðrandi',
      definition: 'm Thidrandi (personal name)',
      isCommon: false,
      slug: 'thidrandi',
    },
    {
      headword: 'þiggja',
      definition: '<þiggr, þá, þágu, þeginn> vb (V) to accept; receive; accept lodgings',
      isCommon: false,
      slug: 'thiggja',
    },
    {
      headword: 'þinglogi',
      definition: 'adj indecl engagement breaker',
      isCommon: false,
      slug: 'thinglogi',
    },
  ]

  test('Handles "word" seo fields', () => {
    const expected = {
      title: 'Viking Language Dictionary - Þess',
      description: 'Meaning of Old Norse / Old Icelandic word "þess"',
    }

    const result = getSeo(words[0], ContentType.Word)

    expect(result).toEqual(expected)
  })

  test('Handles "letter" seo fields', () => {
    const expected = {
      title: 'Viking Language - Common words starting with letter Þ',
      description: 'Meanings of common Old Norse words starting with "Þ", such as þess, þessi, þetta and þér',
    }

    const result = getSeo(words, ContentType.Letter)

    expect(result).toEqual(expected)
  })

  test('Handles default response', () => {
    const expected = {
      title: 'Viking Language - Simple Old Norse Dictionary',
      description: 'Compact dictionary of Old Norse - 2000+ common Old Norse words & definitions',
    }

    const result = getSeo()

    expect(result).toEqual(expected)
  })
})
