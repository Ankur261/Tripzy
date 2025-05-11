import express from 'express'
import mongoose from 'mongoose';
import cors from 'cors';
import userRouter from './src/routes/userRouter.js';
// jwt, routs, 
import './src/configs/dbconfig.js'

const app = express() ;
const port = 3000 ;
app.use(express.json())
app.get('/', (req,res)=> {
    res.send("Flight Booking Api");
});



app.use('/auth', userRouter)

app.listen(port, () => {
    console.log("server is running on port ", port);
})