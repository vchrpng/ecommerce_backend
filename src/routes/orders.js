import express from "express"
import Order from "../models/order"
import parseErrors from "../utils/parseErrors"

const router = express.Router()

router.get("/",(req,res) => {
  Order.find()
  .then(order => {
      res.json(order)
  })
  .catch(err => res.status(400).json({ errors : err.errors }))
})

router.post("/", (req, res) => {
  Order.create(req.body)
    .then(order => res.json({order}))
    .catch(err => res.status(400).json({ errors: parseErrors(err.errors) }))
})

export default router