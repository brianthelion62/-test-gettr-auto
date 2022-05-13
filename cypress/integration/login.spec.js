const uuid = () => Cypress._.random(0, 1e6)
const id = uuid()
const postText = `${id}post`
//cy.get('input').type(testname);


describe("GETTR login test", () => {
    it("login with email", () => {
        cy.visit("https://web-shadow-qa4.getter-dev.tk/")
        cy.contains('Accept All Cookies').click()
        //cy.contains('Log In').click()
        cy.get('.text-link').click()
        cy.contains('Log in with email or username').click()
        cy.get('#email').type('automation')
        cy.get('#password').type('automation')

        // cy.wait(500)
        // cy.get('.action-buttons').click()
        // cy.get('.toastlink').click()
    })
})
