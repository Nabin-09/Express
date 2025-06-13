 const fs = require('fs');

 fs.writeFileSync('./test.txt', "This is Nabin's sample"); //reading files synchronously , the txt file was auto generated

 fs.writeFile('./AsyncTest.txt' , "Testing Nabin's sample async",(err)=>{}); //reading files asynchronously , the txt file was auto generated here as well

 
