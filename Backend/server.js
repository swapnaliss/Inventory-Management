const express = require ("express");

const inventory = require("./data/inventory");
const dotenv = require('dotenv');
const connectDB = require("./config/db")

const app = express();
dotenv.config();
connectDB();
app.get("/",(req,res) =>{
    res.send("API is running...")
});

app.get('/api/inventory', (req,res)=>{
    res.json(inventory)
});

app.get('/api/inventory/:id',(req,res)=>{
    const invent =inventory.find((n) =>n._id === req.params.id);
    res.send(invent);
})

const PORT = process.env.PORT ||5000;
app.listen(PORT,console.log(`server started on PORT ${PORT}`));