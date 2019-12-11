function showTrackTime(track) {
  let currentDuration = 0;
  track.forEach(talk => {
    const date = new Date();
    date.setHours(9);
    date.setMinutes(currentDuration);

    const options = {
      hour: "numeric",
      minute: "numeric",
      hour12: true
    };

    const time = new Intl.DateTimeFormat("en-US", options).format(date);

    console.log(time, talk.title);
    date.setMinutes;
    currentDuration += Number(talk.duration);
  });
}

module.exports = showTrackTime;
