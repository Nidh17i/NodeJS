const fs=require('fs/promises');
const path=require('path');

const filepath=path.join(__dirname,'asyncawait.txt');


const writeFileFunction=async()=>{
    try{
     await fs.writeFile(filepath,'this is async await file','utf-8')
    }
    catch(err){
        console.log(err);
    }
}

writeFileFunction();

const readFileFunction=async()=>{
    try{
    const res= await fs.readFile(filepath,'utf-8');
    console.log(res);
    }catch(err){
        console.log(err);
    }
}

readFileFunction()

const updatedFile=async ()=>{

    try{
    const updated= await fs.appendFile(filepath,'\n this is updated data','utf-8');
    console.log(updated);
    }catch(err){
        console.log(err);
    }
}
updatedFile();