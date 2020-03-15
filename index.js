const inquirer = require("inquirer");
const questions = require("./questions");
const {
  checkIfTriangle,
  classifyTriangleBySideLength,
  checkTriangleType,
  validateInput,
  handleErrors
} = require("./functions");

let inputs = [];

const storeAnswers = answers =>
  Object.keys(answers).forEach(k => inputs.push(parseInt(answers[k])));

(async () => {
  // Greeter
  console.log(
    "Assignment: Test Cases - Triangle\nPlease enter your triangle dimensions:"
  );
  // Get inputs
  await inquirer
    .prompt(questions)
    .then(storeAnswers)
    .catch(handleErrors);
  // Edge case 1 => Check for invalid inputs
  const invalidInput = validateInput(inputs);
  if (invalidInput) handleErrors(invalidInput);
  // Edge case 2 => Check if the inputs can form a triangle.
  const isTriangle = checkIfTriangle(inputs);
  if (!isTriangle) return console.log(`${inputs} cannot form a triangle.`);
  console.log(`${inputs} can form a triangle!`);
  // Classify the triangle by side length
  const sideLengthClassification = classifyTriangleBySideLength(inputs);
  console.log(sideLengthClassification);
  // Finally, check if the triangle is acute, obtuse or right-angle
  const triangleType = checkTriangleType(inputs);
  console.log(`Triangle type: ${triangleType}`);
})();
