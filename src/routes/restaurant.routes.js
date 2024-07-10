import express from 'express'
import { CreateNewiInfo, getAllInfo } from '../controllers/restaurant.controller.js'


const router = express.Router()

router.get('/info', getAllInfo)

router.post('/info', CreateNewiInfo)


export default router