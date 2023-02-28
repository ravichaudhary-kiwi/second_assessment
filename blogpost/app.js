const express = require('express');
const cors = require('cors');
require('./connection/connection');
const app = express();
const bodyParser = require('body-parser');
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
const router = require('./router/userRouter');
app.use(router);

app.listen(8000,()=>{
    console.log("8000")
});
