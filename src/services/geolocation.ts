import { geolocationInfo } from '../types'
import fc from '../utils/fetch'

const GEOLOCATION_API = 'http://ip-api.com/json/'
const REVERSE_GEOLOCATION_API = 'https://api.bigdatacloud.net/data/reverse-geocode-client?'

export async function getGeolocation (): geolocationInfo {
  try {
    const response = await fc.get(GEOLOCATION_API)

    if (response.status === 200) {
      const { status, message, country, countryCode, region, regionName, city, zip, lat, lon, timezone, isp, org, as } = response.data

      if (status !== 'success') {
        return {
          status,
          message
        }
      } else {
        const data: geolocationInfo = {
          country,
          countryCode,
          region,
          regionName,
          city,
          zip,
          lat,
          lon,
          timezone,
          isp,
          org,
          as
        }
        // return response.data
        return {
          status,
          data
        }
      }
    } else {
      throw new Error(`Status: ${response.status}, message: ${response.statusText}`)
    }
  } catch (error) {
    throw new Error(`Error: ${error}`)
  }
}

export async function getReverseGeolocation (lat: string, lon: string): geolocationInfo {
  try {
    const url = `${REVERSE_GEOLOCATION_API}latitude=${lat}&longitude=${lon}&localityLanguage=es`
    const response = await fc.get(url)

    if (response.status === 200) {
      const { countryName, countryCode, principalSubdivisionCode, principalSubdivision, city } = response.data
      const { status, statusText } = response

      if (status !== 200) {
        return {
          status,
          message: statusText
        }
      } else {
        const data: geolocationInfo = {
          country: countryName,
          countryCode,
          region: principalSubdivisionCode,
          regionName: principalSubdivision,
          city,
          zip: null,
          lat,
          lon,
          timezone: null,
          isp: null,
          org: null,
          as: null
        }
        // return response.data
        return {
          status,
          data
        }
      }
    } else {
      throw new Error(`Status: ${response.status}, message: ${response.statusText}`)
    }
  } catch (error) {
    throw new Error(`Error: ${error}`)
  }
}
