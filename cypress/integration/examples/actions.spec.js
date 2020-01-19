describe('Hello world', () => {
  beforeEach(() => {
    cy.eyesOpen({
      browser: { width: 800, height: 600 },
    });
  });

  afterEach(() => {
    cy.eyesClose();
  });

  it('Demo Applitools Standard', () => {
    //cy.visit('https://demo.applitools.com/');
    cy.visit('https://applitools.com/helloWorld');
    
    cy.eyesCheckWindow('Main Page');
    // cy.get('button').click();
    // cy.eyesCheckWindow('Click!');
  });
});