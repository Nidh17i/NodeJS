const EventEmitter=require('events');
const eventEmitter=new EventEmitter();


eventEmitter.on('user-login',(username)=>{
    console.log(`welcome ${username}`);
})
eventEmitter.on('user-purchase',(username,item)=>{
    console.log(`username is ${username} and purchase item is ${item}`)
})
eventEmitter.on('profile-updated',(username)=>{
    console.log(`updated user ${username}`);
})
eventEmitter.on('user-logout',(username)=>{
    console.log(`logout user name ${username}`);
})


eventEmitter.emit('user-login','Nidhi');
eventEmitter.emit('user-purchase','Nidhi','laptop');
eventEmitter.emit('profile-updated','Nidhi');
eventEmitter.emit('user-logout','Nidhi');