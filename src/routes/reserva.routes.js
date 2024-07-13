import express from 'express'
import { CreateNewReserva, deleteReservaById, getAllReservas, updateReservaById } from '../controllers/reservas.controller.js'
import { authRequire } from '../middlewares/auth.middleware.js'




const router = express.Router()

router.get('/reserva', getAllReservas)

router.post('/reserva',  CreateNewReserva)

router.put('/reserva/:id', authRequire, updateReservaById)

router.delete('/reserva/:id', authRequire, deleteReservaById)

export default router