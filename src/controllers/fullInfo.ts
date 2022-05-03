import { Request, Response } from 'express'

import * as fullInfoService from '../services/fullInfo'

export async function getFullCurrentInfo (req: Request, res: Response): Promise<void> {
  try {
    const {
      city = undefined
    } = req.params

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

export async function getFullForecastInfo (req: Request, res: Response): Promise<void> {
  try {
    const {
      city = undefined
    } = req.params

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
