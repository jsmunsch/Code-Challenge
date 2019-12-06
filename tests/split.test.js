const split = require("../src/split");
const read = require("../src/read");

const data = read("./split-test.txt");
const expected = [
  "Writing Fast Tests Against Enterprise Rails 60min",
  "Overdoing it in Python 45min"
];
test("split data by lines and return strings", () => {
  expect(split(data)).toStrictEqual(expected);
});
