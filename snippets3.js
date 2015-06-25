var userLogin = {userName: "zoe", password: "wdi"}

securityQuestions = [{question:"What was your first pet's name?", expectedAnswer:"Duck"}, 
                    {question:"What is the street you grew up on?", expectedAnswer:"Bush Street"}, 
                    {question:"What is your mom's name?", expectedAnswer:"Mom"}];

i = 0
while (i<=3){
   if (i === 3){
       alert("Welcome, " + userLogin.userName + "!");
       break;
   }

   else {
   
      var userInput = prompt(securityQuestions[i].question);

      if (i<3 && (userInput === securityQuestions[i].expectedAnswer)) {
        i++;
      }
      else if (i<3 && (userInput !== securityQuestions[i].expectedAnswer)){
          alert("Wrong answer! Your account is now locked.")
          break;
      }
    }
}
