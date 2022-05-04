import express from 'express'
import * as fullInfoController from '../controllers/fullInfo'

const router = express.Router()

// GET localhost:3000/v1/current OR localhost:3000/v1/current/City- Location & Current Weather Info
router.get('', fullInfoController.getFullCurrentInfo)
router.get('/:city', fullInfoController.getFullCurrentInfo)

export default router
