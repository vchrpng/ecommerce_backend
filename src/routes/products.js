import express from "express"
import Product from '../models/product'
import parseErrors from '../utils/parseErrors'

const router = express.Router()

router.get("/",(req,res) => {
    Product.find()
    .then(products => {
        res.json(products)
    })
    .catch(err => res.status(400).json({ errors : err.errors }))
})

router.post('/',(req,res) => {
    Product.create(req.body)
    .then(order => res.json({order}))
    .catch(err => res.status(400).json({ errors: parseErrors(err.errors) }))
})

router.put('/edit',(req,res) => {
    console.log(req.body)
    Product.update({ id : req.body.id },req.body)
    .then(result => res.json({result}))
    .catch(err => res.status(400).json({ errors: parseErrors(err.errors) }))
})

router.put("/new",(req,res) => {
    const arr = req.body
    arr.forEach(obj  => {
        Product.update(
            { id : obj.id },
            { inventory : obj.inventory},
            { multi : true }
        )
    })
    res.json({ })
})



router.delete('/del',(req,res) => {
    console.log(req.body)
    Product.remove({id : req.body.id})
    .then(result => res.json({result}))
    .catch(err => res.status(400).json({ errors: parseErrors(err.errors) }))
})

export default router