import HomePage from '../pages/HomePage'
import ProductPage from '../pages/ProductPage'
import CartPage from '../pages/CartPage'
import SignupPage from '../pages/SignupPage'
import PaymentPage from '../pages/PaymentPage'
import ConfirmationPage from '../pages/ConfirmationPage'

describe('Complete Purchase Flow using POM', () => {
  it('Should complete the entire flow successfully and pass accessibility and performance audits', () => {
    const quantity = Math.floor(Math.random() * 20) + 1

    // Step 1: Visit the homepage
    HomePage.visitHomePage()

    // Testes de acessibilidade e desempenho usando Lighthouse e Pa11y
    cy.lighthouse({
      accessibility: true,
      performance: true,
      'best-practices': true,
      seo: true
    })

    cy.pa11y()

    // Step 2: Navigate to the Products page
    HomePage.goToProducts()

    // Step 3: Select the third product from the list
    ProductPage.selectProduct3(quantity)

    // Step 4: Enter a random quantity between 1 e 20
    CartPage.validateProduct(quantity)

    // Step 6: View the cart and Proceed to checkout
    CartPage.proceedToCheckout()

    // Step 7: Register a new user with random data
    CartPage.goToLoginPage()

    // Step 8: Proceed to checkout again after registration
    SignupPage.fillSignupForm()

    // Step 9: Confirm the order
    PaymentPage.completeOrder()
    ConfirmationPage.validateOrderSuccess()

    // Step 10: Log out of the account
    ConfirmationPage.logout()
  })
})
