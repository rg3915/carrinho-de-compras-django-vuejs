describe('Input form', () => {
  it('focuses input on load', () => {
    cy.visit('http://localhost:8000/shopping/shopping/')

    cy.get('#customer').type('Regis')
    for (var i = 0; i < 5; i++) {
      let randName = Math.floor(Math.random() * 10) + 1
      let randQuantity = Math.floor(Math.random() * 20)
      let randPrice = Math.floor(Math.random() * 10)
      cy.get('#productName').select(randName.toString())
      cy.get('#productQuantity').clear()
      cy.get('#productQuantity').type(randQuantity)
      cy.get('#productPrice').clear()
      cy.get('#productPrice').type(randPrice)
      cy.wait(500)
      cy.get('#btnSubmit').click()
    }
  })
})
