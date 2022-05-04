import express from 'express'
import * as fullInfoController from '../controllers/fullInfo'

const router = express.Router()

// GET localhost:3000/v1/forecast OR localhost:3000/v1/forecast/City- Location & Forecast Weather Info
router.get('', fullInfoController.getFullForecastInfo)
router.get('/:city', fullInfoController.getFullForecastInfo)

export default router
