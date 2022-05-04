import fc from '../utils/fetch'

import * as geolocationService from '../services/geolocation'

import { geolocationInfo } from '../types'
// Constants
import { APIS } from '../utils/constants'
import { CONFIG } from '../config'

/**
 * Obtain the current weather info base on the Public IP or a City
 * @param     city: optional - Example: Paris or Paris,FR
 * @returns   OK:     response.data
 *            Error:  none - new Error
 *
 */
export async function getWeather (city?: string): Promise<any> {
  try {
    // Preparing URL
    let url = APIS.WEATHER_CURRENT_API

    // Compliting API URL
    if (city !== undefined && city !== null) {
      url += `q=${city}&lang=sp&units=metric&appid=${CONFIG.WEATHER_API_KEY}`
    } else {
      // Calling first IP-API to obtain the coords
      const publicIP: geolocationInfo = await geolocationService.getGeolocation()
      const { lat = null, lon = null } = publicIP.data

      url += `lat=${lat}&lon=${lon}&lang=sp&units=metric&appid=${CONFIG.WEATHER_API_KEY}`
    }

    // Call OpenWeather API
    const response = await fc.get(url)

    if (response.status === 200) {
      return response.data
    } else {
      throw new Error(`Status: ${response.status}, message: ${response.statusText}`)
    }
  } catch (error) {
    throw new Error(`Error: ${error}`)
  }
}

/**
 * Obtain the forecast weather info base on the Public IP or a City
 * @param     latCoord: optional - Example: -35,321
 * @param     lonCoord: optional - Example: -45,5
 * @returns   OK:     response.data
 *            Error:  none - new Error
 *
 */
export async function getForecastWeather (latCoord?: string, lonCoord?: string): Promise<any> {
  // Preparing URL
  let url = ''

  // Completing API URL
  if ((latCoord !== undefined && latCoord !== null) && (lonCoord !== undefined && lonCoord !== null)) {
    url = `${APIS.WEATHER_FORECAST_API}lat=${latCoord}&lon=${lonCoord}&exclude=minutely,hourly,alerts&lang=sp&units=metric&appid=${CONFIG.WEATHER_API_KEY}`
  }

  // Call OpenWeather API
  const response = await fc.get(url)

  if (response.status === 200) {
    return response.data
  } else {
    return 'No data'
  }
}
