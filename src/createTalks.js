function createTalks(data, target) {
  data.map(talk => {
    const regex = /[^0-9]/gi;
    let title = talk.split(" ");
    let duration = title.splice(-1, 1);
    title = title.join(" ");
    if (duration.includes("lightning")) {
      duration = ["5min"];
    }
    duration = duration[0].replace(regex, "");

    return target.push({
      title: `${title}`,
      duration: `${duration}`
    });
  });
}

module.exports = createTalks;
