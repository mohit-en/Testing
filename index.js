const fs = require('fs');

fs.writeFileSync("mohit/about.txt", "Hello");
fs.appendFileSync("mohit/about.txt", " This is mohit...");

const read = fs.readFileSync("mohit/about.txt", "utf-8")
console.log('====================================');
console.log(read);
console.log('====================================');

fs.renameSync("mohit/about.txt", "mohit/mybio.txt");

fs.unlinkSync("mohit/mybio.txt");

fs.rmdirSync("mohit");