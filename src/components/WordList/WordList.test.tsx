import ReactDOM from 'react-dom/client'
import renderer from 'react-test-renderer'
import WordList from './index'

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

describe('WordList component', () => {
  test('Does not crash', () => {
    const div = document.createElement('div')
    const root = ReactDOM.createRoot(div)
    root.render(<WordList words={words} />)
  })

  test('Matches snapshot', () => {
    const tree = renderer.create(<WordList words={words} />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('Renders correct amount of words', () => {
    const tree = renderer.create(<WordList words={words} />)
    const { root } = tree

    expect(root.findAllByType('ul').length).toEqual(1)
    expect(root.findAllByType('li').length).toEqual(7)
  })
})
