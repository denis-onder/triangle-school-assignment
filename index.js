const inquirer = require("inquirer");
const questions = require("./questions");

let inputs = [];

const storeAnswers = answers =>
  Object.keys(answers).forEach(k => inputs.push(parseInt(answers[k])));

function handleErrors(...errors) {
  let msg = "";
  errors.forEach(error => (msg += error));
  console.error("\n" + msg.split(",").join(""));
  process.exit(1);
}

function validateInput() {
  let errors = [];
  for (let i = 0; i < inputs.length; i++) {
    if (isNaN(inputs[i]))
      errors.push(`inputs[${i}] contains an invalid value = ${inputs[i]}\n`);
  }
  if (errors.length > 0) return errors;
  return false;
}

function checkIfTriangle(a, b, c) {
  if (a + b > c && a + c > b && c + b > a) return true;
  return false;
}

function checkTriangleType(a, b, c) {
  if (a ** a + b ** b > c ** c) return "Acute (Less than 90 degrees)";
  if (a ** a + b ** b < c ** c) return "Obtuse (Greater than 90 degrees)";
  return "Right-angle";
}

function classifyTriangleBySideLength(a, b, c) {
  // Check if all the side lengths are equal to each other
  if (a === b && a === c && b === c)
    return "All sides of the triangle are equal.";
  // Check if the left and right side length are equal to each, but not equal to the base
  if (a === c && a !== b && c !== b) return "The triangle has equal sides.";
  // Side lengths do not equal to each other
  return "The triangle has all three different sides.";
}

function main() {
  console.log("Inputs:", inputs);
  /**
   * - inputs[0] => a (Left side);
   * - inputs[1] => b (Base);
   * - inputs[2] => c (Right side);
   */
  // Edge case 1 => Check for invalid inputs
  const invalidInput = validateInput();
  if (invalidInput) handleErrors(invalidInput);
  // Edge case 2 => Check if the inputs can form a triangle.
  const [a, b, c] = inputs;
  const isTriangle = checkIfTriangle(a, b, c);
  if (!isTriangle)
    return console.log(`${a}, ${b}, ${c} cannot form a triangle.`);
  console.log(`${a}, ${b}, ${c} can form a triangle!`);
  // Classify the triangle by side length
  const sizeClassification = classifyTriangleBySideLength(a, b, c);
  console.log(sizeClassification);
  // Finally, check if the triangle is acute, obtuse or right-angle
  const triangleType = checkTriangleType(a, b, c);
  console.log(`Triangle type: ${triangleType}`);
}

console.log(
  "Assignment: Test Cases - Triangle\nPlease enter your triangle dimensions:\n"
);

inquirer
  .prompt(questions)
  .then(storeAnswers)
  .then(main)
  .catch(handleErrors);
