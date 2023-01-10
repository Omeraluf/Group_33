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

//
exports.test12_2_2 = () =>{

    let VideoCamera = {
        category: "photography",
        name: "VideoCamera",
        quantity: 10,
        MaxQuantity: 10,
        MKT: "0000",
      };

    if(VideoCamera.quantity == VideoCamera.MaxQuantity){
        return "Max quantity equals available quantity";
    }
    else{
        return "Max quantity not equal available quantity";
    }
        };

        

exports.test13_2_3 = () =>{

let VideoCamera = {
    category: "photography",
    name: "VideoCamera",
    quantity: 9,
    MaxQuantity: 10,
    MKT: "0000",
    };

if(VideoCamera.quantity < VideoCamera.MaxQuantity){
    return true;
}
else{
    return false;
}
};


exports.test14_1_1 = () =>{ //-- works

let VideoCamera = {
    category: "photography",
    name: "VideoCamera",
    quantity: 10,
    MaxQuantity: 10,
    MKT: "0000",
    };

before=VideoCamera.quantity;
VideoCamera.quantity--; //added to cart

if(before > VideoCamera.quantity){
    return true;
}
else{
    return false;
}
};



exports.test15_1_4 = () =>{ //push wasn't correct

let VideoCamera = {
    category: "photography",
    name: "VideoCamera",
    quantity: 10,
    MaxQuantity: 10,
    MKT: "0000",
    };

    let CartProduct = [];

    CartProduct.push(VideoCamera);
    if(CartProduct.length == 0){
        return false;
    }
    else{
        return true;
    }
};


exports.test16_1_5 = () =>{

let msgFromStorageKeeper = "Your request has been approved";
return msgFromStorageKeeper;
};

exports.test17_1_7 = () =>{     //A good one, told me that i missed "new"
    const usernameForgot = "omer" //The username
    const oldpass = "1111"
    const newPass = "1234"         //The password

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
    let user1 = new userss(usernameForgot,oldpass,"teacher");
    user1.password = newPass;

    return user1.password;
    };

exports.test18_1_9 = () =>{

    let VideoCamera = {
        category: "photography",
        name: "VideoCamera",
        quantity: 10,
        MaxQuantity: 10,
        MKT: "0000",
        };
    
        let CartProduct = [];
    
        CartProduct.push(VideoCamera);
        CartProduct.push(VideoCamera);

        let teacherReport = CartProduct;

        if( teacherReport.pop()){
            return "there is an item in the report";
        }
        else{
            return "there is no item in the report";
        }
};

exports.test19_1_10 = () =>{

    let VideoCamera = {
        category: "photography",
        name: "VideoCamera",
        quantity: 3,
        MaxQuantity: 10,
        MKT: "0000",
        };
    
        let CartProduct = [];
    
        CartProduct.push(VideoCamera);
        VideoCamera.quantity--;


        if (VideoCamera.quantity <= 3) {
            return "Only Teacher can order";
        }
        else {
            return "everyone can order";
        }
};

exports.test20_2_4 = () =>{

    let VideoCamera = {
        category: "photography",
        name: "VideoCamera",
        quantity: 10,
        MaxQuantity: 10,
        MKT: "0000",
        };

        if (VideoCamera.quantity > 0) {
            return true;
        }
        else {
            return false;
        }
};


exports.test21_2_6 = () =>{     //A good one, told me that i missed "new"
    const usernameForgot = "daniel" //The username
    const oldpass = "2222"
    const newPass = "4321"         //The password

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
    let user1 = new userss(usernameForgot,oldpass,"teacher");
    user1.password = newPass;

    return user1.password;
    };
    
exports.test22_2_7 = () =>{

let VideoCamera = {
    category: "photography",
    name: "VideoCamera",
    quantity: 3,
    MaxQuantity: 10,
    MKT: "0000",
    };
    let orderReady = false;
    let CartProduct = [];

    CartProduct.push(VideoCamera);
    VideoCamera.quantity--;
    orderReady = true;
    
    if(orderReady == true){
        return true;
    }
    else{
        return false;
    }
};

exports.test23_2_9 = () =>{     //A good one, told me that i missed "new"
    const usernameForgot = "yonah" //The username
    const oldpass = "3333"

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
    let user1 = new userss(usernameForgot,oldpass,"teacher");
    if(user1.username == usernameForgot && user1.password == oldpass){
        return "logged in";
    }
    else{
        return "Try again";
    }
};
exports.test24_2_10 = () =>{     //A good one, told me that i missed "new"
    let VideoCamera = {
        category: "photography",
        name: "VideoCamera",
        quantity: 3,
        MaxQuantity: 10,
        MKT: "0000",
        };
        let CartProduct = [];
        
        CartProduct.push(VideoCamera);
        VideoCamera.quantity--;
        let needToBeReturned = true;
        
        if(needToBeReturned == true){
            return "The item need to be returned";
        }
        else{
            return "the item does not need to be returned";
        }
};

