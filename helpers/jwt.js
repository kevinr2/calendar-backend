const jwt = require('jsonwebtoken')

const generatJWT = (uid, name)=>{

    return new Promise((resolve,reject)=>{
        const payload = {uid,name}
        jwt.sign(payload, process.env.SCRETE_JWT_SEED,{
            expiresIn:'2h'
        },(error,token)=>{
            if (error) {
               console.log(error)
               reject('no se pudo generar el token') 
            }
            resolve(token)
        })
        
    })

}

module.exports = {
    generatJWT
}