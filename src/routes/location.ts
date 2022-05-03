import express from 'express'
import * as locationController from '../controllers/location'

const router = express.Router()

router.get('', locationController.getCity)

export default router
