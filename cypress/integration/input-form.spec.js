let name = ['Água', 'Refrigerante', 'Suco de laranja', 'Suco de uva', 'Suco de melancia']

describe('Input form', () => {
  it('focuses input on load', () => {
    cy.visit('http://localhost:8000/shopping/shopping/')

    for (var i = 0; i < 5; i++) {
      var randName = name[Math.floor(Math.random() * name.length)]
      let randQuantity = Math.floor(Math.random() * 20)
      let randPrice = Math.floor(Math.random() * 10)
      cy.get('#productName').type(randName)
      cy.get('#productQuantity').clear()
      cy.get('#productQuantity').type(randQuantity)
      cy.get('#productPrice').clear()
      cy.get('#productPrice').type(randPrice)
      cy.wait(500)
      cy.get('#btnSubmit').click()
    }
  })
})
