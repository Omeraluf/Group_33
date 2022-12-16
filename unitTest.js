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


//@@ report student - start @@
//1
let MacBook = {
    category: "Digital",
    name: "MacBook",
    quantity: 3,
    MaxQuantity: 3,
    MKT: "0006",
  };

let test4_var = MacBook.quantity;

exports.test4 = () =>{
    return test4_var
}

//2
let brush = {
    category: "Art",
    name: "brush",
    quantity: 100,
    MKT: "0010",
    MaxQuantity: 100,
  };

let test5_var = brush.MKT;

exports.test5 = () =>{
    return test5_var
}

//3
let silver = {
    category: "Jewllery",
    name: "silver",
    quantity: 60,
    MKT: "0017",
    MaxQuantity: 30,
  };

let test6_var = silver.MaxQuantity;

exports.test6 = () =>{
    return test6_var
}
//@@report student - end @@
//@@report StorageKeeper - start @@

//1
let stretcher = {
    category: "Jewllery",
    name: "stretcher",
    quantity: 10,
    MKT: "0021",
    MaxQuantity: 10,
  };

let test7_var = stretcher.name;

exports.test7 = () =>{
    if(test7_var == "STRETCHER".toLowerCase()){
        return true;
    }
    return false;
}  

//2
let VideoCamera = {
    category: "photography",
    name: "VideoCamera",
    quantity: 10,
    MaxQuantity: 10,
    MKT: "0000",
  };

exports.test8 = () =>{
    if(VideoCamera.category == "Art"){
        return true;
        }
    return false;
}

//3
let Umbrella = {
    category: "photography",
    name: "Umbrella",
    quantity: 5,
    MaxQuantity: 5,
    MKT: "0003",
  };
 
exports.test9 = () =>{
    if(Umbrella.quantity == Umbrella.MaxQuantity){
        return true;
        }
    return false;
}

//@@report StorageKeeper - end @@
//@@search - start @@
let productName = "Art";


exports.test10 = () =>{
    let serchForproduct = "Art"
        if (productName === serchForproduct) {
          return "Art";}
          else{
            return "Not Art"
          }
      };

exports.test11 = () =>{
let serchForproduct = "Artyyyy"
    if (productName === serchForproduct) {
        return "Art";}
        else{
        return "Not Art"
        }
    };

//@@search - end @@






//@@ help_support