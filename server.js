import express from 'express'
import infoRouter from './src/routes/restaurant.routes.js'


import { db } from './src/config/db.config.js'

import dotenv from 'dotenv'

dotenv.config()

const app = express()



//middlewares //
app.use('/api/v1', infoRouter)




db()

app.listen(process.env.PORT, ()=>{
    console.log(`servidor levantado en el puerto: ${process.env.PORT}`)
})