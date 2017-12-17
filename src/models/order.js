import mongoose from 'mongoose'

const schema = new mongoose.Schema({
    fullname : { type : String , required : true },
    phone : { type : String , required : true },
    email : { type : String , required : true },
    city : { type : String , required : true },
    province : { type : String , required : true },
    postcode : { type : String , required : true },
    country : { type : String , required : true },
    items : Array,
    total : { type : Number , required : true }
},{
    timestamps : true
})

export default mongoose.model('Order',schema)