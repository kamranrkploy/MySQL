const mysql = require('mysql');     //make sure to install the mysql module as it does not come by default with the nodejs modules package[use :npm install mysql]

//create connection
const con = mysql.createConnection({
    host:"localhost",         //as we are using localhost 
    user:"newuser",          //here you should write a valid username that you have created on your system for mysql
    password:"india321",    //your password here for the username
    database:"db1"         //this is the name of your database so modify here accordingly
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
        if (err) throw `${err}`; //you can use if(err) throw err; and the will work perfectly fine as well.try both the ways and see the difference in the output when you get an error.
        console.log(ES6);
    });
