import axios from "axios";
import { QueueTimes, ThemePark } from "./types";

/**
 * Gets the list of available theme parks and individual parks within.
 * @returns ThemePark[] - list of theme parks and individual parks.
 */
export async function getThemeParkList(): Promise<ThemePark[]> {
  let response = await axios.get("https://queue-times.com/parks.json");
  if (response.status !== 200) {
    throw new Error("Failed to get park list");
  }

  return response.data as ThemePark[];
}

/**
 * Get the list of lands and queue times for each ride within that land.
 * @param parkId The id of the park to get data for.
 * @returns QueueTimes - object containing park id, land, and ride data.
 */
export async function getQueueTimes(parkId: number): Promise<QueueTimes> {
  let response = await axios.get(`https://queue-times.com/parks/${parkId}/queue_times.json`);
  if (response.status !== 200) {
    throw new Error("Failed to get queue time");
  }

  return {
    park_id: parkId,
    ...response.data,
  } as QueueTimes;
}

export * from "./types";
