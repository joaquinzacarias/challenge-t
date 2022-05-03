import express from 'express'
import * as fullInfoController from '../controllers/fullInfo'

const router = express.Router()

router.get('', fullInfoController.getFullForecastInfo)
router.get('/:city', fullInfoController.getFullForecastInfo)

export default router
