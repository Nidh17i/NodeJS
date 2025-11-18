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
const filepath=path.join(__dirname,'public','index.html')
console.log(filepath);


const PORT = 8080;

app.listen(PORT, () => {
  console.log(`server is running at port ${PORT}`);
});
