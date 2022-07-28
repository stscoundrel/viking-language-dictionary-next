import { getAllWords } from 'lib/services/dictionary'
import { searchDictionary } from 'lib/services/search'

describe('Search tests', () => {
  const dictionary = getAllWords()

  test('Returns results in correct formatting', () => {
    const result = searchDictionary('allfríðr', dictionary)

    const expected = {
      headword: 'allfríðr',
      definition: 'adj very beautiful',
      isCommon: false,
      slug: 'allfridr',
      foundIn: ['In headword: <mark>allfríðr</mark>'],
    }

    expect(result[0]).toEqual(expected)
  })

  test('Finds results from descriptions', () => {
    const result = searchDictionary('alfaðir', dictionary)

    const expected = {
      headword: 'Al(l)fǫðr ',
      definition: '(also Alfaðir and Alfǫðr) <-s> m ‘All-father,’ father of all, Odin',
      isCommon: false,
      slug: 'al(l)fdr',
      foundIn: [
        '(also <mark>alfaðir</mark> and Alfǫðr) <-s> <abbr title="masculine">m </abbr>‘All-father,’ father o<abbr title="feminine">f </abbr>all, Odin',
      ],

    }

    expect(result[0]).toEqual(expected)
  })

  test('Finds results from slug', () => {
    const result = searchDictionary('thvinnill', dictionary)

    const expected = {
      headword: 'Þvinnill',
      definition: '<-s> m Thvinnil, name of a Viking (personal name)',
      isCommon: false,
      slug: 'thvinnill',
      foundIn: ['In headword: Þvinnill'],
    }

    expect(result[0]).toEqual(expected)
  })
})
