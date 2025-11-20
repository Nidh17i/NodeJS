import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { User } from './model/userModel.js';
import { connect } from 'http2';
dotenv.config();

const app=express();

app.set('view engine','ejs');
app.use(express.json());
app.use(express.urlencoded());
app.use(express.static('public'))

mongoose.connect(process.env.Mongo_URL)
.then(()=>console.log('connect'))
.catch((err)=>console.log(err))


app.get('/',(req,res)=>{
    res.render('signup')
})

app.post('/signup',(req,res)=>{
    let {name,email,pasword}=req.body;
    const authData=User.create({
        name,
        email,
        pasword
    })
   console.log(authData)
})
app.listen(3000);