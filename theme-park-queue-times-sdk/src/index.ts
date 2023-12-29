import axios from "axios";
import { QueueTimes, ThemePark } from "./types";

export async function getParkList(): Promise<ThemePark[]> {
  let response = await axios.get("https://queue-times.com/parks.json");
  if (response.status !== 200) {
    throw new Error("Failed to get park list");
  }

  return response.data as ThemePark[];
}

export async function getQueueTimes(parkId: number): Promise<QueueTimes> {
  let response = await axios.get(`https://queue-times.com/parks/${parkId}/queue_times.json`);
  if (response.status !== 200) {
    throw new Error("Failed to get queue time");
  }

  return response.data as QueueTimes;
}
