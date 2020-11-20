import express from 'express'
const router = express.Router()
import bcrypt from 'bcryptjs'
import config from 'config'
import jwt from 'jsonwebtoken'
import auth from "../middleware/auth.js"

import User from '../models/User.js'


router.post('/',(req,res) => {
    const { email, password } = req.body
    // Simple validation
    if(!email || !password) {
        return res.json({
            msg:'Please enter all the fields',
            msgnum: 1
        })
    }

    // Check for existing user
    User.findOne({ email })
      .then(user => {
          if(!user) return res.json({
              msg: "E-mail isn't registered",
              msgnum:2
            })

          // Validate password
          bcrypt.compare(password, user.password)
            .then(isMatch => {
                if(!isMatch) return res.json({
                    msg: 'Invalid credentials',
                    msgnum:3
                })
                
                jwt.sign(
                    { id: user.id },
                    config.get('jwtSecret'),
                    { expiresIn: 1800 },
                    (err, token) => {
                        if(err) throw error
                        res.json({
                            token,
                            user: {
                                id: user.id,
                                name: user.name,
                                email: user.email
                            }
                        }) 
                    }
                )

            })
          
        })


})

// router.get('/', auth, (req, res) => {
//     User.findById(req.user.id)
//       .select("-password")
//       .then(user => res.status(200).send(user))
        
// })


export default router