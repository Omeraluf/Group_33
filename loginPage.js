
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


//register button
const registerForm = document.getElementById("register_form");
const registerButton = document.getElementById("register_form_submit");


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
