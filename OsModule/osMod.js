const os = require('os');

console.log(os.arch());
console.log(os.hostname());
console.log(os.platform());
console.log(os.tmpdir());
console.log(os.type());
console.log(`Total memory is ${os.totalmem() / 1024 / 1024 / 1024}`);
console.log(`Free memory is ${os.freemem() / 1024 / 1024 / 1024}`);