const report = require("multiple-cucumber-html-reporter");
report.generate({
  jsonDir: "cypress/reports/cucumber-json",  // ** Path of .json file **//
  reportPath: "cypress/reports", // ** Path of .html file **//
  metadata: {
    browser: {
      name: "Firefox",
      version: "95.0.2",
    },
    device: "Local test machine",
    platform: {
      name: "Linux",
      version: "Arch",
    },
  },
});