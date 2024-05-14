export class HomePage {
    logout() {
        cy.get("#open-navigation-menu-mobile").scrollIntoView().click();
        cy.contains('Log out');
    }
}