import config from 'config'
import jwt from 'jsonwebtoken'

function auth(req, res ,next) {
    const token = req.header('x-auth-token')

    // Check for token
    if(!token) {
        res.status(401).json({msg: "No token why? Authorization denied"})
    }
    try{
        // Verify totken
        const decoded = jwt.verify(token, config.get('jwtSecret'))
        // Add user from payload
        req.user = decoded
        next()
    }catch(e) {
       res.status(400).json({ msg: "Token invalid" }) 
    }
        
}
export default auth