class ProductPage {
  // Select the third product and set a random quantity
  selectProduct3(quantity) {
    cy.get('a[href="/product_details/3"]').contains('View Product').click();
    cy.url().should('include', '/product_details/3'); // Ensure product detail page is loaded
    cy.get('#quantity').clear().type(quantity); // Set quantity
    cy.contains('Add to cart').click();
    cy.contains('View Cart').first().click(); // Go to cart
    cy.screenshot(); // Screenshot of cart after adding product
  }
}

export default new ProductPage();
