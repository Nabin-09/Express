const express = require('express')
const users = require("./MOCK_DATA.json")

const app = express();

const PORT = 3000
app.listen(PORT , ()=>{
    console.log(`Server running in ${PORT}`);
})