import { faker } from '@faker-js/faker';

class SignupPage {
  // Fill the signup form with random data
  fillSignupForm() {
    const firstName = faker.name.firstName();
    const email = faker.internet.email();

    cy.get('[data-qa="signup-name"]').type(firstName);
    cy.get('[data-qa="signup-email"]').type(email);
    cy.get('[data-qa="signup-button"]').click();

    // Fill personal details
    cy.get('#id_gender1').check();
    cy.get('#password').type(faker.internet.password());
    cy.get('#first_name').type(firstName);
    cy.get('#last_name').type(faker.name.lastName());
    cy.get('#company').type(faker.company.name());
    cy.get('#address1').type(faker.address.streetAddress());
    cy.get('#address2').type(faker.address.secondaryAddress());
    cy.get('#country').select('India');
    cy.get('#state').type(faker.address.state());
    cy.get('#city').type(faker.address.city());
    cy.get('#zipcode').type(faker.address.zipCode());
    cy.get('#mobile_number').type(faker.phone.number('##########'));

    // Complete account creation
    cy.get('[data-qa="create-account"]').click();
    cy.contains('Account Created!').should('be.visible');
    cy.get('[data-qa="continue-button"]').click();
    cy.screenshot(); // Capture screenshot after account creation
  }
}

export default new SignupPage();
