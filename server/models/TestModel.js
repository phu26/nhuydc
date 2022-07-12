import mongoose from "mongoose";


const schema = new mongoose.Schema({
    
    code:{
        type: String,
        required: true
    },
    shop_id:{
        type: Number,
        default: 0
    },
   
    
   
},{timestamps :true}
);

export const TestModel = mongoose.model('TestModel',schema);