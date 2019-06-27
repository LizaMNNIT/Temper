var express = require('express');
var bodyparser = require('body-parser');
var redis = require('redis');
var session = require('express-session');
var redisStore = require('connect-redis')(session);
var cookieparser = require('cookie-parser');
var rootController=require('./root');
var senderControl=require('./sender');
var travellerController=require('./traveller');
var registerController=require('./register');
var loginController=require('./login');
var paymentController=require('./payment');
var acceptedList=require('./info');
var cors=require('cors');
var uuid=require('uuid');
//var RedisCheck = require('./RedisSessionChecker');


var app = express();
var client = redis.createClient();


app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));


app.post('/sender',(req,res)=>{
  senderControl.senderUser(req.body.userName,req.body.location,req.body.destination,req.body.fromDate,req.body.toDate,req.body.weight,res);
});
app.post('/register',(req,res)=>{
  registerController.registeruser(req.body.name,req.body.email,req.body.userName,
    req.body.password,req.body.contact,req.body.aadhar,req.body.expiryDate,res);
});

/*app.get('/',(req,res)=>{
  if(req.session.email){
    res.redirect('/choice.html');
  }
  else{
    res.render('/home.html');
  }
});*/

app.post('/',(req,res)=>{
  rootController.rootUser(client,res);
});

app.post('/login',(req,res)=>{
  loginController.loginUser(req.body.username1,req.body.password,client,res);
});
app.post('/payment',(req,res)=>{
  paymentController.paymentUser(req.body.userName,req.body.amount,req.body.subs_date,req.body.subs_time,res);
});
app.post('/traveller',(req,res)=>{
  travellerController.travellerUser(req.body.userName,req.body.flightName,req.body.airportName,req.body.date,req.body.time,req.body.location,req.body.destination,res);
});
app.post('/accept',(req,res)=>{
  acceptedList.infoUser( req.body.Sid,req.body.Tid,req.body.amount,res);
});

app.listen(4010);
