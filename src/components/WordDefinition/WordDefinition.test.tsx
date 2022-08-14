import ReactDOM from 'react-dom/client'
import renderer from 'react-test-renderer'
import WordDefinition from './index'

const word = {
  headword: 'Þiðrandi',
  definition: 'm Thidrandi (personal name)',
  isCommon: false,
  slug: 'thidrandi',
}

const abbreviations = [
  {
    abbreviation: 'n.',
    explanation: 'Neutrum.',
  },
  {
    abbreviation: 's.',
    explanation: 'substantiv.',
  },
]

describe('WordDefinition component', () => {
  test('Does not crash', () => {
    const div = document.createElement('div')
    const root = ReactDOM.createRoot(div)
    root.render(<WordDefinition data={word} abbreviations={abbreviations} />)
  })

  test('Matches snapshot', () => {
    const tree = renderer.create(
      <WordDefinition data={word} abbreviations={abbreviations} />,
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('Has correct label', () => {
    const tree = renderer.create(<WordDefinition data={word} abbreviations={abbreviations} />)
    const { root } = tree

    expect(root.findByType('h1').children).toEqual(['Þiðrandi'])
  })
})
