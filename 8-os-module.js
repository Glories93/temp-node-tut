const os = require('os')

// info about current user
const user = os.userInfo()

console.log(user)


// method returens the system uptiem in seconds
console.log(`The System Uptime is ${os.uptime() } seconds`)


const currentsOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

console.log(currentsOS)