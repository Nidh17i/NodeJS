const path=require('path');

console.log('dir',__dirname);
console.log('file',__filename)

const pathjoin=path.join(__dirname,'nidhi.js')
console.log('pp',pathjoin)

const c=require(pathjoin)
console.log(c)

 const parseData=path.parse(pathjoin);
 const resolvedPath=path.resolve(pathjoin);
 const extname=path.extname(pathjoin);
 const basename=path.basename(pathjoin);
 const dirname=path.dirname(pathjoin)

 console.log({parseData,resolvedPath,extname,basename,dirname});