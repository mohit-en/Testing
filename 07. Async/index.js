const fs = require('fs');

fs.mkdir("aSc", (err) => {
    console.log('directory is created');
});

fs.writeFile("aSc/bio.txt", "Hello world", (err) => {
    console.log(`File is successfully created`);
});

fs.appendFile("aSc/bio.txt", "\nHow are you ", (err) => {
    console.log("Append is completed");
});

const read = fs.readFile("aSc/bio.txt", "utf-8", (err, read) => {
    console.log(read);
});

fs.rename("aSc/bio.txt", "aSc/mybio.txt", (err) => {
    console.log('rename completed');
});

fs.unlink("aSc/mybio.txt", (err) => {
    console.log("File deleted.");
})
fs.rmdir("aSc", (err) => {
    console.log("Folder is deleted.");
})

