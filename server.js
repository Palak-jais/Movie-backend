require('dotenv').config();
const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')
const route=require('./router/router');


const app=express();
app.use(cors());

app.use(express.json());
const db=process.env.MONGO_URL;
mongoose.connect(db,{
    useNewUrlParser: true, 
useUnifiedTopology: true  
}).then(()=>{
    console.log("connected")
}).catch((err)=>console.log(err));

app.use(route);
app.listen(5000,()=>{
    console.log("listening to port 5000");
})
