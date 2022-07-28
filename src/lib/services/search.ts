import { markWords } from 'markari'
import { getAbbreviations, addAbbreviationsToContent } from 'lib/services/abbreviations'
import { DictionaryEntry } from 'lib/models/dictionary'

export interface SearchResult extends DictionaryEntry {
  foundIn: string[],
}

type Criteria = 'headword' | 'definition'

const formatResults = (results, search, criteria): SearchResult[] => {
  const formattedResults = results.map((result) => {
    const foundIn: string[] = []

    if (criteria.includes('definition')) {
      if (result.definition.toLowerCase().includes(search.toLowerCase())) {
        const abbreviations = getAbbreviations(result)
        const highlighterDefinition = markWords(search, result.definition)
        const abbrTaggedDefinition = addAbbreviationsToContent(
          highlighterDefinition,
          abbreviations,
        )
        foundIn.push(abbrTaggedDefinition)
      }
    }

    if (foundIn.length === 0) {
      const highlightedHeadword = markWords(search, result.headword)
      foundIn.push(`In headword: ${highlightedHeadword}`)
    }

    return {
      ...result,
      foundIn,
    }
  })

  return formattedResults
}

const entryIsMatch = (entry: DictionaryEntry, search: string, criteria: Criteria[]): boolean => {
  if (criteria.includes('headword')) {
    if (entry.headword.toLowerCase().includes(search)) {
      return true;
    }

    if (entry.slug.includes(search)) {
      return true;
    }
  }

  if (criteria.includes('definition')) {
    if (entry.definition.toLowerCase().includes(search)) {
      return true;
    }
  }

  return false;
}

export const searchDictionary = (
  search: string,
  dictionary: DictionaryEntry[],
  criteria: Criteria[] = ['headword', 'definition'],
): SearchResult[] => {
  const filteredSearch = search.toLowerCase()
  const results = dictionary.filter((entry) => entryIsMatch(entry, filteredSearch, criteria))
  const formattedResult = formatResults(results, search, criteria)

  return formattedResult
}

export default searchDictionary
