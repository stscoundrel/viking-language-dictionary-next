import { DictionaryEntry as RawDictionaryEntry } from 'viking-language-dictionary/dist/models'

export type OriginalDictionaryEntry = RawDictionaryEntry

export interface DictionaryEntry extends RawDictionaryEntry {
    slug: string,
}
