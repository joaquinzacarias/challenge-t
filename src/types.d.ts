
/**
 * IP-API response
 */
export interface ipApiResponse {
  status: string
  country: string
  countryCode: string
  region: string
  regionName: string
  city: string
  zip: string
  lat: number
  lon: number
  timezone: string
  isp: string
  org: string
  as: string
  query: string
}

export type geolocationInfo = Omit<ipApiResponse, status, query>

/**
 * OpenWeather API - Current Weather
 */
export interface currentWeatherResponse {
  base: string
  clouds: object
  cod: number
  coord: Coords
  dt: number
  id: number
  main: MainWeather
  name: string
  sys: Sys
  timezone: number
  visibility: number
  weather: AWeather[]
  wind: Wind
}

export interface Coords {
  lon: number
  lat: number
}

export interface AWeather {
  description: string
  icon: string
  id: number
  main: string
}

export interface MainWeather {
  feels_like: number
  humidity: number
  pressure: number
  temp: number
  temp_max: number
  temp_min: number
}

export interface Sys {
  country: string
  id: number
  sunrise: number
  sunset: number
  type: number
}

export interface Wind {
  deg: number
  speed: number
}

/**
 * OpenWeather - Forecast Weather
 */
export interface forecastWeatherResponse {
  current: forecastCurrentWeather
  daily: ADaily[]
  lat: number
  lon: number
  timezone: string
  timezone_offset: string
}

export interface forecastCurrentWeather {
  clouds: number
  dew_point: number
  dt: number
  feels_like: number | feelsLike
  humidity: number
  pressure: number
  sunrise: number
  sunset: number
  temp: number
  uvi: number
  visibility: number
  weather: AWeather[]
  wind_deg: number
  wind_speed: number
}

export interface feelsLike {
  day: number
  night: number
  morn: number
}

export interface ADaily extends forecastCurrentWeather {
  feels_like: feelsLike
  moon_phase: number
  moonrise: number
  moonset: number
  pop: number
  temp: Temp
  wind_gust: number
}

export interface Temp {
  day: number
  min: number
  max: number
  night: number
  eve: number
  morn: number
}
