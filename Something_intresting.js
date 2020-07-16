//you can skip this file as i have done this stuff just for fun
//if you like to go through this file , you are most welcome

const mysql = require('mysql');

//create connection
const con = mysql.createConnection({
    host:"localhost",
    user:"newuser",
    password:"india321",
    database:"db1"
});

let x = 'connected';
let i;
let S = 'SELECT';
let F = 'FROM';
let W = 'WHERE';
let L = 'LIKE';
const reqname = 'k%';
const id = 1 ;

//connect to MySQL
con.connect( (err) => {
    if (err) throw `${err}`;
    console.log(x);

         let sql = `${S} * ${F} INFO_CUSTOMERS ${W} name ${L} ? AND id = ?`;

         //here after sql , [ make sure to first write that variable that is being called first ,for our case it is reqname and the id ].
         // so if you wrote-->[id , reqname]--> u ll recieve null array as output

          con.query(sql , [reqname , id] ,(err , result , fields) => 
          {
             if(err) throw `${err}`;

                 console.log(result);

               });                      
             });
