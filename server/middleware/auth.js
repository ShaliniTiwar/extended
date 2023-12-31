import jwt from 'jsonwebtoken';

const auth = (req , res , next) =>{
    try {
        const token = req.headers.authorization.split(' ')[1]

        let decodeData = jwt.verify(token , 'test' )//INPLACE test write without code process.env.JWt_SECRET
        req.userId = decodeData?.id

        next()
    } catch (error) {
        console.log(error)
    }
}

export default auth;