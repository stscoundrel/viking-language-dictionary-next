describe('Word pages', () => {
  it('Loads Alheimskr', () => {
    cy.visit('/word/alheimskr')
  })

  it('Loads Jafnhár', () => {
    cy.visit('/word/jafnhar')
  })

  it('Loads Regna', () => {
    cy.visit('/word/regna')
  })

  it('Loads Ǫku-þórr', () => {
    cy.visit('/word/ku-thorr')
  })
})

export { };
