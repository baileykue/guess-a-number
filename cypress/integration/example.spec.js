
describe('Example Test', ()=>{
    before(()=>{
        cy.visit('/');
    });

    describe('HTML elements', ()=>{   
        it('contains the alchemy logo', ()=>{
            cy.get('#button').should('be.visible');
        });
    });
    
describe ('user interactions', =>(){
    it('sumbits a users guess ad compares to the generated number', =>(){
        cy.get('#button').click();
        cy.get('input').should('be.visible');
    })
})

});
