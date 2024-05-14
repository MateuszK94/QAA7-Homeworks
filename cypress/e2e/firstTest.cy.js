describe("Test 1: Logowanie i wylogowanie użytkownika", () => {
  it("Powinien zalogować użytkownika i wylogować go", () => {
    // Otwarcie strony logowania
    cy.visit("https://www.edu.goit.global/account/login");

    // Polecenie logowania - Testowy użytkownik
    cy.get("#user_email").type("user888@gmail.com");
    cy.get("#user_password").type("1234567890");
    cy.contains("Log in").click();

    // Polecenie wylogowania - Testowy użytkownik
    cy.get("#open-navigation-menu-mobile").scrollIntoView().click(); // Przewiń do widoku ikony użytkownika i kliknij na nią
    cy.contains("Log out").click(); // Kliknij na przycisk wylogowania
    cy.url().should("include", "/account/login"); // Sprawdzenie czy wrócono na stronę logowania
  });
});
