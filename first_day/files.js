const fs = require("fs");

// reading file

// fs.readFile("../docs/write.txt", (err, data) => {
//     if (err) {
//         console.log(err);
//     }

//     console.log(data.toString());

// })


// write file

// fs.writeFile("../docs/write.txt", "Hello from write file", (err) => {
//     console.log("file was written");
// })

// make or delete directory 

// if (!fs.existsSync("../assets")) {
//     fs.mkdir("../assets", (err) => {
//         if (err) {
//             console.log(err)
//         }
//         console.log("directory was created")
//     })
// } else {
//     fs.rmdir("../assets", (err) => {
//         if (err) {
//             console.log(err)
//         }
//         console.log("directory was deleted")
//     })
// }


// delete file

if (fs.existsSync("../docs/sample.txt")) {
    fs.unlink("../docs/sample.txt", (err) => {
        if (err) {
            console.log(err)
        }
        console.log("file was deleted")
    })
} else {
    fs.writeFile("../docs/sample.txt", "Hello from write file", (err) => {
        console.log("file was written");
    })

}