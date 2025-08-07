const fs = require("fs");

// fs.writeFile("message1.txt", "hello node", (err) => {
//   if (err) throw err;
//   console.log("file created");
// });

fs.readFile("message.txt","utf8", (err,data)=>{
    if(err) throw err;
    console.log(data);
})

// fs.readFile("message1.txt", "utf8" ,(err,data)=>{
//     if(err) throw err;
//     console.log(data);
// })

// fs.writeFile("message1.txt", "Hello from NEha" ,(err)=>{
//     if(err) throw err;
//     console.log("file written");
// })

