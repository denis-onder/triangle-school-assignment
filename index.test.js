const inquirer = require("inquirer");
const questions = require("./questions");
const { expect } = require("chai");
const {
  checkIfTriangle,
  classifyTriangleBySideLength,
  checkTriangleType,
  validateInput
} = require("./functions");

function generateRandomInput() {
  let output = [];
  for (let i = 0; i < 3; i++) output.push(Math.floor(Math.random() * 100) + 1);
  return output;
}

let inputs = generateRandomInput();

describe("Suite", () => {
  // Greeter
  console.log(`Input: [${inputs}]`);
  // Commence testing
  describe("Special Inputs Case: validateInput returns false if the provided inputs are valid, otherwise it returns a list of errors.", () =>
    it("should continue if all inputs are a number,", () =>
      expect(validateInput(inputs)).to.eq(false)));
  describe("Edge Case: checkIfTriangle returns true if the provided inputs can form a triangle.", () =>
    it("should continue with execution if the result is true.", () =>
      expect(checkIfTriangle(inputs)).to.eq(true)));
  // Side length classification tests
  describe("Classify Triangle By Side Length", () => {
    const classificationResult = classifyTriangleBySideLength(inputs);
    describe("Case 1: It should return a message that all the sides of the triangle are equal, if a, b and c are all equal.", () =>
      it('should return "All sides of the triangle are equal."', () =>
        expect(classificationResult).to.eq(
          "All sides of the triangle are equal."
        )));
    describe("Case 2: It should return a message that the left and right sides of the triangle are equal, if a and c are equal, but they are not equal to b.", () =>
      it('should return "The triangle has equal sides."', () =>
        expect(classificationResult).to.eq("The triangle has equal sides.")));
    describe("Case 3: It should return a message that all the sides of the triangle are different.", () =>
      it('should return "The triangle has all three different sides."', () =>
        expect(classificationResult).to.eq(
          "The triangle has all three different sides."
        )));
  });
  // Triangle type classification tests
  describe("Classify Triangle By Type", () => {
    const triangleType = checkTriangleType(inputs);
    describe("Case 1: It should return a message that the triangle is acute if a² + b² are greater than c².", () =>
      it('should return "Acute (Less than 90 degrees)".', () =>
        expect(triangleType).to.eq("Acute (Less than 90 degrees)")));
    describe("Case 2: It should return a message that the triangle is obtuse if a² + b² are less than c².", () =>
      it('should return "Obtuse (Greater than 90 degrees)".', () =>
        expect(triangleType).to.eq("Obtuse (Greater than 90 degrees)")));
    describe("Case 3: It should return a message that the triangle is right-angle if a² + b² are equal to c².", () =>
      it('should return "Right-angle".', () =>
        expect(triangleType).to.eq("Right-angle")));
  });
});
