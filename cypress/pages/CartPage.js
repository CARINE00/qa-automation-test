class CartPage {
  // Validate the product details (quantity, price, total)
  validateProduct(quantity) {
    cy.get('td.cart_product').parent().within(() => {
      cy.get('td').eq(2).invoke('text').then((priceText) => {
        const price = parseFloat(priceText.replace(/[^\d]/g, ''));
        cy.get('td').eq(3).invoke('text').then((qtyText) => {
          const qty = parseInt(qtyText.trim());
          expect(qty).to.eq(quantity);
          cy.get('td').eq(4).invoke('text').then((totalText) => {
            const total = parseFloat(totalText.replace(/[^\d]/g, ''));
            expect(total).to.eq(price * qty);
            cy.screenshot(); // Take a screenshot after validation
          });
        });
      });
    });
  }

  // Proceed to checkout from the cart page
  proceedToCheckout() {
    cy.contains('Proceed To Checkout').click();
    cy.screenshot(); // Take a screenshot of this step
  }

  // Navigate to the login page from the cart
  goToLoginPage() {
    cy.get('a[href="/login"]').contains('Register / Login').click();
    cy.screenshot(); // Screenshot for navigation step
  }
}

export default new CartPage();
