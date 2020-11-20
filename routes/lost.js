import express from 'express'
const router = express.Router()
import auth from '../middleware/auth.js' 
import Item from '../models/Item.js'

router.post('/', auth, (req, res) => {
    const dbItem = req.body

    Item.create(dbItem, (err, data) => {
        if(err){
            res.status(500).send(err)
        }
        else{
            res.status(201).send(data)
        }
    })
})

router.get('/', auth, (req, res) => {
    

    Item.find((err, data) => {
        if(err){
            res.status(500).send(err)
        }
        else{
            res.status(200).send(data)
        }

    })
})

router.get('/:id', (req, res) => {
    Item.find({id: req.params.id}, (err, data) => {
        if(err){
            res.status(500).send(err)
            
        }
        else{
            res.status(200).send(data)
        }
    })
})

export default router