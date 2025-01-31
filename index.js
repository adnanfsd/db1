var express = require('express');
require("./db")
const studModel = require("./model/student")

var app = express();

var port = 8001;
app.use(express.json());
// api to add data to db
app.post("/",(req,res)=>{
    try {
        
        studModel(req.body).save();
        res.send("Data added successfully!");
    } catch (error) {
        res.send(error);
    }
})

// api to read the data in the db
app.get('/',async(req,res)=>{
    try {
        var data = await studModel.find();
        res.send(data);         
    } catch (error) {
        res.send(error);
    }
})
// api to delete data

app.delete('/remove/:id',async(req,res)=>{
    try {
        var data = await studModel.findByIdAndDelete(req.params.id,req.body);
        res.send("deleted successfully");
    } catch (error) {
        res.send(error);
    }
})


// api to update

app.put('/edit/:id',async(req,res)=>{
    try {
        var data = await studModel.findByIdAndUpdate(req.params.id,req.body);
        res.send("updated successfully");
    } catch (error) {
        res.send(error);
    }
})

// port
app.listen(port,(req,res)=>{
    console.log(`server is running in port ${port}`)
})