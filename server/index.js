import express from 'express'

// jwt, routs, 


const app = express() ;
const port = 3000 ;
app.get('/', (req,res)=> {
    res.send("hi");
});


app.listen(port, () => {
    console.log("server is running on port ", port);
})