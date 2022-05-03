import fc from '../utils/fetch'

import * as geolocationService from '../services/geolocation'
import { geolocationInfo } from '../types'

const WEATHER_CURRENT_API = 'https://api.openweathermap.org/data/2.5/weather?'
const WEATHER_FORECAST_API = 'https://api.openweathermap.org/data/2.5/onecall?'
const WEATHER_API_KEY = '17df4bb66dfde5bb629d5fb6daa9a236'

export async function getWeather (city?: string): Promise<any> {
  try {
    let url = WEATHER_CURRENT_API

    if (city !== undefined && city !== null) {
      url += `q=${city}&lang=sp&units=metric&appid=${WEATHER_API_KEY}`
    } else {
      const publicIP: geolocationInfo = await geolocationService.getGeolocation()
      const { lat = null, lon = null } = publicIP.data

      url += `lat=${lat}&lon=${lon}&lang=sp&units=metric&appid=${WEATHER_API_KEY}`
    }
    console.debug(`API path: ${url}`)

    const response = await fc.get(url)

    if (response.status === 200) {
      console.log(response.data)
      return response.data
    } else {
      throw new Error(`Status: ${response.status}, message: ${response.statusText}`)
    }
  } catch (error) {
    throw new Error(`Error: ${error}`)
  }
}

export async function getForecastWeather (latCoord?: string, lonCoord?: string): Promise<any> {
  let url = ''

  if ((latCoord !== undefined && latCoord !== null) && (lonCoord !== undefined && lonCoord !== null)) {
    url = `${WEATHER_FORECAST_API}lat=${latCoord}&lon=${lonCoord}&exclude=minutely,hourly,alerts&lang=sp&units=metric&appid=${WEATHER_API_KEY}`
  }
  console.log(url)

  const response = await fc.get(url)

  if (response.status === 200) {
    console.log(response.data)
    return response.data
  } else {
    return 'No data'
  }
}
