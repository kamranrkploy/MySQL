const mysql = require('mysql');

//create connection
const con = mysql.createConnection({
    host:"localhost",
    user:"newuser",
    password:"india321",
    database:"db1"
});

let x = 'connected';
//connect to MySQL
con.connect( (err) => {
    if (err) throw `${err}`;
    console.log(x);

    let sql = "SELECT * FROM INFO_CUSTOMERS"; //* mean 'all' , you are selecting all from table name as INFO_CUSTOMER

    con.query(sql , (err , result , fields) => {
             if(err) throw `${err}`;
            // console.log(result); // this will return an array of objects 
            console.log(result[0].Name);
            console.log(result[2].Email);
   });
});
