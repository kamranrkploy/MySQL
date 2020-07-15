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

    let sql = "SELECT * FROM INFO_CUSTOMERS";

      con.query(sql , (err , result , fields) => {
             if(err) throw `${err}`;
            // console.log(result); // this will return an array of objects 

           //so you can easily loop through the data using different loops. for now we have used for loop.
        //    for(i=0 ; i<result.length ; i++)
        //             {  
        //              console.log(fields[i]); //can you guess why you ll get undefined after particular value of i.
        //             }

                     console.log(fields[1].name + ` --is-- ` + result[0].Name); //just log result and fields seperately to know the logic behing this line
                     console.log(fields[2].name + ` --is-- ` + result[0].Email);  //you ll see that both fields and result return array of objects


               });
            });
