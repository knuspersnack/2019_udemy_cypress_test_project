describe("UI TESTS", ()=>{
/*     it("should navigate to google´s website", ()=>{
        cy.visit("www.heute.de");
    }) */

    beforeEach(()=>{
        cy.visit("http://localhost:3000");
    })

    it("should load the login page correctly", ()=>{
        cy.get('[data-cy=login-text]').should("have.length", 1);
        cy.get('[data-cy=login-text]').should("be.visible");
    })

    it("should not allow login when user name is not provided", ()=>{
        cy.get('[data-cy=password]').type("123456");
        cy.get('[data-cy=submit-button]').click();
        //check that we are still on the same page
        cy.get('[data-cy=login-text]').should("have.length", 1);
        cy.get('[data-cy=homepage]').should("have.length", 0);
    })

    it("should not allow login when user password is not provided", ()=>{
        cy.get('[data-cy=email]').type("john@doo.com");
        cy.get('[data-cy=submit-button]').click();
        //check that we are still on the same page
        cy.get('[data-cy=login-text]').should("have.length", 1);
        cy.get('[data-cy=homepage]').should("have.length", 0);
    })

    it("should allow login to the homepage with valid creds", ()=>{
        cy.get('[data-cy=email]').type("john@doo.com");
        cy.get('[data-cy=password]').type("123456");
        cy.get('[data-cy=submit-button]').click();
        //check that we are still on the same page
        cy.get('[data-cy=logout-btn]').should("be.visible");
        cy.get('[data-cy=logout-btn]').should("have.class", "btn-sm");
        cy.get('[data-cy=logout-btn]').should("not.have.class", "test-class");
    })

    it("should contain correct input field values", ()=>{
        cy.get('[data-cy=email]').type("smith@doo.com");
        cy.get('[data-cy=email]').should("have.value", "smith@doo.com");
        cy.get('[data-cy=password]').type("123456");
        cy.get('[data-cy=password]').should("have.value", "123456");
    })

    it("should be on the logout page", ()=>{
        cy.get('[data-cy=email]').type("john@doo.com");
        cy.get('[data-cy=password]').type("123456");
        cy.get('[data-cy=submit-button]').click();
        cy.get('[data-cy=logout-btn]').click();
        //should be on the logout page
        cy.get('[data-cy=logout-text]').should("contain", "You are now ");
        cy.get('[data-cy=logout-text]').should("not.contain", "Bla bla");
    })

    it("should have existing elements", ()=>{
        cy.get('[data-cy=login-text]').should("exist");
        cy.get('[data-cy=logout-text]').should("not.exist");
        // cy.wait(1000);
    })

    it("should fail and create video and screenshot", ()=>{
        cy.get('[data-cy=zzzzz]').should("exist");
        // cy.wait(1000);
    })
})