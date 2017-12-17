import mongoose from 'mongoose'

const schema = new mongoose.Schema({
    id : { type : Number, required : true },
    thumbnail : { type : String , required : true },
    images : { type : Array , required : true },
    title : { type : String , required : true },
    color : String,
    category : { type : String , required : true },
    price : { type : Number ,required : true},
    inventory : { 
        S  : { type : Number,required : true,min : 0 },
        M  : { type : Number,required : true,min : 0 },
        L  : { type : Number,required : true,min : 0 },
        XL : { type : Number,required : true,min : 0 }
     },
     description : { type : String , required : true }
    
})

export default mongoose.model('Product',schema)