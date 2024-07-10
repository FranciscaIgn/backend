import { Restaurant } from "../models/Restaurant.model.js";

export const getAllInfo = async(req, res) =>{
    try{
       const allInfo =await Restaurant.find()
       res.status(200).json({
        message: 'información encontrada',
        status: 200,
        data:allInfo
       })
    }catch(error){
       res.status(404).json({
        message: 'no se encontro la información',
        status: 404,
        error
       })
    }
}