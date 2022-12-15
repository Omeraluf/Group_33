/**
 * @jest-environment jsdom
 */
"use strict";

const account1 ={
    username: "dani",
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

const loginForm = document.getElementById("login_form");
const loginButton = document.getElementById("login_form_submit");


loginButton.addEventListener("click", (e) => {
    e.preventDefault();                                                             //from a website describing what it does - "Clicking on a "Submit" button, prevent it from submitting a form"
    const username = loginForm.username.value;
    const password = loginForm.password.value;
    // const varName = <form>.<nameSpesificInput>.value;

   for(let i = 0; i<users.length; i++)                                                         //can be done like python too, but good!
   {
    alert(users[i].username + " and " + users[i].password);                                     //put in comment when done
    if (username.toLowerCase() === users[i].username.toLowerCase() && password === users[i].password) {           //added "username.toLowerCase()"
        alert("You have successfully logged in.");
        location.replace('./main.html'); // DOUBLE '\\' in every path! *this is important* // change by your own comp
        break;      //if for some reason it didn't work
       // location.reload();
    } else {
        //loginErrorMsg.style.opacity = 1;
        if(i == users.length - 1)
            alert("You have failed to log in.");
    }
   }  
}
)
//register button
const registerForm = document.getElementById("register_form");
const registerButton = document.getElementById("register_form_submit");

registerButton.addEventListener("click", (e) => {
    e.preventDefault();
    const usernameRegister = registerForm.username_register.value;
    const passwordRegister = registerForm.password_register.value;
    
    const roleRegister = registerForm.role.value;

    
    
    // const roleRegister = document.querySelectorAll('input[name="role"]');
    // const btn = document.querySelector('#btn');

    alert("Checking if username: " + usernameRegister + " + " + passwordRegister + " + " + roleRegister);

    let registerForFlag = 0;
    for (var accounts in users){
        alert(accounts + "/" + users.length);
        if(usernameRegister.toLowerCase() == users[accounts].username.toLowerCase())
        registerForFlag = 1;
    }
    if(registerForFlag == 0){                               // @@@@@@@ needs to make infinite accounts @@@@@@@@
        const account_new ={
            username: String(usernameRegister),
            password: String(passwordRegister),
            role: String(roleRegister)
        }
        users.push(account_new);
        alert(users.length); //working
        alert(users[users.length-1].username + " " + users[users.length-1].password + " " + users[users.length-1].role); // working
    }
    else{
        alert("Name is already taken, chose another one");
    }
<<<<<<< Updated upstream
})



//unit tests

generateText = (namey, age) =>{
    return '${namey} (${age} years old)';

}



//Hey

//daniel is the queen

=======
})
>>>>>>> Stashed changes
