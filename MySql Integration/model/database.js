const mysql=require('mysql');
const connect = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'bubblyram',
    database:'mysqlass'
});
module.exports=connect;