/// <reference types="cypress" />
it('has the full nested object in the environment', () => {
  // see the full env object
  console.log(Cypress.env())

  expect(Cypress.env('person')).to.deep.equal({
    name: {
      first: 'Joe',
      last: 'Smith'
    },
    age: 18
  })
})
