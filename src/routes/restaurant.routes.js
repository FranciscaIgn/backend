import express from 'express'
import { getAllInfo } from '../controllers/restaurant.controller'


const router = express.Router()

router.get('/info', getAllInfo)


export default router