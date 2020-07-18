#<-----MYSQL with Nodejs------>

Previous Knowledge

1) a brief knowledge of MySQL will be a plus point for you , but you can carry on even if you don't have that.
2) concept of JAVASCRIPT (ES5 or/and ES6) will be a plus point for you. but you can go on even if you have brief knowledge of any other programming language.
3) how do you handle mysql on terminal should be clear.

REQUIREMENTS

1) Ubunto latest version or any previous stable version.
2) if you are on windows install Gitbash to run terminal commands as CMD does not supports all of them.
3) make sure you have Nodejs installed on your system.you can download it from nodejs.org
4)make sure you have mysql installed on your system as nodejs does not come with mysql module by default.

TERMINAL COMMANDS

1) npm install mysql // for installing mysql on your system ; try the same command with sudo if it doesn't work
2)mysql u- username p- //here this username should be a valid username that you have created from root user only


Things to be taken care of
1) Make sure you grant those privileges that you want to give to your user
2) in our case we have provided our user with all the privileges

some important SQL command // you have to run this command from root user on mysql 

1) CREATE USER 'newuser'@'localhost' IDENTIFIED BY 'user_password'; //newuser is you username and user_passwrd is your user's password ; change them accordingly
2) CREATE DATABASE database_name; //fot creating new database
3) FLUSH PRIVILEGES; //you must perform this before givng new privileges to your user
4) GRANT ALL PRIVILEGES ON database_name.* TO 'username'@'localhost'; //here all the privileges for database_name is given to username
5) GRANT ALL PRIVILEGES ON *.* TO 'username'@'localhost'; //now username has the same privileges as the default root account, beware!
6) CREATE TABLE TABLE_NAME(id INT AUTO_INCREMENT PRIMARY kEY, name VARCHAR(255)); //here we have created id and name id will be our primary key

















//------------if you have any doubts , contact me at kamran16alam@gmail.com------------------//