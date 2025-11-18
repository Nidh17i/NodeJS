import express from 'express';

const app=express();

app.use(express.json());

let users=[
    {id:1,name:'Nidhi'},
    {id:2,name:'Anuja'}
]

app.post('/users',(req,res)=>{
    const newUser={
        id:users.length +1,
        name:req.body.name
    }
    users.push(newUser);
    res.status(201).json(newUser)
    c
})

app.get('/users',(req,res)=>{
    res.json(users);
})

app.put('/users/:id',(req,res)=>{
    const user=users.find((u)=> u.id == req.params.id);
    if(!user) res.status(404).json({message:'User not found'});

    user.name=req.body.name || user.name;
    res.json(user);

})

app.get('/users/:id',(req,res)=>{
    const user=users.find((u)=> u.id == req.params.id);
    if(!user) res.status(404).json({message:'user not found'});
    
    res.json(user);
})

app.delete('/users/:id', (req, res) => {
    users = users.filter(u => u.id != Number(req.params.id));  
    res.json({ message: 'User Deleted!' });
});

const PORT=8080;
app.listen(PORT ,()=>{
    console.log(`server runnning PORT: ${PORT}`)

})