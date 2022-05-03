import { geolocationInfo } from '../types'
import fc from '../utils/fetch'

const GEOLOCATION_API = 'http://ip-api.com/json/'

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
