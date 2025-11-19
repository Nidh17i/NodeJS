
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
dotenv.config();
import { User } from './src/models/user.js';


const app=express();

app.set('view engine','ejs');
app.use(express.json());
app.use(express.urlencoded());
app.use(express.static('public'))



app.get('/',(req,res) => {
    
    res.render('index');

})
app.get('/read',async(req,res)=>{
    let allStudent=await User.find();
    res.render('read',{student:allStudent})
})

app.get('/edit/:id',async(req,res)=>{
    let student=await User.findOne({_id :req.params.id})
    res.render('edit',{student})
} )

app.post('/updated/:id',async(req,res)=>{
    let{name,email,password}=req.body;
    let student= await User.findOneAndUpdate({_id :req.params.id},{name,email,password})
    res.redirect('/read');
})

app.post('/create',async(req,res)=>{
    let {name,email,password}=req.body;

   let createdUser=await User.create({
        name,
        email,
        password
})
res.redirect('/read')
})

app.get('/student/:id',async (req,res)=>{
    let student=await User.findOneAndDelete({_id:req.params.id})
    res.redirect('/read')
})



const PORT=3000;

mongoose.connect(process.env.Mongo_URL)
.then(()=>console.log('connected...'))
.catch((err)=>console.log(err));

 app.listen(PORT,()=>{
    console.log(`server running PORT `)
 })