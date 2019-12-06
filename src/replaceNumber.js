function replaceNumber(string) {
  const regex = /[^0-9]/gi;
  string = string.replace(regex, "");
  return string;
}

module.exports = replaceNumber;
