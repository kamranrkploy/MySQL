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
//connect to MySQL
con.connect( (err) => {
    if (err) throw `${err}`;
    console.log(x);

    let sql = "SELECT * FROM INFO_CUSTOMERS"; //* mean 'all' , you are selecting all from table name as INFO_CUSTOMER

      con.query(sql , (err , result , fields) => {
             if(err) throw `${err}`;
            // console.log(result); // this will return an array of objects 

           //so you can easily loop through the data using different loops. for now we have used for loop.
           for(i=0 ; i<result.length ; i++)
                    {  
                     console.log(result[i].Name +` your email is `+ result[i].Email);
                    }
               });
            });
