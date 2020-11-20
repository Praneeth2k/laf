import express from 'express'
const router = express.Router()

import Item from '../models/Item.js'

router.post('/', (req, res) => {
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

router.get('/', (req, res) => {
    

    Item.find((err, data) => {
        if(err){
            res.status(500).send(err)
        }
        else{
            res.status(200).send(data)
        }

    })
})

export default router