exports.test25_3_2 = () =>{     //A good one, told me that i missed "new"
    let VideoCamera = {
        category: "photography",
        name: "VideoCamera",
        quantity: 3,
        MaxQuantity: 10,
        MKT: "0000",
        };
        let CartProduct = [];
        
        CartProduct.push(VideoCamera);
        VideoCamera.quantity--;
        let likeNew = false;
        
        if(likeNew == true){
            return "The item returned like new";
        }
        else{
            return "The item returned used";
        }
};

exports.test26_3_3 = () =>{     //A good one, told me that i missed "new"
    let connected = true;
    let role = "teacher";
    let watchProfile = true;
    if(watchProfile == true && connected == true && role == "teacher"){
        return true;
    }
    else{
        return false;
    }
};
exports.test27_3_4 = () =>{     //returned false instead of true
    let VideoCamera = {
        category: "photography",
        name: "VideoCamera",
        quantity: 3,
        MaxQuantity: 10,
        MKT: "0000",
        };

    let notAvailable = [];

    notAvailable.push(VideoCamera);

    if(notAvailable){
        return true;
    }
    else{
        return false;
    }
};
exports.test28_3_6 = () =>{     //A good one, told me that i missed "new"
    let connected = true;
    let role = "storage_keeper";
    let messageBox = true;
    if(messageBox == true && connected == true && role == "teacher"){
        return true;
    }
    else{
        return false;
    }
};

exports.test29_3_1 = () =>{     
    let messageFromTeacher = "New Canvas 80x90";
    if(messageFromTeacher == "New Canvas 80x90"){
        return "The message got from Teacher is: " + messageFromTeacher;
    }
    else{
        return "Other message";
    }
};


exports.test30_3_7 = () =>{     //A good one, told me that i missed "new"
    const usernameForgot = "daniel" //The username
    const oldpass = "2222"
    const newPass = "4321"         //The password

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
    let user1 = new userss(usernameForgot,oldpass,"storage_keeper");
    user1.password = newPass;

    return user1.role;
    };

exports.test31_3_10 = () =>{     //A good one, told me that i missed "new"
    let connected = true;
    let role = "storage_keeper";
    let cancelOrder = true;
    if(cancelOrder == true && connected == true && role == "teacher"){
        return true;
    }
    else{
        return false;
    }
};


exports.test32_3_5 = () =>{

    let VideoCamera = {
        category: "photography",
        name: "VideoCamera",
        quantity: 3,
        MaxQuantity: 10,
        MKT: "0000",
        };
    
        let CartProduct = [];
    
        CartProduct.push(VideoCamera);
        VideoCamera.quantity--;


        if (VideoCamera.quantity > 0) {
            return "The storage keeper allows you to extend your borrow time";
        }
        else {
            return "The storage keeper did not allow you to extend your borrow time";
        }
};  
exports.test33_1_3 = () =>{

    let VideoCamera = {
        category: "photography",
        name: "VideoCamera",
        quantity: 3,
        MaxQuantity: 10,
        MKT: "0000",
        };
    
        let CartProduct = [];
    
        CartProduct.push(VideoCamera);
        VideoCamera.quantity--;


        let messageToStorageKeeper = "Please order a new 8k camera";
        if(messageToStorageKeeper){
            return messageToStorageKeeper;
        }
        else{
            return "There is no new message"
        }
};  
exports.test34_2_5 = () =>{

    let VideoCamera = {
        category: "photography",
        name: "VideoCamera",
        quantity: 3,
        MaxQuantity: 10,
        MKT: "0000",
        };
    
        let CartProduct = [];
    
        CartProduct.push(VideoCamera);
        VideoCamera.quantity--;


        let messageToStorageKeeper = "Please can i get another two weeks";
        if(messageToStorageKeeper){
            return messageToStorageKeeper;
        }
        else{
            return "There is no new message"
        }
};  

exports.test35_2_8 = () =>{     //A good one, told me that i missed "new"
    let connected = true;
    let role = "student";
    let messageBox = true;
    if(messageBox == true && connected == true && role == "student"){
        return true;
    }
    else{
        return false;
    }
};
