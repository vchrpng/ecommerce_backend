import express from "express"
import Order from "../models/order"
import parseErrors from "../utils/parseErrors"
import postCharge from './stripe'

const router = express.Router()

router.get("/",(req,res) => {
  Order.find()
  .then(order => {
      res.json(order)
  })
  .catch(err => res.status(400).json({ errors : parseErrors(err) }))
})

router.post('/stripe/charge', postCharge)

// router.post("/", (req, res) => {
//   Order.create(req.body)
//     .then(order => res.json({order}))
//     .catch(err => res.status(400).json({ errors: parseErrors(err.errors) }))
// })

export default router