import { getParkList, getQueueTimes } from ".";

console.log("Getting list of parks");
getParkList()
  .then((parkList) => {
    const disney = parkList.find((park) => park.name === "Walt Disney Attractions");
    console.log(disney);
    return getQueueTimes(17);
  })
  .then((queueTimes) => {
    for (var land of queueTimes.lands) {
      console.log(land.rides);
    }
  });
