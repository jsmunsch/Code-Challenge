const createTalks = require("../src/createTalks");

const event = ["The future of Docker 30min"];
const talks = [];
const expected = [{ duration: "30", title: "The future of Docker" }];
createTalks(event, talks);
test("transform an array with strings into an object with title and duration property", () => {
  expect(talks).toEqual(expected);
});
