import { geolocationInfo } from '../types'
import fc from '../utils/fetch'
import { APIS } from '../utils/constants'

/**
 * Returns the actual location base on the Public IP
 * @returns OK:     status + data
 *          Error:  status + message
 */
export async function getGeolocation (): geolocationInfo {
  try {
    // Call IP-API
    const response = await fc.get(APIS.GEOLOCATION_API)

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

/**
 * Returns geolocation info base on the coords
 * @param   lat lat coord
 * @param   lon lon coord
 * @returns OK:     status + data
 *          Error:  status + message
 */
export async function getReverseGeolocation (lat: string, lon: string): geolocationInfo {
  try {
    // Call Reverse geolocation API
    const url = `${APIS.REVERSE_GEOLOCATION_API}latitude=${lat}&longitude=${lon}&localityLanguage=es`
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
