 const fs = require('fs');

 fs.writeFileSync('./test.txt', "This is Nabin's sample"); //reading files synchronously , the txt file was auto generated

 fs.writeFile('./AsyncTest.txt' , "Testing Nabin's sample async",(err)=>{}); //reading files asynchronously , the txt file was auto generated here as well , this exptects a callback always

const res =  fs.readFileSync("./contacts.txt" , "utf-8"); //this return data from file
console.log(res) //Nabin Sharma: +91 8793289023 

fs.readFile("./contacts.txt" , "utf-8" , (err , result)=>{ //this does not return anything
    if(err) console.log("Error" , err); 
    else console.log(result);
})


fs.appendFileSync("./test.txt" , new Date().getDate().toLocaleString() ,);
fs.appendFile("./test.txt" , new Date().getDate().toLocaleString(), (err , res)=>{
    if(err) console.log("ERROR :", err);
    else console.log(res);
})

//we can use unlinkSync to delete files , statSync to get details of files and many many more functions to read files 
