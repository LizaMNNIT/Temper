var express = require('express');
var bodyparser = require('body-parser');
var redis = require('redis');
var session = require('express-session');
var redisStore = require('connect-redis')(session);
var cookieparser = require('cookie-parser');
var rootController=require('./root');
var registerController=require('./register');
var paymentController=require('./payment');
var loginController=require('./login');
var senderControl=require('./sender');
var req_Sender=require('./sender_requests');
var options_sender=require('./viewOptions');
var status_sender=require('./senderStatus');
var previous_sender=require('./senderPrevious');
var travellerController=require('./traveller');
var req_Traveller=require('./traveller_request');
var options_traveller=require('./viewResponse');
var respond_traveller=require('./respond');
var cors=require('cors');
var uuid=require('uuid');


var app = express();
var client = redis.createClient();


app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));





app.post('/',(req,res)=>{
  rootController.rootUser(client,res);
});

app.post('/register',(req,res)=>{
  registerController.registeruser(req.body.name,req.body.email,req.body.userName,
    req.body.password,req.body.contact,req.body.aadhar,req.body.expiryDate,res);
});

app.post('/payment',(req,res)=>{
  paymentController.paymentUser(req.body.userName,req.body.amount,req.body.subs_date,req.body.subs_time,res);
});

app.post('/login',(req,res)=>{
  loginController.loginUser(req.body.username1,req.body.password,client,res);
});

app.post('/sender',(req,res)=>{
  senderControl.senderUser(req.body.loc,req.body.dest,req.body.date,req.body.weight,req.body.type,client,res);
});
app.post('/sender_requests',(req,res)=>{
  req_Sender.senderRequest(client,res);
});
app.post('/viewOptions',(req,res)=>{
  options_sender.senderOptions(req.body.id,client,res);
});
app.post('/senderStatus',(req,res)=>{
  status_sender.status(req.body.sr_id,req.body.tr_id,client,res);
});
app.post('/senderPrevious',(req,res)=>{
  previous_sender.previous(client,res);
});

app.post('/traveller',(req,res)=>{
  travellerController.travellerUser(req.body.airline,req.body.date,req.body.time,req.body.to,req.body.toCity,req.body.from,req.body.fromCity,req.body.ticket,req.body.rate,req.body.capacity,client,res);
});
app.post('/traveller_request',(req,res)=>{
  req_Traveller.travellerRequest(client,res);
});
app.post('/viewResponse',(req,res)=>{
  options_traveller.travellerOptions(req.body.id,client,res);
});
app.post('/respond',(req,res)=>{
  respond_traveller.response(req.body.sr_id,req.body.tr_id,req.body.flag,client,res);
});


app.listen(4010);
