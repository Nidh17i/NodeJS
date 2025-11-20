

import mongoose from "mongoose";

const userSchema=mongoose.Schema({
    name:String,
    password:String,
    email:String

})
export const User=mongoose.model('authUser',userSchema)