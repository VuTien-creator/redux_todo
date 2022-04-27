/* eslint-disable no-undef */

const todos = ["First Todo", "Second Todo", "Third Todo"];

const todoInputSelector = "input[name=name]";
const todosContainerSelector = "#todo_container";
const addTodoButtonSelector = "#add_todo";

describe("Software Testing", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000");
    });

    it("Should add a new todo if data is OK", () => {
        cy.get(todoInputSelector).type(todos[0]).should("have.value", todos[0]);
        cy.get(addTodoButtonSelector).click();
        cy.get(todosContainerSelector).should("contain", todos[0]);
    });
});

