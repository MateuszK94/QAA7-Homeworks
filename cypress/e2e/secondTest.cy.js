describe("Test 2: Logowanie i wylogowanie uzytkownika", () => {
    it("Powinien zalogowac uzytkownika i wylogowac go", () => {
      // Otwarcie strony logowania
      cy.visit("https://www.edu.goit.global/account/login");
  
      // Polecenie logowania - Wlasny uzytkownik
      cy.get('input[name="email"]').type("testowyqa@qa.team");
      cy.get('input[name="password"]').type("QA!automation-1");
      cy.contains("Log in").click();
  
       // Polecenie wylogowania - wlasny użytkownik
    cy.get("#open-navigation-menu-mobile").scrollIntoView().click(); // Przewiń do widoku ikony użytkownika i kliknij na nią
    cy.contains("Log out").click(); // Kliknij na przycisk wylogowania
    cy.url().should("include", "/account/login"); // Sprawdzenie czy wrócono na stronę logowania
  });
});