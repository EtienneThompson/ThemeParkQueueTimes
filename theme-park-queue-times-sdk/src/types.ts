export interface Park {
  id: number;
  name: string;
  country: string;
  continent: string;
  latitude: string;
  longitude: string;
  timezone: string;
}

export interface ThemePark {
  id: number;
  name: string;
  parks: Park[];
}

export interface Land {
  id: number;
  name: string;
  rides: Ride[];
}

export interface Ride {
  id: number;
  name: string;
  is_open: boolean;
  wait_time: number;
  last_updated: string;
}

export interface QueueTimes {
  park_id: number;
  lands: Land[];
  rides: Ride[];
}
