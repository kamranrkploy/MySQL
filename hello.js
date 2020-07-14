const mysql = require('mysql');
const { clear } = require('console');

//create connection
const con = mysql.createConnection({
    host:"localhost", //as we are using localhost 
    user:"newuser",   //here you should write a valid username that you have created on your system for mysql
    password:"india321", //your password here for the username
    database:"db1"    //this is the name of your database so modify here accordingly
});

[ES5 , ES6] =['hello','connected Successfully...!'];
//connect to MySQL
// ES way of doing it
// con.connect( function(err)
// { 
//     if (err){
//         console.log(`error:${err}`);
//     }
//    else{ 
//        console.log(ES5); 
//        }
// });

// ES6 way of doing it 
con.connect( (err) =>  {
    if (err) throw `${err}`;
    console.log(ES6);
});
