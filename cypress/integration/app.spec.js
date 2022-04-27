/* eslint-disable no-undef */

const todos = ["First Todo", "Second Todo", "Third Todo"];

const todoInputSelector = "input[name=name]";
const todosContainerSelector = "#todo_container";
const addTodoButtonSelector = "#add_todo";
const searchInputSelector = "input[placeholder='Input search text']";

describe("Software Testing", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000");
    });

    it("Should add a new todo if data is OK", () => {
        cy.get(todoInputSelector).type(todos[0]).should("have.value", todos[0]);
        cy.get(addTodoButtonSelector).click();
        cy.get(todosContainerSelector).should("contain", todos[0]);
    });

    it("Should not add a new todo if data is bad", () => {
        cy.get(addTodoButtonSelector).click();
        cy.get(todosContainerSelector).should("to.be.empty");
    });

    it("Should toggle todo when click on input", () => {
        cy.get(todoInputSelector).type(todos[0]).should("have.value", todos[0]);
        cy.get(addTodoButtonSelector).click();

        cy.get(todosContainerSelector).children().should("have.length", 1);

        cy.get(todosContainerSelector).children().first().get("input[type=checkbox]").click();
        cy.get(todosContainerSelector)
            .children()
            .first()
            .should("have.css", "text-decoration", "line-through solid rgba(0, 0, 0, 0.85)");

        cy.get(todosContainerSelector).children().first().get("input[type=checkbox]").click();
        cy.get(todosContainerSelector)
            .children()
            .first()
            .should("not.have.css", "text-decoration", "line-through solid rgba(0, 0, 0, 0.85)");
    });

    it("Should show correct todo by search", () => {
        todos.forEach((todo) => {
            cy.get(todoInputSelector).type(todo).should("have.value", todo);
            cy.get("#add_todo").click();
        });

        cy.get("input[value='Completed']").click();
        cy.get(todosContainerSelector).children().should("have.length", 0);

        cy.get("input[value='Todo']").click();
        cy.get(todosContainerSelector).children().should("have.length", 3);

        cy.get(searchInputSelector).type(todos[0]).should("have.value", todos[0]);

        cy.get(todosContainerSelector).children().should("have.length", 1);
        cy.get(todosContainerSelector).children().first().should("contain", todos[0]);

        cy.get(todosContainerSelector).children().first().get("input[type=checkbox]").click();

        cy.get("input[value='Completed']").click();
        cy.get(todosContainerSelector).children().first().should("contain", todos[0]);

        cy.get("input[type='radio'][value='Todo']").click();
        cy.get(todosContainerSelector).children().should("have.length", 0);

        cy.get(searchInputSelector).clear().type(todos[1]).should("have.value", todos[1]);
        cy.get(todosContainerSelector).children().should("have.length", 1);
        cy.get(todosContainerSelector).children().first().should("contain", todos[1]);
    });
});

