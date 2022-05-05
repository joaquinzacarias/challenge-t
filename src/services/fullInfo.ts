import { currentWeatherResponse, forecastWeatherResponse, geolocationInfo } from '../types'
import { getGeolocation, getReverseGeolocation } from './geolocation'
import { getWeather, getForecastWeather } from './weather'

/**
 * Obtain the location and current weather info base on the Public IP or a City
 * @param     city: optional - Example: Paris or Paris,FR
 * @returns   OK or Error:     status + data
 *
 */
export async function getFullCurrentInfo (city?: string): Promise<any> {
  try {
    // Get current weather info
    const weather: currentWeatherResponse = await getWeather(city)
    // Get geolocation info base on the PublicIp o on the cities' coords given on the "getWeather" function
    const geolocationInfo: geolocationInfo = (city !== undefined && city !== null) ? await getReverseGeolocation(weather.coord.lat.toString(), weather.coord.lon.toString()) : await getGeolocation()

    return {
      status: (geolocationInfo.data !== undefined && weather !== undefined) ? 'success' : 'failed',
      data: {
        currentGeolocationInfo: geolocationInfo.data,
        currentWeatherInfo: weather
      }
    }
  } catch (error) {
    throw new Error(`Error: ${error}`)
  }
}

/**
 * Obtain the location and forecast weather info base on the Public IP or a City
 * @param     city: optional - Example: Paris or Paris,FR
 * @returns   OK or Error:     status + data
 *
 */
export async function getFullForecastInfo (city?: string): Promise<any> {
  try {
    // Get weather info to use the cities' coords on the "getForecastWeather" function
    const cityData: currentWeatherResponse = await getWeather(city)
    const weather: forecastWeatherResponse = await getForecastWeather(cityData.coord.lat.toString(), cityData.coord.lon.toString())

    // Get geolocation info base on the PublicIp o on the cities' coords given on the "getWeather" function
    const geolocationInfo: geolocationInfo = (city !== undefined && city !== null) ? await getReverseGeolocation(cityData.coord.lat.toString(), cityData.coord.lon.toString()) : await getGeolocation()

    return {
      status: (geolocationInfo.data !== undefined && weather !== undefined) ? 'success' : 'failed',
      data: {
        forecastGeolocationInfo: geolocationInfo.data,
        forecastWeatherInfo: weather
      }
    }
  } catch (error) {
    throw new Error(`Error: ${error}`)
  }
}
