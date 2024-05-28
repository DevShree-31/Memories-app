import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import router from './routes/posts.js'
import dotenv from 'dotenv'
const app=express()
dotenv.config()
app.use(bodyParser.json({limit:"30mb",extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}));
const corsOptions = {
    origin: 'http://localhost:3000', // The origin you want to allow
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS']
};
app.use(cors(corsOptions));
app.use('/posts',router)


//will use cloud mongoDB 
// const CONNECTION_URL="mongodb+srv://shreyansh:Shreyansh$123@cluster0.ap0tnyi.mongodb.net/"
const PORT=process.env.PORT ||5000;
mongoose.connect(process.env.CONNECTION_URL).then(
    ()=>app.listen(PORT,()=>console.log(`Connection established at port ${PORT}`)))
    .catch((error)=>console.log(error.message));