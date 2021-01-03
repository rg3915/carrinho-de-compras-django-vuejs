let name = ['Apontador', 'Borracha', 'Caneta azul', 'Lápis', 'Tesoura']

describe('Input form', () => {
  it('focuses input on load', () => {
    cy.visit('http://localhost:8000/shopping/shopping/')

    for (var i = 0; i < 5; i++) {
      cy.get('#btnAddLine').click()
      var randName = name[Math.floor(Math.random() * name.length)]
      let randQuantity = Math.floor(Math.random() * 20)
      let randPrice = Math.floor(Math.random() * 10)
      cy.get('#name'+i).type(randName)
      cy.get('#quantity'+i).clear()
      cy.get('#quantity'+i).type(randQuantity)
      cy.get('#price'+i).clear()
      cy.get('#price'+i).type(randPrice)
      cy.wait(500)
      // cy.get('#btnSubmit').click()
    }
  })
})
