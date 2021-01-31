var express=require('express');
var app=express();
var bodyParser=require('body-parser');

var connection=require('./model/database.js');
var connection=require('./model/database');

app.use(bodyParser.urlencoded({exteded:false}));
app.use(express.static(__dirname));

app.use('/signup',function(req,res){
    console.log('Signup Page');
    res.sendFile(__dirname+'/views/signup.html');
})

app.post('/check',function(req,res){
    var uname=req.body.uname;
    var fname=req.body.fname;
    var lname=req.body.lname;
    var email=req.body.email;
    var pwd=req.body.pwd;
    var cpwd=req.body.cpwd;
    var radio=req.body.radio;
    connection.query('insert into signup values(?,?,?,?,?,?)',[uname,pwd,radio,fname,lname,email],(err,results)=>{
        if(err){
            res.sendFile(__dirname+'/views/signup.html');
        }
        if(results){
            console.log("Values Inserted");
            res.send(
                `
                <h1>
                Hello ${uname}
                Your details,<br>
                ${pwd}<br>
                ${radio}<br>
                ${fname}<br>
                ${lname}<br>
                ${email}<br>
                are successfully inserted to our database.
                </h1>    
                `
            )
        }
    })
})

app.listen(1000,()=>{
    console.log("Server is running at the port 1000");
})
