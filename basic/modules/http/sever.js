
const http=require('http');

const server=http.createServer((req,res)=>{
   if(req.url === '/'){
    res.write('hello Welcome to home page')
    res.end();
   }
});
const PORT=3000;
server.listen(PORT,()=>{
console.log('server start');
})


