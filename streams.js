const fs = require("fs");

const readableStream = fs.createReadStream("HugeFile.txt","utf-8");
console.log(readableStream);
const writableStream = fs.createWriteStream("HugeFile_copy.txt");

readableStream.on("data", (buffer) => {
    writableStream.write(buffer);
});

readableStream.on("end", () => {
    console.log("File copied successfully");
});

readableStream.on("error", (err) => {
    console.log(err.message);
});

writableStream.on("error", (err) => {
    console.log(err.message);
});



