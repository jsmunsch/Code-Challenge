const replaceNumber = require("../src/replaceNumber");

const string = "The Web is amazing 37";
test("removes any number in a string", () => {
  expect(replaceNumber(string)).toMatch("37");
});
