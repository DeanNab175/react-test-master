describe("Examine employees list content and functionality", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/#/view");
  });
  it("contains correct information", () => {
    cy.get("[data-cy=header]").should("contain", "View Employees");
  });

  it("Validate search by name when no match found", () => {
    cy.get("[data-cy=searchInput]").type("John").trigger("change");
    cy.get("[data-cy=noEmployee]").should("be.visible");
  });

  it("Validate search by name match name", () => {
    cy.get("[data-cy=searchInput]").type("Ab").trigger("change");
    cy.get("[data-cy^=employee-]").contains("Abe Simpson").should("be.visible");
  });

  it("validates filter by status select option", () => {
    cy.get("[data-cy=StatusFilterInput]").select("Active").should("have.value", "ACTIVE");
    cy.get("[data-cy=StatusFilterInput]").select("Leave of absence")
      .should("have.value", "LEAVE_OF_ABSENCE");
    cy.get("[data-cy=StatusFilterInput]").select("Terminated")
      .should("have.value", "TERMINATED");
  });

  it("validates filter by status for non existing status", () => {
    cy.get("[data-cy=StatusFilterInput]").select("Terminated");
    cy.get("[data-cy=noEmployee]").should("be.visible");
  });

  it("validates filter by status for existing status", () => {
    cy.get("[data-cy=StatusFilterInput]").select("Active");
    cy.get("[data-cy^=employee-]").contains("ACTIVE").should("be.visible");
  });
});
