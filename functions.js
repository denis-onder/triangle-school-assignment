module.exports = {
  handleErrors: (...errors) => {
    let msg = "";
    errors.forEach(error => (msg += error));
    console.error("\n" + msg.split(",").join(""));
    process.exit(1);
  },

  validateInput: input => {
    let errors = [];
    for (let i = 0; i < input.length; i++) {
      if (isNaN(input[i]))
        errors.push(`inputs[${i}] contains an invalid value = ${input[i]}\n`);
    }
    if (errors.length > 0) return errors;
    return false;
  },

  checkIfTriangle: ([a, b, c]) => {
    if (a + b > c && a + c > b && c + b > a) return true;
    return false;
  },

  checkTriangleType: ([a, b, c]) => {
    if (a ** a + b ** b > c ** c) return "Acute (Less than 90 degrees)";
    if (a ** a + b ** b < c ** c) return "Obtuse (Greater than 90 degrees)";
    return "Right-angle";
  },

  classifyTriangleBySideLength: ([a, b, c]) => {
    // Check if all the side lengths are equal to each other
    if (a === b && a === c && b === c)
      return "All sides of the triangle are equal.";
    // Check if the left and right side length are equal to each, but not equal to the base
    if (a === c && a !== b && c !== b) return "The triangle has equal sides.";
    // Side lengths do not equal to each other
    return "The triangle has all three different sides.";
  }
};
