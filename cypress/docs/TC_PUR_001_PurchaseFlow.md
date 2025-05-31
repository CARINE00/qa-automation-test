
# ✅ Test Case: Complete Product Purchase Flow with New User Registration

**Test Case ID:** TC_PUR_001  
**Title:** Complete product purchase flow including registration and checkout  
**Priority:** High  
**Tested By:** Carine Monte 
**Test Type:** End-to-End  

---

## 🔄 Preconditions

- Given the user is **not logged in**  
- And the **Automation Exercise** website is accessible at `https://automationexercise.com/`

---

## 🧪 Test Steps and Expected Results (BDD Style)

### Scenario 1: Access the site and navigate to Products page

```gherkin
Given the user is on the homepage  
When the user clicks on the "Products" menu  
Then the Products page should be displayed  
```

---

### Scenario 2: Select a product and add it to the cart

```gherkin
Given the user is on the Products page  
When the user selects the third product in the list  
And views the product details  
And enters a random quantity between 1 and 20  
And clicks "Add to cart"  
Then a confirmation message should appear  
And the user clicks "View Cart"  
```

---

### Scenario 3: Proceed to checkout and register a new user

```gherkin
Given the user is on the Cart page  
When the user clicks "Proceed To Checkout"  
And the Register/Login modal appears  
And the user clicks "Register / Login"  
And the user fills in the registration form with valid random data  
And submits the form  
Then the user account should be created successfully  
And the user should be logged in  
```

---

### Scenario 4: Confirm the order and log out

```gherkin
Given the user is logged in  
When the user returns to the cart page  
And clicks "Proceed To Checkout"  
And clicks "Place Order"  
Then the order should be confirmed successfully  
And the user clicks "Logout"  
And the user is redirected to the homepage  
```

---

## ✅ Expected Result

- User successfully completes a full purchase flow from product selection to order confirmation.
- A new user account is created using random data.
- Cart data is maintained post-login.
- The user can confirm the order and log out successfully.

---




## ✨ Tip

To see this styled properly on GitHub, just push it to your repository and open it via the GitHub web interface — it will render the markdown cleanly!
