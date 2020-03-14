const inquirer = require("inquirer");
const questions = require("./questions");

let inputs = [];

const storeAnswers = answers =>
  Object.keys(answers).forEach(k => inputs.push(parseInt(answers[k])));

function checkIfTriangle(a, b, c) {
  if (a + b > c && a + c > b && c + b > a) return true;
  return false;
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
  const [a, b, c] = inputs;
  // Edge case 1 => Check if the inputs can form a triangle.
  const isTriangle = checkIfTriangle(a, b, c);
  if (!isTriangle)
    return console.log(`${a}, ${b}, ${c} cannot form a triangle.`);
  console.log(`${a}, ${b}, ${c} can form a triangle!`);
  // Classify the triangle by side length
  const sizeClassification = classifyTriangleBySideLength(a, b, c);
  console.log(sizeClassification);
}

inquirer
  .prompt(questions)
  .then(storeAnswers)
  .then(main);
