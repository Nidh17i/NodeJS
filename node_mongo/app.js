
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'

import { Users } from './src/models/userModel.js';
import { Teachers } from './src/models/teacherModel.js';
 
dotenv.config();

const app=express();

app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));

app.set('view engine','ejs');

const student=[{
    name:'Nidhi',
    grade:'10th',
    favSub:'Mathematics'
},
{
    name:'gita',
    grade:'10th',
    favSub:'Mathematics'
}
]
app.get('/report',(req,res)=>{
    res.render('report',{student});

})

mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log('connected...'))
.catch((err)=>console.log(err));

app.post('/',(req,res)=>{
 const userData=   Users.create({
        name:'nidhi',
        email:'das',
        age:25,

    })
    res.send(userData);
})

/************************TeacherRoutes*************************** */


app.get('/',(req,res)=>{
    res.render('createT')
})
app.post('/create',async(req,res)=>{
    const {name,subject,age}=req.body;
    const teacher= await Teachers.create({
        name,
        subject,
        age

    })
 res.send(teacher)
})

// app.post('/create',async(req,res)=>{
//     let {name,email,password}=req.body;

//    let createdUser=await User.create({
//         name,
//         email,
//         password
// })
// res.redirect('/read')
// })


const PORT=8080;
app.listen(PORT,()=>{
    console.log('server is running ');
})


