class HomePage {
  // Visit the homepage
  visitHomePage() {
    cy.visit('https://automationexercise.com/');
    cy.screenshot(); // Screenshot of the homepage
  }

  // Go to the Products page
  goToProducts() {
    cy.contains('Products').click();
    cy.url().should('include', '/products'); // Validate navigation
    cy.screenshot(); // Capture the Products page
  }
}

export default new HomePage();
