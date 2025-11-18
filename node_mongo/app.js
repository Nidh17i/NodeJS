
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
 import { User } from './src/models/userModel.js';
 
dotenv.config();
const app=express();


mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log('connected...'))
.catch((err)=>console.log(err));

async function insert() {
  await  User.create({
        name:'Nidhi',
        email:'darwadenidhi174@gmail.com'
    })
    
}
insert();

const PORT=8080;
app.listen(PORT,()=>{
    console.log('server is running');
})

