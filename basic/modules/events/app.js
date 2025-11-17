// const EventEmitter=require('events');
// const emitter=new EventEmitter();

// emitter.on('greet',()=>{
//     console.log('hello Everyone!')
// })
// emitter.emit('greet');

const EventEmitter=require('events');
const eventEmitter=new EventEmitter();

eventEmitter.on('greet',(msg)=>{
    console.log(msg);
})

// eventEmitter.emit('greet',{name:'Nidhi',prof:'Developer'});

eventEmitter.emit('greet','hello Duniya');