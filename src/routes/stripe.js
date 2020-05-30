import express from 'express'

const router = express.Router()

const stripe = require('stripe')('sk_test_UEkP0MFTLy632BA3RdF3htoX00jbVwq9Ct')

async function postCharge(req, res) {
    try {
      const { amount, source , receipt_email, shipping } = req.body

      const charge = await stripe.charges.create({
        amount,
        currency: 'usd',
        source,
        receipt_email,
        shipping
      })
      
      if (!charge) throw new Error('charge unsuccessful')
      
      res.status(200).json({
        message: 'charge posted successfully',
        charge
      })
    } catch (error) {
      res.status(500).json({
        message: error.message
      })
    }
  }

  
router.post('/charge', postCharge)

  
export default router 
  