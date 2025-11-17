
const http=require('http');

const server=http.createServer((req,res)=>{
   if(req.url === '/'){
    res.write('hello Welcome to home page')
    res.end();
   }
   if(req.url==='/about'){
    res.write('wlecome to about Page');
    res.end();
   }
   if(req.url==='/eduction'){
    res.write('wlecome to eduction Page');
    res.end();
   }
 

});
const PORT=3000;
server.listen(PORT,()=>{
console.log('server start');
})


