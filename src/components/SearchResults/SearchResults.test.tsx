import ReactDOM from 'react-dom/client'
import renderer from 'react-test-renderer'
import SearchResults from './index'

const words = [
  {
    headword: 'þess',
    definition: 'm/n gen sg of sá/þat',
    isCommon: false,
    slug: 'thess',
    foundIn: ['In headword'],
  },
  {
    headword: 'þessi',
    definition: '(also sjá) <f þessi, n þetta, m acc sg þenna, m dat sg & all dat pl þessum~þeima, m/n gen sg þessa, m nom pl þessir, all gen pl þessa~þessar(r)a, f acc sg þessa, f dat sg þessi~þessar(r)i, f gen sg þessar~þessar(r)ar, n dat sg þessu~þvísa, n nom/acc pl þessi> dem pron this, these',
    isCommon: true,
    slug: 'thessi',
    foundIn: ['In headword'],
  },
  {
    headword: 'þetta',
    definition: 'n nom/acc sg of þessi',
    isCommon: false,
    slug: 'thetta',
    foundIn: ['In headword'],
  },
  {
    headword: 'þér',
    definition: '<acc/dat yðr, gen yðarr~yðvarr> pl pron you; þér frequent dat of þú; see ér',
    isCommon: false,
    slug: 'ther',
    foundIn: ['In headword'],
  },
  {
    headword: 'Þiðrandi',
    definition: 'm Thidrandi (personal name)',
    isCommon: false,
    slug: 'thidrandi',
    foundIn: ['In headword'],
  },
  {
    headword: 'þiggja',
    definition: '<þiggr, þá, þágu, þeginn> vb (V) to accept; receive; accept lodgings',
    isCommon: false,
    slug: 'thiggja',
    foundIn: ['In headword'],
  },
  {
    headword: 'þinglogi',
    definition: 'adj indecl engagement breaker',
    isCommon: false,
    slug: 'thinglogi',
    foundIn: ['In headword'],
  },
]

describe('SearchResults component', () => {
  test('Does not crash', () => {
    const div = document.createElement('div')
    const root = ReactDOM.createRoot(div)
    root.render(<SearchResults words={words} />)
  })

  test('Matches snapshot', () => {
    const tree = renderer.create(<SearchResults words={words} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
