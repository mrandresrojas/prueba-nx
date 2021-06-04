import { getAddTodoButton, getTest } from '../support/app.po';

describe('TodoApps', () => {
  beforeEach(() => cy.visit('/'));

  it('should display todos', () => {
    getTest().should((t) => expect(t.length).equal(2));
    getAddTodoButton().click();
    getTest().should((t) => expect(t.length).equal(3));
  });
});
