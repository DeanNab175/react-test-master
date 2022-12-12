describe("Examine the creation of employees", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/#/create");
  });

  it("validates empty submitted fields properly", () => {
    cy.get("[data-cy=saveButton]").click();
    cy.get("[data-cy=firstNameErrorMessage]").should("contain", "Required");
    cy.get("[data-cy=surnameErrorMessage]").should("contain", "Required");
    cy.get("[data-cy=emailErrorMessage]").should("contain", "Required");
    cy.get("[data-cy=birthDateErrorMessage]").should("contain", "Required");
    cy.get("[data-cy=jobTitleErrorMessage]").should("contain", "Required");
    cy.get("[data-cy=statusErrorMessage]").should("contain", "Required");
  });

  it("validates too long submitted values properly", () => {
    cy.get("[data-cy=firstNameInput]").type(
      "JohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohn"
    );
    cy.get("[data-cy=surnameInput]").type(
      "DoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoe"
    );
    cy.get("[data-cy=emailInput]").type(
      "JohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohn.doe@example.com"
    );
    cy.get("[data-cy=jobTitleInput]").type(
      "DeveloperDeveloperDeveloperDeveloperDeveloperDeveloperDeveloperDeveloperDeveloperDeveloperDeveloperDeveloperDeveloperDeveloperDeveloperDeveloperDeveloperDeveloperDeveloperDeveloperDeveloperDeveloperDeveloperDeveloperDeveloperDeveloperDeveloperDeveloperDeveloperDeveloperDeveloper"
    );
    cy.get("[data-cy=saveButton]").click();
    cy.get("[data-cy=firstNameErrorMessage]").should(
      "contain",
      "The maximum number of characters is 255"
    );
    cy.get("[data-cy=surnameErrorMessage]").should(
      "contain",
      "The maximum number of characters is 255"
    );
    cy.get("[data-cy=emailErrorMessage]").should(
      "contain",
      "The maximum number of characters is 255"
    );
  });

  it("validates invalid email address properly", () => {
    cy.get("[data-cy=emailInput]").type("john.doe.example.com");
    cy.get("[data-cy=saveButton]").click();
    cy.get("[data-cy=emailErrorMessage]").should(
      "contain",
      "Invalid email address"
    );
  });

  it("validates invalid date for over the retired age", () => {
    cy.get("[data-cy=birthDateInput]").type("1957-12-10");
    cy.get("[data-cy=saveButton]").click();
    cy.get("[data-cy=birthDateErrorMessage]").should(
      "contain",
      "You are over the retired age"
    );
  });

  it("validates invalid date at least 18 years", () => {
    cy.get("[data-cy=birthDateInput]").type("2005-01-01");
    cy.get("[data-cy=saveButton]").click();
    cy.get("[data-cy=birthDateErrorMessage]").should(
      "contain",
      "Should be at least 18 years"
    );
  });

  it("validates select status value not empty", () => {
    cy.get("[data-cy=statusInput]").select("Please select a status")
    cy.get("[data-cy=saveButton]").click();
    cy.get("[data-cy=statusErrorMessage]").should(
      "contain",
      "Required"
    );
  });

  it("validates select value for each option", () => {
    cy.get("[data-cy=statusInput]").select("Active").should("have.value", "ACTIVE");
    cy.get("[data-cy=statusInput]").select("Leave of absence").should("have.value", "LEAVE_OF_ABSENCE");
    cy.get("[data-cy=statusInput]").select("Terminated").should("have.value", "TERMINATED");
  });
});
