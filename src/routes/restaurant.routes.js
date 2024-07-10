import express from 'express'
import { CreateNewiInfo, deleteInfoById, getAllInfo, updateInfoById } from '../controllers/restaurant.controller.js'


const router = express.Router()

router.get('/info', getAllInfo)

router.post('/info', CreateNewiInfo)

router.put('/info/:id', updateInfoById)

router.delete('/info/:id', deleteInfoById)

export default router