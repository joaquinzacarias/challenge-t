import { geolocationInfo } from '../types'
import { getGeolocation } from './geolocation'
import { getWeather, getForecastWeather } from './weather'

export async function getFullCurrentInfo (city?: string): Promise<any> {
  try {
    const publicIP: geolocationInfo = await getGeolocation()
    const weather: object = await getWeather(city)

    return {
      status: (publicIP.data !== undefined && weather !== undefined) ? 'success' : 'failed',
      data: {
        currentGeolocationInfo: publicIP.data,
        currentWeatherInfo: weather
      }
    }
  } catch (error) {
    throw new Error(`Error: ${error}`)
  }
}

export async function getFullForecastInfo (city?: string): Promise<any> {
  try {
    const publicIP: geolocationInfo = await getGeolocation()

    const cityData = await getWeather(city)
    const weather: object = await getForecastWeather(cityData.coord.lat, cityData.coord.lon)

    return {
      status: (publicIP.data !== undefined && weather !== undefined) ? 'success' : 'failed',
      data: {
        forecastGeolocationInfo: publicIP.data,
        forecastWeatherInfo: weather
      }
    }
  } catch (error) {
    throw new Error(`Error: ${error}`)
  }
}
