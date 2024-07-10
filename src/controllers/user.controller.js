import { User } from "../models/User.model.js";



export const getAllUsers = async(req, res) =>{
    try {
        const allUsers = await User.find()
        res.status(200).json({
            message: "usuario encontrado", 
            status: 200, 
            data: allUsers})
    } catch (error) {
        res.status(404).json({
            message: "no pudimos encontrar al usuario", 
            status: 404, 
            error})
    }
}