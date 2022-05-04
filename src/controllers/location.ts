import { Request, Response } from 'express'

import * as geolocationService from '../services/geolocation'

/**
 * Obtain the actual location base on the public IP
 * @param _req  call request
 * @param res   call response
 */
export async function getCity (_req: Request, res: Response): Promise<void> {
  try {
    // Obtain the actual location
    const geolocationInfo = await geolocationService.getGeolocation()

    if (geolocationInfo.status !== 'success') {
      res.status(400).send(geolocationInfo)
    } else {
      res.status(200).send(geolocationInfo.data)
    }
  } catch (error) {
    throw new Error(`Error: ${error}`)
  }
}
