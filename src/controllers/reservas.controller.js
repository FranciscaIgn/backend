import { Reservas} from "../models/Reservas.model.js";

export const getAllReservas = async(req, res) =>{
    try{
       const allReserva =await Reservas.find()
       res.status(200).json({
        message: 'reserva encontrada',
        status: 200,
        data: allReserva
       })
    }catch(error){
       res.status(404).json({
        message: 'no se encontro la reserva',
        status: 404,
        error
       })
    }
}


export const CreateNewReserva = async(req, res) =>{
    try{
        const{nombre, correo, telefono, fecha, comensales} = req.body

        const reserva = new Reservas({
            nombre,
            correo,
            telefono,
            fecha,
            comensales
        })

        const SaveReserva = await reserva.save()

        res.status(201).json({
            message: 'reserva creada con éxito',
            status: 201,
            data: SaveReserva
        })
    }catch(error){
        res.status(500).json({
            message: 'Error al crear la reserva',
            status: 500,
            error
        })

    }
}

export const updateReservaById = async(req, res) =>{
    try{
        const reservaID = req.params.id
        const updatedReserva = req.body

        const updateReserva = await Reservas.findOneAndUpdate({ _id: reservaID}, updatedReserva, { new: true })
        if(!updateReserva) res.status(404).json({message:'reserva no encontrada', status: 404}) // guard condition

            res.status(202).json({
                message: 'información actualizada con éxito',
                status: 202,
                data: updateReserva
            })
        }catch(error){ 
            res.status(500).json({
                message: 'no pudimos actualizar la información',
                status: 500,
                error
            })
    }
}

export const deleteReservaById = async(req, res) =>{
   try {
    const reservaID = req.params.id

    const removeReserva = await Reservas.findOneAndDelete({ _id: reservaID })
    if(!removeReserva)res.status(404).json({ message: 'reserva no encontrada', status: 404}) // guard condition
        res.status(202).json({
    message: 'reserva eliminada con éxito',
    status: 202,
})
   } catch (error) {
     res.status(500).json({
        mesagge: 'No pudimos eliminar la reserva',
        status: 500,
        error
     })
   }
}