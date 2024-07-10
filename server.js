import express from 'express'
import infoRouter from './src/routes/restaurant.routes.js'
import userRouter from './src/routes/user.routes.js'

import { db } from './src/config/db.config.js'

import dotenv from 'dotenv'

dotenv.config()

const app = express()

//middleswares parse Json  siempre van si o si y siempre primero este//
app.use(express.json())
app.use(express.urlencoded({extended: true}))




//middlewares para rutas //
app.use('/api/v1', infoRouter)

app.use('/api/v1', userRouter)




db()

app.listen(process.env.PORT, ()=>{
    console.log(`servidor levantado en el puerto: ${process.env.PORT}`)
})