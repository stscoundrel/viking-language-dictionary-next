import {
  getAbbreviations,
  addAbbreviationsToContent,
} from 'lib/services/abbreviations'

describe('Abbreviations tests', () => {
  const entry = {
    headword: 'Þorbrandssynir ',
    definition: 'm pl sons of Thorbrand',
    isCommon: false,
    slug: 'thorbrandssynir',
  }

  test('Abbreviations have expected content', () => {
    const result = getAbbreviations(entry)

    const expected = [
      {
        abbreviation: 'f ',
        explanation: 'feminine', // False positive...
      },
      {
        abbreviation: 'm ',
        explanation: 'masculine',
      },
      {
        abbreviation: 'pl',
        explanation: 'plural',
      },
    ]

    expect(result).toEqual(expected)
  })

  test('Adds abbr tags to content', () => {
    const abbreviations = getAbbreviations(entry)

    const result = addAbbreviationsToContent(entry.definition, abbreviations)
    const expected = '<abbr title="masculine">m </abbr><abbr title="plural">pl</abbr> sons o<abbr title="feminine">f </abbr>Thorbrand'

    expect(result).toEqual(expected)
  })
})
