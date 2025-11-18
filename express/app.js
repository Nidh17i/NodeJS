import express from "express";
import path from 'path';
const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to home page");
});
app.get("/about", (req, res) => {
  res.send("welcome to about page");
});
app.get("/contact", (req, res) => {
  res.send(`
        <div>
        <input type='text' placeholder='enter contact Number'/>
  
          <button>Submit</button>
          </div>

        `);
});

app.get('/profile',(req,res)=>{
  console.log(req.query);
  console.log(req.query.search);
  res.send(`<h1>user search for products ${req.query.search} </h1>`)
})


// const filepath=path.join(__dirname,'public','index.html')
// console.log(filepath);



app.get('/username/:id',(req,res)=>{
  console.log(req.params.id);
  res.send(`<h1> hii </h1>`)
})

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`server is running at port ${PORT}`);
});
