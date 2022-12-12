describe("Examine the modification of employee", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/#/view");
  });

  it("navigate correctly to edit page for an employee", () => {
    cy.get("button[data-cy^=editButton-").click();
    cy.url().should("include", "http://localhost:3000/#/edit/");
    cy.get("[data-cy=header]").should("contain", "Edit employee");
  });
});
  