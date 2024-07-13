import bcrypt from 'bcrypt'


export const validateLoginData = async(user) =>{
   const verifyContraseña = await bcrypt.compare(contraseña, user.contraseña)
       
       
            if(!verifyUserByCorreo || !verifyContraseña){
                return 'Los datos ingresados son invalidos' 
            }
                
}