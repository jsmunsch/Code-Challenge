const talks = require("./prepareTalks");
const showTrackTime = require("./src/showTrackTime");
const insertActivity = require("./src/insertActivity");

const trackMorningOne = [];
const trackMorningTwo = [];
const trackAfternoonOne = [];
const trackAfternoonTwo = [];

let result = null;
const lunch = { title: "Lunch", duration: "60" };
const networkingEvent = {
  title: "Networking Event",
  duration: "180",
  startingTime: 17
};

function findCombination(talk, target, partial, reset) {
  let total, number, remaining;
  partial = partial || [];
  total = partial.reduce((a, b) => Number(a) + Number(b), 0);

  if (reset) {
    result = null;
  }
  if (total > target) {
    return null;
  }

  // If you want all possible combinations of elements whose duration equals exactly 180 use this. To do this do console.log(result)
  // if (total === target) {
  //   if (!result) result = [];
  //   result.push(partial);
  // }

  if (total === target && !result) {
    result = partial;
  }

  // The if statement has to be removed in order for the subsetSum algorithm / findCombination to work and show all possible results
  if (!result) {
    for (let i = 0; i < talk.length; i++) {
      number = talk[i].duration;
      remaining = talk.slice(i + 1);
      findCombination(remaining, target, partial.concat([number]), false);
    }
  }
}

function matchTimeToTalk(talks, number, eventNo) {
  for (let i = 0; i < talks.length; i++) {
    if (number == talks[i].duration) {
      if (eventNo === 1) {
        trackMorningOne.push(talks[i]);
      }
      if (eventNo === 2) {
        trackMorningTwo.push(talks[i]);
      }
      if (eventNo === 3) {
        trackAfternoonOne.push(talks[i]);
      }
      if (eventNo === 4) {
        trackAfternoonTwo.push(talks[i]);
      }

      talks.splice([i], 1);
      return;
    }
  }
}

function generateTrack(talk, eventNo) {
  talk.forEach(number => {
    matchTimeToTalk(talks, number, eventNo);
  });
}

findCombination(talks, 180);
generateTrack(result, 1);

findCombination(talks, 180, [], true);
generateTrack(result, 2);

findCombination(talks, 185, [], true);
generateTrack(result, 3);

findCombination(talks, 240, [], true);
generateTrack(result, 4);

insertActivity(trackMorningTwo, lunch);
insertActivity(trackMorningOne, lunch);
insertActivity(trackAfternoonOne, networkingEvent);
insertActivity(trackAfternoonTwo, networkingEvent);

const trackOne = trackMorningOne.concat(trackAfternoonOne);
const trackTwo = trackMorningTwo.concat(trackAfternoonTwo);

showTrackTime(trackOne);
showTrackTime(trackTwo);
