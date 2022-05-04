import { geolocationInfo } from '../types'
import { getGeolocation, getReverseGeolocation } from './geolocation'
import { getWeather, getForecastWeather } from './weather'

export async function getFullCurrentInfo (city?: string): Promise<any> {
  try {
    const weather = await getWeather(city)
    const geolocationInfo: geolocationInfo = (city !== undefined && city !== null) ? await getReverseGeolocation(weather.coord.lat, weather.coord.lon) : await getGeolocation()

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

export async function getFullForecastInfo (city?: string): Promise<any> {
  try {
    const cityData = await getWeather(city)
    const weather = await getForecastWeather(cityData.coord.lat, cityData.coord.lon)

    const geolocationInfo: geolocationInfo = (city !== undefined && city !== null) ? await getReverseGeolocation(cityData.coord.lat, cityData.coord.lon) : await getGeolocation()

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
