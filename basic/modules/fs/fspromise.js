
const fs=require('fs');
const path=require('path');

const filepath=path.join(__dirname,'fspromise.txt');


fs.promises.writeFile(filepath,'I am promise file','utf-8')
.then((data)=>console.log(data))
.catch((err)=>console.log(err));

fs.promises.readFile(filepath,'utf-8')
.then((data)=>console.log(data))
.catch((err)=>console.log(err));

fs.promises.appendFile(filepath,'\n hello everyone','utf-8')
.then((data)=>console.log(data))
.catch((err)=>console.log(err));

const newFile='fsPromise.txt';
const newpath=path.join(__dirname,newFile)

fs.promises.rename(filepath,newpath).then((data)=>console.log(data))
.catch((err)=>console.log(err));