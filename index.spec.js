const { expect } = require("chai");

function checkIfTriangle(a, b, c) {
  if (a + b > c && a + c > b && c + b > a) return true;
  return false;
}

describe("Triangle assignment.", () => {
  describe("1st case: 3 numbers should make a triangle", () => {
    it("[7,14,16] should return a triangle", () => {
      const inputs = [7, 14, 16];
      expect(checkIfTriangle(inputs[0], inputs[1], inputs[2])).to.equal(true);
    });
  });
});
