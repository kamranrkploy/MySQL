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

    //check for two similar names in your data base like Sarah and saraH and check if sql2 prints both of them.
    // let sql2 = "SELECT * FROM INFO_CUSTOMERS WHERE Name = 'a_valid_name_from_your_DB'"; //mysql will consider all the lower and upper case names here but the case is not the same with every database
   
  
    // let sql = "SELECT * FROM INFO_CUSTOMERS WHERE name LIKE 'k%'";//k% means every name starting with k like kane , kevin etc.

      //you can use OR & AND according to your need
      //OR  : if you are using 'OR' then the output will the result that satisfies either of the conditions as well as both the conditions.
      //AND : if you are using 'AND' then the out will be the result that satisfies both the conditions. if either of the condition doesn't satisfies the result wont contain that column.
       
         let sql = "SELECT * FROM INFO_CUSTOMERS WHERE name LIKE 'K%' OR  name LIKE 'A%'";//here the output for the console below will be every name starting with 'a','A','k' and 'K'
          con.query(sql , (err , result , fields) => 
          {
             if(err) throw `${err}`;

                //  console.log(result);

               });

            let sql3 = "SELECT * FROM INFO_CUSTOMERS WHERE name LIKE 'K%' OR  name LIKE 'A%' OR id <= 7"; //you can keep number of conditions here according to your requirement
                  con.query(sql3 , (err , result , fields) => 
                  {
                    if(err) throw `${err}`;
      
                        // console.log(result);
      
                      });

                  // below we have used an 'OR' with an 'AND' so the result will be :
                    //all the names that starts with 'a , A ' or 'k , K'  and also has id less than or equal to 7.
                    let sql4 = "SELECT * FROM INFO_CUSTOMERS WHERE name LIKE 'K%' OR  name LIKE 'A%' AND id <= 7"; 
                            con.query(sql4 , (err , result , fields) => 
                            {
                            if(err) throw `${err}`;
                
                                console.log(result);
                
                            });
                        
             });
