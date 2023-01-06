"use strict";

const usersss = [];

class userss {
  username = null;
  password = 0;
  role = null;

  constructor(username, password, role) {
    this.username = username;
    this.password = password;
    this.role = role;
  }
}

let storageusers;

storageusers = new userss("daniel","1234","student");
usersss.push(storageusers);
storageusers = new userss("omer","1111","teacher");
usersss.push(storageusers);
storageusers = new userss("yonah","1996","storage_keeper");
usersss.push(storageusers);

function save(data) {   //yuval's function
  if (window.localStorage.getItem("accountRegistered") === null) {
    window.localStorage.setItem("accountRegistered", "[]");
  }
  var old_data = JSON.parse(localStorage.getItem("accountRegistered"));
  // Push the new data (whether it be an object or anything else) onto the array
  old_data.push(data);
  localStorage.setItem("accountRegistered", JSON.stringify(old_data));
                                        //make sure it works in the log in from localstorage before it looks in usersss
}


let data_temp = window.localStorage.getItem("accountRegistered");
if(!data_temp){
  window.localStorage.setItem("accountRegistered", JSON.stringify(usersss));
}


// ## alerts of 3 default users ##
// for(let i=0;i<3;i++){
//   alert(usersss[i].username +" "+ usersss[i].password +" "+ usersss[i].role)
// }

//let storageusers;
const loginForm = document.getElementById("login_form");
const loginButton = document.getElementById("login_form_submit");

let data = JSON.parse(window.localStorage.getItem("accountRegistered")); //data contains all the localstorage

if(loginButton != null)
{
  loginButton.addEventListener("click", (e) => {
    e.preventDefault(); //from a website describing what it does - "Clicking on a "Submit" button, prevent it from submitting a form"
    const username = loginForm.username.value;
    const password = loginForm.password.value;
    
    // alert(data[0].username);  // do we need data?

    data = JSON.parse(window.localStorage.getItem("accountRegistered"));
    for(let i = 0; i < data.length; i++){
      // alert(data.length);
      // alert("usersss[i]: " + data[i].username);

      if ((username.toLowerCase() === data[i].username.toLowerCase()) && (password === data[i].password)) {
        alert("You have successfully logged in.");
        window.localStorage.setItem("accountsLoggedIn", JSON.stringify(data[i]));
        location.replace("./main.html");
        break;
        
      }
      if(i== data.length-1){
        alert("Username or password are incorrect, try again");
        break;
      }
    }
  
  });
}


//register button
const registerForm = document.getElementById("register_form");
const registerButton = document.getElementById("register_form_submit");
if(registerButton != null)
{
  registerButton.addEventListener("click", (e) => {
    e.preventDefault();
    data = JSON.parse(window.localStorage.getItem("accountRegistered"));
    const usernameRegister = registerForm.username_register.value;
    const passwordRegister = registerForm.password_register.value;
  
    const roleRegister = registerForm.role.value;
  
    // alert("Checking if username: " +usernameRegister +" + " +passwordRegister +" + " +roleRegister);
    // alert(data.length); // only 3, need to be 4 after register 1 user

    let registerForFlag = 0;
    for (var accounts in data) {
      // alert(accounts + "/" + users.length);
      // alert("usernameRegister.toLowerCase(): " +" + "+ usernameRegister.toLowerCase() +" + "+ "usersss[accounts].username.toLowerCase()"+" + "+
      // data[accounts].username.toLowerCase()+" + "+"two with the same name")

      // alert("user and user and flag:"+usernameRegister.toLowerCase() + data[accounts].username.toLowerCase() + registerForFlag)
      if (usernameRegister.toLowerCase() == data[accounts].username.toLowerCase()){
        registerForFlag = 1;
      }
    }
    if (registerForFlag == 0) {
      
      storageusers = new userss(usernameRegister, passwordRegister, roleRegister);
      save(storageusers);
      alert("User registered successfully");

    } else {
      alert("Name is already taken, chose another one");
    }
  });
}



// daniel try
//forgot password
const forgotPass = document.getElementById("forgot_password");
if(forgotPass != null)
{
  forgotPass.addEventListener("click",(e) =>{
    e.preventDefault();
    // alert("press forgot password");
    location.replace("./forgot password.html");

})
}


const forgotPas = document.getElementsByClassName("forgotPas"); //By class, not ID
const forgotButton = document.getElementById("forgot_pass_submit");
if(forgotPas != null)
{
  
  forgotButton.addEventListener("click",(e) =>{
    e.preventDefault();
    alert("press ready");
    
    const usernameForgot = forgotPas.username_pass.value; //The username
    const newPass = forgotPas.new_password.value;         //The password
    let i =0;
    
    // alert(`${usernameForgot} and ${newPass}`); //put in comment when done

    data = JSON.parse(window.localStorage.getItem("accountRegistered"));
    for(let i = 0; i < data.length; i++){

      // alert("in forgot pass: " + data[i].username);

      if (usernameForgot.toLowerCase() === data[i].username.toLowerCase() ) {
        let roleTemp = data[i].role;
        storageusers = new userss(usernameForgot, newPass, roleTemp);
        // alert("1.Data[i]: " + data[i].username + data[i].password);
        data = data.filter(person => person.username != usernameForgot);  //remove 1 item from the array
        // alert(data.length);
        data.push(storageusers);
        localStorage.setItem("accountRegistered", JSON.stringify(data));
        location.replace("./loginPage.html");
        break;
      }

      if(i == data.length-1){
        alert("Try again with a real username");
        location.replace("./loginPage.html");
        break;
      }
    }
    
})
}
  
//Omer's problems:
// 1. after new user register, and log out - user erase from local storage
// 1. solution - maybe can we combine loginpage & main ?