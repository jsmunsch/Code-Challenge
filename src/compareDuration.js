function compareDuration(a, b) {
  const durationA = a.duration;
  const durationB = b.duration;

  let comparison = 0;
  if (durationA < durationB) {
    comparison = 1;
  } else if (durationA > durationB) {
    comparison = -1;
  }
  return comparison;
}

module.exports = compareDuration;
