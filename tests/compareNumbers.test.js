const compareDuration = require("../src/compareDuration");

test("compare numbers by value", () => {
  const testA = { duration: "1" };
  const testB = { duration: "2" };

  expect(compareDuration(testA, testB)).toBe(1);
  expect(compareDuration(testB, testA)).toBe(-1);
  expect(compareDuration(testA, testA)).toBe(0);
});
