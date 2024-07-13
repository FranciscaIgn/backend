import mongoose from "mongoose";

const Schema = mongoose.Schema

const ReservasSchema = new Schema({
    nombre: {type: String, required: true},
    correo: {type: String, required: true},
    telefono: {type: Number, required: true},
    fecha: {type: String, required: true},
    comensales: {type: String, required: true}

}, {versionKey: false})

export const Reservas = mongoose.model('Reservas', ReservasSchema)