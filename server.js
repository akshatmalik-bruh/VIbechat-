const express = require("express");
const app = express();
const postRoute = require("./routes/postroutes");
const userData = require("./db/userCredentials");
const getRoute = require("./routes/getroutes");
const cors = require("cors");
app.use(express.json());
app.use(cors());
app.use("/posts",postRoute);
app.use("/get",getRoute);


app.get("/",(req,res)=>{
    res.send("kya re lund ke");
})
app.listen(3000,()=>{
    console.log("Server is running on port 3000");

})