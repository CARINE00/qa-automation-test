
# 🧪 QA Automation Test Project

## 👤 Author

**Carine Monte**  
GitHub: [carinemonte](https://github.com/carinemonte)

---

## ⚙️ 1. Installation Guide

To run this project, you need to install the following technologies:

### 📌 Node.js

- Download and install Node.js (LTS version) from: https://nodejs.org/

### 📌 Cypress

Install Cypress locally in the project:

```
npm install cypress --save-dev
```

### 📌 Mochawesome Reporter

Install the reporter used to generate HTML and JSON reports:

```
npm install mochawesome mochawesome-merge mochawesome-report-generator --save-dev
```

### 📌 Cypress Audit (Lighthouse & Pa11y)

Install the package for performance and accessibility audits:

```
npm install cypress-audit --save-dev
```

---

## ▶️ 2. How to Run the Tests

To run the tests in **headless mode** (and generate reports):

```
npx cypress run
```

To open the **Cypress Test Runner** (graphical interface):

```
npx cypress open
```

> ℹ️ The test flow is fully automated and will go through a complete purchase process using the Page Object Model (POM).

---

## 📁 3. Report Locations

After running the tests, the following reports are generated:

- **Mochawesome Reports (HTML & JSON)**:  
  `/cypress/reports/mochawesome-report/`

- **Test Summary File (JSON)**:  
  `/cypress/reports/test-summary.json`

- **Screenshots (for failed tests)**:  
  `/cypress/screenshots/`

- **Videos (if enabled)**:  
  `/cypress/videos/`

---

## 📝 4. Test Case Documentation

Test case documentation can be found at:

```
cypress/docs/TC_PUR_001_PurchaseFlow.md
```

This file describes the objective, steps, expected results, and tags of the test case `TC_PUR_001`.

---

## 🤔 Why Cypress Was Chosen Over Playwright

Although both Cypress and Playwright are powerful tools for end-to-end testing, Cypress was chosen for the following reasons:

- **Learning curve**: Cypress is easier to learn and more beginner-friendly.
- **Built-in tools**: It has excellent debugging tools and automatic waiting.
- **Real-time reload**: Cypress provides a live browser preview during test execution.
- **Community support**: It has a large community, lots of plugins, and great documentation.
- **Built-in UI**: Cypress comes with a graphical interface to run and debug tests easily.

> While Playwright has strong cross-browser support and advanced capabilities, Cypress offers a simpler setup and better suits the needs of this project, focused on frontend behavior, performance, and accessibility validation.

---

## ✅ Summary

This automation project covers a complete purchase scenario, using:

- Cypress with POM (Page Object Model)
- Lighthouse and Pa11y audits
- Mochawesome reports
- Test case documentation

It ensures quality, performance, and accessibility in a user-focused test flow.

---
