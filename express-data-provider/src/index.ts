import express, { Request, Response, NextFunction } from "express";
import { getThemeParkList, getQueueTimes, QueueTimes } from "theme-park-queue-times-sdk";

const cors = require("cors");

const app = express();
const port = process.env.PORT || "4000";

var corsOptions = {
  origin: ["http://localhost:3000"],
};
app.use(cors(corsOptions));

const getQueueTimeData = async (req: Request, res: Response) => {
  let parkList = await getThemeParkList();

  let queueTimePromises: Promise<QueueTimes>[] = [];
  for (let park of parkList) {
    for (let land of park.parks) {
      queueTimePromises.push(getQueueTimes(land.id));
    }
  }

  let result = await Promise.all(queueTimePromises);

  for (let themePark of parkList) {
    for (let park of themePark.parks) {
      let parkData = result.find((r) => r.park_id === park.id);
      (park as any).lands = parkData?.lands;
      (park as any).rides = parkData?.rides;
    }
  }

  return res.send(parkList);
};

app.use(express.json());

app.get("/queuedata", getQueueTimeData);

app.listen(port, () => {
  return console.log(`Server is listening on port ${port}`);
});
