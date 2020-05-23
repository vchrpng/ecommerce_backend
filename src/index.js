import express from 'express'
import cors from 'cors'
import path from 'path'
import mongoose from 'mongoose'
import auth from './routes/auth'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import Promise from 'bluebird'
import users from './routes/users'
import products from './routes/products'
import orders from './routes/orders'
import admin from './routes/admin'
import stripe from './routes/stripe'

dotenv.config()
const app = express()
app.use(cors())
app.use(bodyParser.json())
mongoose.Promise = Promise
mongoose.connect('mongodb://joe:1234@ds135777.mlab.com:35777/heroku_44t0bb4r' , { useMongoClient : true })

app.use('/api/auth',auth)
app.use('/api/users',users)
app.use('/api/products',products)
app.use('/api/orders',orders)
app.use('/api/stripe',stripe)

app.use('/api/admin',admin)

app.get('/*', (req,res) => {
    res.sendFile(path.join(__dirname,'index.html'))
})


app.listen(process.env.PORT || 8080,() => console.log('Running on localhost:8080'))