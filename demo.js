const registeruse = require("./Registration")
const os = require("os")
const fs = require("fs")
const express = require("express")


function sayhello(){
    console.log("hello all")
    console.log(os.hostname())
    registeruse.registeruser()
}
sayhello()

// fs.writeFile('./smp.txt','testing FS module', (err)=>{
//     if(err){
//         console.log("error occured")
//         return
//     }
//     console.log("file created successfully")
// })
// fs.readFile('./smp.txt','utf8',(err,data)=>{
//     if(err){
//         console.log("error ocurred")
//         return
//     }
//     console.log("data in file:",data)
// })

const app = express();

app.get('/home',(req,res)=>{
    console.log("Request received at /home")
    res.send("hey, Welcome from the indu")
})

app.post('/saybye',(req,res)=>{
    console.log("Request received at /saybye")
    res.send("bye bye, see you soon")

})

app.put('/updateuser',(req,res)=>{
    console.log("Request received at /updateuser")
    res.send("user updated successfully")
})

app.delete('/deleteuser',(req,res)=>{
    console.log("Request received at /deleteuser")
    res.send("user deleted successfully")       
})

app.listen(8000,()=>{
    console.log("Your server is running")
})