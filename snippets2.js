var userLogin = {userName: "zoe", password: "wdi"}

t = 1;
while (t<4){
    var passwordInput = prompt("Enter password for user " + userLogin.userName + ". Remember, capitalization matters!");
    
    if (t<4 && (userLogin.password === passwordInput)){
            console.log("Password is correct.");
            break;
        }
    else if (t<4 && (userLogin.password !== passwordInput)){
            console.log("Incorrect password!");
            console.log(t);
            t++;
        }
    else {
        console.log("You tried 3 times. You're now locked out of your account!");
    }
}