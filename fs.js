//const fs = require("fs");
// if(!fs.existsSync("docs")){
//     fs.mkdir("docs", (err) => {
//         if (err) {
//             console.log(err);
//         }
//     else {
//         console.log("Directory created successfully");
//     }
// });

// }
// fs.writeFile("docs/file.txt", "Hello World", (err) => {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log("File created successfully");
//     }
// });
// fs.readFile("docs/file.txt", (err, data) => {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log(data.toString());
//     }
// });
// if(fs.existsSync("docs/file.txt")){
//     fs.unlink("docs/file.txt", (err) => {
//         if (err) {
//             console.log(err);
//         }
//         else {
//             console.log("File deleted successfully");
//         }
//     });
// }
const fs = require("fs");
const path = "docs";

if (fs.existsSync(path)) {
    fs.rm(path, { recursive: true, force: true }, (err) => {
        if (err) {
            console.error("Error deleting directory:", err);
        } else {
            console.log("Directory deleted successfully");
        }
    });
} else {
    console.log("Directory does not exist");
}