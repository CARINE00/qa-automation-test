class ConfirmationPage {
  // Validate that the order was successful
  validateOrderSuccess() {
    cy.contains('Order Placed!').should('be.visible');
    cy.contains('Congratulations! Your order has been confirmed!').should('be.visible');
    cy.screenshot(); // Capture screenshot of success confirmation
  }

  // Log out from the account
  logout() {
    cy.contains('Logout').click();
    cy.contains('Login to your account').should('be.visible'); // Ensure logout was successful
    cy.screenshot(); // Capture screenshot after logout
  }
}

export default new ConfirmationPage();
