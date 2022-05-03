import express from 'express'
import * as fullInfoController from '../controllers/fullInfo'

const router = express.Router()

router.get('', fullInfoController.getFullCurrentInfo)
router.get('/:city', fullInfoController.getFullCurrentInfo)

export default router
