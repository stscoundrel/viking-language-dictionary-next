import { joinWithConj } from 'teljari'
import { capitalize } from 'lib/utils/strings'
import { ContentType } from 'lib/models/content-types'
import { DictionaryEntry } from 'lib/models/dictionary'

interface SEO {
  title: string,
  description: string
}

/**
 * Get meta tags by type.
 */
export const getSeo = (
  content: DictionaryEntry | DictionaryEntry[] | null,
  type: ContentType,
): SEO => {
  if (content) {
    if (type === ContentType.Word && !Array.isArray(content)) {
      return {
        title: `Viking Language Dictionary - ${capitalize(content.headword)}`,
        description: `Meaning of Old Norse / Old Icelandic word "${content.headword.toLowerCase()}"`,
      }
    }

    if (type === ContentType.Letter && Array.isArray(content)) {
      const firstWords = content.slice(0, 4).map((word) => word.headword.toLowerCase())
      return {
        title: `Viking Language - Common words starting with letter ${firstWords[0].charAt(0).toUpperCase()}`,
        description: `Meanings of common Old Norse words starting with letter "${firstWords[0].charAt(0).toUpperCase()}", such as ${joinWithConj(firstWords)}`,
      }
    }
  }

  // Default tags.
  return {
    title: 'Viking Language - Simple Old Norse Dictionary',
    description: 'Compact dictionary of Old Norse - 2000+ common Old Norse words & definitions',
  }
}

export default getSeo
