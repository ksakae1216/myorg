// export const getTodos = () => cy.get('li.todo');
export const getTodos = () => cy.get(':nth-child(1) > a');
// export const getAddTodoButton = () => cy.get('button#add-todo');
export const getAddTodoButton = () => cy.get('myorg-root');
