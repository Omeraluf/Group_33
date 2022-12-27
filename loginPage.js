"use strict";

const account1 = {
  username: "daniel",
  password: "1234",
  role: "student",
};

const account2 = {
  username: "omer",
  password: "1111",
  role: "teacher",
};

const account3 = {
  username: "yonah",
  password: "1996",
  role: "storage_keeper",
};

var users = [account1, account2, account3]; // let caused problems, changed to var
//let storageusers;
const loginForm = document.getElementById("login_form");
const loginButton = document.getElementById("login_form_submit");

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

//using localstorage
//accounts = [];

// setLocalSrorage();
// {
//   localStorage.setItem("account", JSON.stringify(users));
// }
let storageusers;
loginButton.addEventListener("click", (e) => {
  e.preventDefault(); //from a website describing what it does - "Clicking on a "Submit" button, prevent it from submitting a form"
  const username = loginForm.username.value;
  const password = loginForm.password.value;
  // const varName = <form>.<nameSpesificInput>.value;

  //yuval try
  //   for (
  let i = 0;
  //     i < usersss.length;
  //     i++ //can be done like python too, but good!
  //   ) {
  const data = JSON.parse(window.localStorage.getItem("account"));
  // alert(`${username} and ${password}`); //put in comment when done
  console.log(data);
  //check if there are something in the local storage
  if (!data) return;
  usersss[i] = data;
  console.log(userss[i]);
  usersss[i].forEach((User) => {
    console.log(User);
    if (
      username.toLowerCase() === User.username.toLowerCase() &&
      password === User.password
    ) {
      // alert("You have successfully logged in.");
      location.replace("./main.html");
      
    }
  });

  for (
    let i = 0;
    i < users.length;
    i++ //can be done like python too, but good!
  ) {
    // alert(users[i].username + " and " + users[i].password); //put in comment when done
    if (
      username.toLowerCase() === users[i].username.toLowerCase() &&
      password === users[i].password
    ) {
      //added "username.toLowerCase()"
      alert("You have successfully logged in.1");
      location.replace("./main.html");
      break;
    }
  }

  //omer :
  //   for (
  //     let i = 0;
  //     i < users.length;
  //     i++ //can be done like python too, but good!
  //   ) {
  //     alert(users[i].username + " and " + users[i].password); //put in comment when done
  //     if (
  //       username.toLowerCase() === users[i].username.toLowerCase() &&
  //       password === users[i].password
  //     ) {
  //       //added "username.toLowerCase()"
  //       alert("You have successfully logged in.");
  //       location.replace("./main.html"); // DOUBLE '\\' in every path! *this is important* // change by your own comp
  //       break; //if for some reason it didn't work
  //       // location.reload();
  //     } else {
  //       //loginErrorMsg.style.opacity = 1;
  //       if (i == users.length - 1) alert("You have failed to log in.");
  //     }
  //   }
});

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

  alert(
    "Checking if username: " +
      usernameRegister +
      " + " +
      passwordRegister +
      " + " +
      roleRegister
  );

  let registerForFlag = 0;
  for (var accounts in users) {
    // alert(accounts + "/" + users.length);
    if (
      usernameRegister.toLowerCase() == users[accounts].username.toLowerCase()
    )
      registerForFlag = 1;
  }
  if (registerForFlag == 0) {
    // @@@@@@@ needs to make infinite accounts @@@@@@@@
    const account_new = {
      username: String(usernameRegister),
      password: String(passwordRegister),
      role: String(roleRegister),
    };
    // users.push(account_new);
    storageusers = new userss(usernameRegister, passwordRegister, roleRegister);
    usersss.push(storageusers);
    //local storage to put info in
    window.localStorage.setItem("account", JSON.stringify(usersss));

    alert(users.length); //working
    // alert(
    //   users[users.length - 1].username +
    //     " " +
    //     users[users.length - 1].password +
    //     " " +
    //     users[users.length - 1].role
    // ); // working
  } else {
    alert("Name is already taken, chose another one");
  }

// daniel try
  //forgot password
const forgotPass = document.getElementById("forgot_password");

forgotPass.addEventListener("click",(e) =>{
    e.preventDefault();
    location.replace('./forgot password.html'); 
})

const forgotPas = document.getElementById("forgotPas");
const forgotButton = document.getElementById("forgot_pass_submit");

if(forgotPas.username_pass.value != null && forgotPas.new_password.value != null)
{
    const usernameForgot = forgotPas.username_pass.value;
    const newPass = forgotPas.new_password.value;
}

  usersss[i] = data;
  usersss[i].forEach((User) => {
  console.log(User);
  if (
    usernameForgot.toLowerCase() === User.username.toLowerCase()
  ) {
    usersss[i].password = newPass;
    //maybe remove
    usersss.push(storageusers);
    //local storage to put info in
    window.localStorage.setItem("account", JSON.stringify(usersss));
    alert("You have successfully changed the password.");
    location.replace("./main.html");
  }
})
});

//unit tests

// generateText = (namey, age) => {
//   return "${namey} (${age} years old)";
//};
