const read = require("./src/read.js");
const split = require("./src/split.js");
const createTalks = require("./src/createTalks.js");
const compare = require("./src/compareDuration");

const talks = [];

const file = read("./test-input.txt");
const txt_data = split(file);

createTalks(txt_data, talks);
talks.sort(compare);
talks.splice(-1);

module.exports = talks;
