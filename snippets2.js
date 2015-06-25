var userLogin = {userName: "zoe", password: "wdi"}
var passwordInput = prompt("Enter password for user " + userLogin.userName + ". Remember, capitalization matters!");

if (userLogin.password === passwordInput){
    console.log("Password is correct.");
}
else {
    console.log("Incorrect password!");
}