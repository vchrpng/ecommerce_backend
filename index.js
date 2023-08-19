import express from 'express'
import cors from 'cors'
import path from 'path'
import mongoose from 'mongoose'
import auth from './src/routes/auth'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import Promise from 'bluebird'
import users from './src/routes/users'
import products from './src/routes/products'
import orders from './src/routes/orders'
import admin from './src/routes/admin'
import stripe from './src/routes/stripe'

dotenv.config()
const app = express()
app.use(cors())
app.use(bodyParser.json())
mongoose.Promise = Promise

mongoose.connect('mongodb+srv://joe:1234@cluster-44t0bb4r.o7zau.mongodb.net/heroku_44t0bb4r?retryWrites=true&w=majority', { useCreateIndex: true, useUnifiedTopology: true, useNewUrlParser: true })

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