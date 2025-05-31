class PaymentPage {
  // Complete the payment form and place the order
  completeOrder() {
    cy.contains('Cart', { timeout: 20000 }).click(); // Ensure Cart is loaded
    cy.contains('Proceed To Checkout').click();
    cy.contains('Place Order', { timeout: 20000 }).click(); // Place Order page

    // Fill payment details
    cy.get('[name="name_on_card"]').type('John Doe');
    cy.get('[name="card_number"]').type('4111111111111111');
    cy.get('[name="cvc"]').type('123');
    cy.get('[name="expiry_month"]').type('12');
    cy.get('[name="expiry_year"]').type('2027');

    // Confirm the order
    cy.contains('Pay and Confirm Order').click();
    cy.screenshot(); // Screenshot of order confirmation
  }
}

export default new PaymentPage();
