import mongoose from 'mongoose'
import jwt from 'jsonwebtoken'

const schema = new mongoose.Schema({
    username : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    fullname : {
        type : String ,
        required : true
    },
    thumbnial : {
        type : String,
        required : true
    }

})

schema.methods.generateJWT = function generateJWT() {
    return jwt.sign({
        fullname : this.fullname
    },'secretkey')
}

schema.methods.toAuthJSON = function toAuthJSON() {
    return {
        fullname : this.fullname,
        token : this.generateJWT()
    }
}

export default mongoose.model('Admin',schema)