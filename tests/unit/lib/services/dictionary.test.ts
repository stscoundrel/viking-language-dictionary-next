import { getDictionary } from 'viking-language-dictionary'
import {
  getAllWords, getByLetter, getWord, getAlphabet,
} from 'lib/services/dictionary'
import { matchesSchema } from 'jafningjar'

describe('Dictionary tests', () => {
  const dictionary = getAllWords()
  test('Dictionary is not identical with original source.', () => {
    const originalDictionary = getDictionary()

    expect(originalDictionary).not.toMatchObject(dictionary)
  })

  test('Enrichened dictionary has equal amount of entries as the original one', () => {
    expect(getDictionary().length).toBe(getAllWords().length)
  })

  test('Dictionary has added url slugs to source', () => {
    dictionary.forEach((entry) => {
      expect(Object.keys(entry)).toEqual(['headword', 'definition', 'isCommon', 'slug'])
    })
  })

  test('Dictionary slugs are unique', () => {
    const slugs = new Set()

    dictionary.forEach((entry) => {
      slugs.add(entry.slug)
    })

    expect(slugs.size).toEqual(dictionary.length)
  })

  test('Dictionary gets words by letter', () => {
    const aWords = getByLetter('A')
    const þWords = getByLetter('þ')

    expect(aWords.length).toBe(104)
    expect(þWords.length).toBe(125)

    aWords.forEach((entry) => {
      expect(entry.headword.charAt(0).toLowerCase()).toBe('a')
    })

    þWords.forEach((entry) => {
      expect(entry.headword.charAt(0).toLowerCase()).toBe('þ')
    })
  })

  test('Dictionary gets individual words by slug', () => {
    const word1 = getWord('ambott')
    const word2 = getWord('hringariki')
    const word3 = getWord('thidrandi')

    expect(word1.headword.toLowerCase()).toBe('ambótt')
    expect(word1.slug).toBe('ambott')
    expect(word1.isCommon).toBeFalsy()
    expect(word1.definition).toEqual('var of ambátt')

    expect(word2.headword.toLowerCase()).toBe('hringaríki')
    expect(word2.slug).toBe('hringariki')
    expect(word2.isCommon).toBeFalsy()
    expect(word2.definition).toEqual('n Hringariki (place name) Ringerike')

    expect(word3.headword.toLowerCase()).toBe('þiðrandi')
    expect(word3.slug).toBe('thidrandi')
    expect(word3.isCommon).toBeFalsy()
    expect(word3.definition).toEqual('m Thidrandi (personal name)')
  })

  test('Dictionary gets alphabet constants with slugs', () => {
    const alphabet = getAlphabet()

    const expected = {
      letter: '',
      slug: '',
    }

    alphabet.forEach((entry) => {
      expect(matchesSchema(entry, expected)).toBeTruthy()
    })
  })
})
