//unit tests

exports.generateText = (namey, age) =>{
    return `${namey} (${age} years old)`;
}
//unit tests


// Data - loginPage
const account1 ={
    username: "daniel", // daniel == pipi
    password: "1234",
    role: "student"
}

const account2={
    username: "omer",
    password: "1111",
    role: "teacher"
}

const account3={
    username: "yonah",
    password: "1996",
    role: "storage_keeper"
}

let users = [account1, account2, account3];                                  //changed to let cause its mutable
// Data - loginPage


// @@ login for loop @@
exports.test1=(username, password) =>{
for(let i = 0; i<users.length; i++)                                                         //can be done like python too, but good!
   {
    if (username.toLowerCase() === users[i].username.toLowerCase() && password === users[i].password) {           //added "username.toLowerCase()"
        return "You have successfully logged in."
    } else {
            return "You have failed to log in."
    }
   } 
}
// @@ login for loop @@

//@@ help_support @@

exports.test2=(button) =>{
    if(button){
        return "Went to gmail";
    }
    else{
        return "Went nowhere";
    }
}

//@@ help_support @@

//@@ checking storage @@
//Data
let GoPro = {
    quantity: 20,
  };

exports.test3 = () =>{
  if (GoPro.quantity > 0) {
    return true;
  }
  else{
    return false;
  }
}


//@@ checking storage @@












//@@ help_support