import { Request, Response } from 'express'

import * as fullInfoService from '../services/fullInfo'

/**
 * Obtain the location and current weather info base on the Public IP or a City
 * @param _req  call request
 * @param res   call response
 */
export async function getFullCurrentInfo (req: Request, res: Response): Promise<void> {
  try {
    const {
      city = undefined
    } = req.params

    // Get the location and current weather info
    const fullCurrentInfo = await fullInfoService.getFullCurrentInfo(city)

    if (fullCurrentInfo.status !== 'success') {
      res.status(400).send(fullCurrentInfo)
    } else {
      res.status(200).send(fullCurrentInfo.data)
    }
  } catch (error) {
    throw new Error(`Error: ${error}`)
  }
}

/**
 * Obtain the location and forecast weather info base on the Public IP or a City
 * @param _req  call request
 * @param res   call response
 */
export async function getFullForecastInfo (req: Request, res: Response): Promise<void> {
  try {
    const {
      city = undefined
    } = req.params

    // Get the location and forecast weather info
    const fullForecastInfo = await fullInfoService.getFullForecastInfo(city)

    if (fullForecastInfo.status !== 'success') {
      res.status(400).send(fullForecastInfo)
    } else {
      res.status(200).send(fullForecastInfo.data)
    }
  } catch (error) {
    throw new Error(`Error: ${error}`)
  }
}
