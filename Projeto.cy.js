//método do Cypress que tem dois parametros - feature que está sendo textado e uma função anônima
describe ('Novidades', () => { 

    //cenário de teste que vai ser executado - tem dois parametros - descrição do cenário de teste e a 
    //função que vai ser executada
    it('Cadastrar e-mail com sucesso na Newsletter', () => {
        //acessar a minha aplicaçãp
        cy.visit('/')
            .get('#top_header') //para confirmar que a tela abriu

        //criar os steps / ações
        //selecionar esse elemento
        //preencher um campo
        cy.get('.form-control')
            .type("agnesjaque@yahoo.com")

        //clique em um elemento
        cy.get('.clear .theme-btn-one.btn_md')
        .click()

        //.swal2-confirm'

        cy.get('#swal2-title')
        .should('be.visible') //verificando se esse elemento está rodando na tela
        .should('have.text', 'Success')
    }) 
    
    it('Cadastrar e-mail com sucesso na Newsletter apertando enter', () => {
        
        cy.visit('/')
            .get('#top_header')

        cy.get('.form-control')
            .type('agnesjaque@yahoo.com{enter}')


        cy.get('#swal2-title')
        .should('be.visible')
        .should('have.text', 'Success')
    }) 

    it('Verificar fechamento de mensagem com sucesso', () => {
        cy.visit('/')
            .get('#top_header')

        cy.get('.form-control')
            .type('agnesjaque@yahoo.com')

        cy.get('.clear .theme-btn-one.btn_md')
        .click()

        cy.get('.swal2-actions > .swal2-confirm')
        .click()

        cy.wait(1000)

        cy.get('#swal2-title')
        .should('not.exist') 

    }) 
})
