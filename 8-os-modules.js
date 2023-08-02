const os = require('os');

//info about current user
const user = os.userInfo()
console.log(user)

const user_01 = os.type()
console.log(user_01)

const  user_02 = os.release()
console.log(user_02)

 
//methos returns the system uptime in seconds
console.log(`The system uptime is ${os.uptime()} seconds`)

const currentOS = {
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeedom: os.freemem()
}
console.log(currentOS)




