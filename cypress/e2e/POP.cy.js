import { Login } from '../pages/OLD_Login';

describe("Test strony logowania z uzyciem Page Object Pattern", () => {
    const loginPage = new Login

    beforeEach(() => {
        loginPage.navigate();
    });

    it("Prawidlowe elementy sa widoczne na stronie logowania", () => {
        loginPage.validateLoginTitle();
        loginPage.validateInputs();
        loginPage.validateButton();
        loginPage.validatePasswordLink();
    });
});