const { defineConfig } = require("cypress");
const { lighthouse, pa11y, prepareAudit } = require('cypress-audit');
const fs = require('fs');

module.exports = defineConfig({
  // Optional project ID used with Cypress Dashboard
  projectId: '95cdwf',
  
  // Reporter configuration - using Mochawesome to generate HTML and JSON reports
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports/mochawesome-report', // Folder where reports will be saved
    overwrite: false,                                // Do not overwrite previous reports
    html: true,                                      // Generate HTML report
    json: true                                       // Generate JSON report
  },

  e2e: {
    screenshotOnRunFailure: true, // Automatically take screenshots when tests fail

    setupNodeEvents(on, config) {
      // Before launching the browser, prepare audit flags for Lighthouse and Pa11y
      on('before:browser:launch', (browser = {}, launchOptions) => {
        prepareAudit(launchOptions); // Add necessary flags to support audit tools
        return launchOptions;
      });

      // Custom tasks for running Lighthouse and Pa11y audits
      on('task', {
        lighthouse: lighthouse(),  // Task to run Lighthouse (performance & accessibility)
        pa11y: pa11y()             // Task to run Pa11y (accessibility only)
      });

      // Generate a summary report after all tests are finished
      on('after:run', (results) => {
        const summary = {
          totalTests: results.totalTests,           // Total number of executed tests
          totalPassed: results.totalPassed,         // Total tests passed
          totalFailed: results.totalFailed,         // Total tests failed
          runs: results.runs.map(run => ({
            spec: run.spec.name,                    // Name of the test spec file (e.g. purchaseFlow.cy.js)
            tests: run.tests.map(test => ({
              title: test.title,                    // Test name
              state: test.state,                    // Test result (passed/failed)
              attempts: test.attempts.length        // Number of attempts for the test
            }))
          })),
        };

        // Save the summary to a JSON file
        fs.writeFileSync('cypress/reports/test-summary.json', JSON.stringify(summary, null, 2));
      });

      return config; // Return the final Cypress configuration
    },
  },
});
