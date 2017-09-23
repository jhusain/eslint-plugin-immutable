"use strict";

const rules = require("../index").rules;
const RuleTester = require("eslint").RuleTester;

const ruleTester = new RuleTester({ parserOptions: { ecmaVersion: 7, ecmaFeatures: { experimentalObjectRestSpread: true }}});

ruleTester.run("no-mutation", rules["no-mutation"], {
  valid: [
    {
      code: "module.exports = ['foo']"
    }, {
      code: "const point = { x: 23, y: 44 }; const transformedPoint = { ...point, x: 99 };"
    }
  ],
  invalid: [
    {
      code: "const point = { x: 23, y: 44 }; point.x = 99;",
      errors: [{ message: "No object mutation allowed." }]
    }
  ]
});
