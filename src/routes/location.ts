import express from 'express'
import * as locationController from '../controllers/location'

const router = express.Router()

// GET localhost:3000/v1/location - Actual location
router.get('', locationController.getCity)

export default router
