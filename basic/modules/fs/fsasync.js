
const fs=require('fs');
const path=require('path');

const filename='fsAsync.txt';
const filePath=path.join(__dirname,filename);

const writeFile=fs.writeFile(filePath,'This is Async File','utf-8',
    (err)=>{
        if(err)
        console.err(err);
else console.log('file Created sucessfully');

    })

    fs.readFile(filePath,'utf-8',(err,data)=>{
        if(err)console.error(err);

        else console.log(data);
    })

    fs.appendFile(filePath,'\n This is updated data','utf-8',
        (err)=>{
            if(err)console.log(err);
            else console.log('file updated sucessfully');
        }
    )

    // fs.unlink(filePath,(err)=>{
    //     if(err) console.error(err);
    //     else console.log('file has been deleted')
    // })