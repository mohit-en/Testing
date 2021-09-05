const fs = require('fs');

const biodata = {
    name: "tever",
    age: 26,
    channel: "Stone",
};

const jsonBioData = JSON.stringify(biodata);
console.log('====================================');
console.log(jsonBioData);
console.log('====================================');

fs.writeFileSync("tmp.txt", jsonBioData);

const readfile = fs.readFileSync("tmp.txt", "utf-8");

console.log(`Readed file content is \n${readfile}`);

// convert back to original data 

const ordata = JSON.parse(readfile);
console.log("Original data is \n" + ordata);


