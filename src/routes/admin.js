import express from 'express'
import Admin from '../models/admin'

const router = express.Router()

router.post('/', (req,res) => {
    const { username , password } = req.body.admin
    Admin.findOne({ username : username }).then((admin,err) => {
        res.json({ admin: admin.toAuthJSON() })
      if(err) {
            res.status(400).json({ err })
        }
    })
})

router.post('/new' ,(req,res) => {
    const admin = new Admin(req.body)
    admin.save()
    .then(admin => {
        res.json({ admin : admin.toAuthJSON() })
      })
      .catch(err => res.status(400).json({ errors: parseErrors(err.errors) }))
})

router.get("/",(req,res) => {
    Admin.find()
    .then(user => {
        res.json(user)
    })
    .catch(err => res.status(400).json({ errors : err.errors }))
})


export default router
