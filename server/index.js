import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import test  from './routers/test.js';
import mongoose from 'mongoose';


const app = express();
const PORT = process.env.port || 5000 ; 

const URI = 'mongodb+srv://admin:phu1234@cluster0.9efe8.mongodb.net/?retryWrites=true&w=majority';

app.use(bodyParser.json({limit: '30mb'}));
app.use(bodyParser.urlencoded({extended:true,limit:'30mb'}));
app.use(cors({
    origin: true ,
 
  }));

app.get('/',(req,res)=>{
    res.send("successfully");
});

app.use('/test',test);

mongoose.connect(URI,{ useNewUrlParser : true, useUnifiedTopology:true})
.then(()=>{
console.log("connected");
app.listen(PORT,()=>{

    console.log(`server is running on port ${PORT}`);
    })
}).catch(err=>{
    console.log('err',err);
})

