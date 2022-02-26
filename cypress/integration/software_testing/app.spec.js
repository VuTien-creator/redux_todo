describe("Software Testing", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000");
    });

    it("Should add if data is OK", () => {
        cy.get("input[name=name]").type("Right Todo").should("have.value", "Right Todo");
        cy.get("#add_todo").click();
        cy.get("#todo_container").should("contain", "Right Todo");
    });
});
