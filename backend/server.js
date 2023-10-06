const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
require("dotenv").config();

const PORT=process.env.PORT||8070;

app.use(cors());
app.use(bodyParser.json()); 

const URL =process.env.MONGODB_URL;

mongoose.connect(URL,{

    useUnifiedTopology: true,
    useNewUrlParser: true,
    writeConcern: { w: "majority", j: true, wtimeout: 1000 },

});


const connection = mongoose.connection;
connection.once("open", ()=>{
  console.log("Mongodb Connection success!");
})
app.listen(PORT, ()=> {
  console.log(`Server is up and running on port ${PORT}`)
});
