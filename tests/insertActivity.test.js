const insertActivity = require("../src/insertActivity");

const testArray = [];
const testArrayCopy = [...testArray];
const testObject = "hooks";
test("initial array length should increase by atleast 1", () => {
  expect(insertActivity(testArray, testObject)).toBeGreaterThan(
    testArrayCopy.length
  );
});
