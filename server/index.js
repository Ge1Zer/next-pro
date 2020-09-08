const express = require('express')
    , bodyParser = require('body-parser')
    , routers = require('./routers/index')
    , mongoose = require('mongoose')
    , next = require('next')
    , config= require('./config')
    , cookieParser = require('cookie-parser')


// start server
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use( '/api', routers )



//start layer next
const dev = process.env.NODE_ENV !== 'production';
const appOnNext = next({ dev });
const handle = appOnNext.getRequestHandler();

// secret data
const MONGO = config['mongoUri'];
const PORT =config['port']

appOnNext.prepare().then(i=>{
    app.get('*',(req,res)=>handle(req,res) )
    app.listen(PORT,(err)=>{ err && console.log(err);console.log(`<===Listen ${PORT}====>`) } )
})

// connect mongoose
// mongoose.connect(MONGO,
//     {  useUnifiedTopology: true,useNewUrlParser: true },(err)=>{
//    if(err)return console.log(err)
// })
