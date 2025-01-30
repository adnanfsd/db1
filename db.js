const mongoose = require("mongoose");
// mongoose.connect("url").then(()=>{console.log()}).catch(()=>{})
mongoose.connect("mongodb+srv://tsadnan:adnants1234@cluster0.tkslg.mongodb.net/adnansdatabase?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{console.log("Connected to DB")})
.catch((err)=>{console.log(err)})