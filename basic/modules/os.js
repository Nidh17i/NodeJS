const os=require('os');


//Useful for writing os-platform applications.
console.log(os.platform());

//Helps optimize code for cpu architectures.
console.log(os.arch());

//Returns the amount of free system memory in bytes.
console.log(os.freemem)

// Returns the total system memory in bytes.
console.log(os.totalmem());

console.log(os.hostname());