
const fs=require('fs');
const path=require('path');

const filePath=path.join(__dirname,'text.js');


fs.writeFileSync(filePath,'Nidhi create file updated ', 'utf-8')

 const readFile=fs.readFileSync(filePath,'utf-8');
 console.log(readFile);

 const updatedFile=fs.appendFileSync(filePath,'\nthis is updated data ','utf-8')

//  const deleteFile=fs.unlinkSync(filePath)

let newUpdatedFilename='updateTest.js';
const newFilepath=path.join(__dirname,newUpdatedFilename);
const renameFile=fs.renameSync(filePath,newFilepath);
console.log(renameFile);



