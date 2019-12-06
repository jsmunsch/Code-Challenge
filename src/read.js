let fs = require("fs");

function read(file_path) {
  const file = fs.readFileSync(file_path).toString("utf-8");
  return file;
}

module.exports = read;
