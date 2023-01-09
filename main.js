"use strict";

//const stringify = require("fast-json-stable-stringify");

//myProfile elements
const profile_logo_shown = document.getElementById("profile_logo");
let accountLoggedIn = JSON.parse(
  window.localStorage.getItem("accountsLoggedIn")
);
if (profile_logo_shown !== null) {
  document.getElementById(
    "myProfileName"
  ).textContent = `${accountLoggedIn.username}`;
  document.getElementById(
    "myProfilePassword"
  ).textContent = `${accountLoggedIn.password}`;
  document.getElementById(
    "myProfileRole"
  ).textContent = `${accountLoggedIn.role}`;
  // document.getElementById("myProfileName").innerHTML = `${accountLoggedIn.username + "Also working"}`;
}

//Dr.WH button
const DrWHBtn = document.getElementById("drWHpic");

if (DrWHBtn !== null) {
  DrWHBtn.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.assign("./main.html");
    //ADD the right file
  });
}

if (DrWHBtn !== null) {
  DrWHBtn.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.assign("./main.html");
    //ADD the right file
  });
}

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ Omer's part

// when the user clicks on the button, it toggles between hidding and showing the dropdown content
// Cart Button
//probably erase this
// window.onclick = function(event){
//     if(!event.target.matches('.dropbtn')){
//         var dropdowns = document.getElementsByClassName("dropDown_myBell");
//         var i;
//         for(i = 0; i < dropdowns.length; i++){
//             var openDropdown = dropdowns[i];
//             if(openDropdown.classList.contains('shows')){
//                 openDropdown.classList.remove('show');
//             }
//         }
//     }
// }

// window.onclick = function(event){
//     if(!event.target.matches('.dropbtn')){
//         var dropdowns = document.getElementsByClassName("dropDown_myCart");
//         var i;
//         for(i = 0; i < dropdowns.length; i++){
//             var openDropdown = dropdowns[i];
//             if(openDropdown.classList.contains('shows')){
//                 openDropdown.classList.remove('show');
//             }
//         }
//     }
// }

function dropDownCartBtn() {
  document.getElementById("dropDown_myCart").classList.toggle("show");
}
// Links
//   const cartBtn_myCart = document.getElementById("e57_156_1");     //this if for the "eglon" - its just moving you to the login page, care cause it's the same const name
//                                                                    // as the 2nd button "myCart"
//   if(cartBtn_myCart !== null){
//   cartBtn_myCart.addEventListener("click", (e)=>{
//       e.preventDefault();
//       window.location.assign("./loginPage.html");
//   })
// }

//######## order status DANIEL#######
const btn_order_status = document.getElementById("order_status");
if (btn_order_status !== null) {
  btn_order_status.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.assign("./order_status.html");
  });
}

let flagmes,arr;
//let ordersdone =[]; // trying something
const mes = document.getElementById("order_done");
const mes2 = document.getElementById("order_done2");
//for mes
if(mes!=null && !mes.ariaChecked) // if we are in messages and the checkbox isnt mark
{
  //alert("in");
  flagmes=localStorage.setItem('flagmes1',false);
  //alert(localStorage.getItem('flagmes1'));
}

//not relevent for now
//for mes2
/*if(mes2!=null && !mes.ariaChecked) // if we are in messages and the checkbox isnt mark
{
  //alert("in mes 2");
  let ordersdone =[]; // trying something
  arr=localStorage.setItem('trying',false);
  //flagmes=localStorage.setItem('flagmes1',false);
  //alert(localStorage.getItem('flagmes1'));
}
function get_value2(){
  alert("click");
  arr=localStorage.setItem('trying',true);
}*/
  
//relevent
function get_value(){
  var BrowserName = document.getElementById("message"); //innerhtml for insert maybe wont be necessery
  //alert("hey checkbox + "+ BrowserName.innerText);
  //document.getElementById('order_done').innerHTML = BrowserName;
  flagmes=localStorage.setItem('flagmes1',true);
  }


 
  const checkPho = document.getElementById("checkphoto");
  if(checkPho != null)
  {
    checkPho.hidden = true;
    //const try1 = localStorage.getItem('flagmes1');
  
  
    alert(localStorage.getItem("flagmes1"));
    if(localStorage.getItem("flagmes1") === "true")
    {
      alert("in if figmas1 is true"+ localStorage.getItem('flagmes1'));
      checkPho.hidden = false;
      document.getElementById("no_orders").textContent = "ההזמנה אושרה";
    }
    //not relevent for now
    /*if(localStorage.getItem("trying")=== "true")
    {
      const addOrder = document.getElementById("orders");
      const textIn = document.createTextNode('הזמנה 2');
      addOrder.appendChild(textIn);
      //addOrder.insertAdjacentText('beforeend',"הזמנה 2");
      //document.getElementById("orders").innerHTML += "הזמנה 2";
      const img = document.createElement("img");
      img.src = "./images/check.png";
      addOrder.appendChild(img);
      //addOrder.innerHTML = Image("./images/check.png");
      //loop of for each which adds the orders number
    //document.getElementById("add_to_me").innerHTML +=
           // "<h3>This is the text which has been inserted by JS</h3>"
    }*/
    
}
//########until here order status DANIEL#######
const cartBtn_myCart = document.getElementById("myCart");
if (cartBtn_myCart !== null) {
  cartBtn_myCart.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.assign("./myCart.html");
  });
}

const cartBtn_shortage = document.getElementById("shortage");
if (cartBtn_shortage !== null) {
  cartBtn_shortage.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.assign("./shortage.html");
  });
}
// Bell Button
function dropDownBellBtn() {
  document.getElementById("dropDown_myBell").classList.toggle("show");
}
// Links
const cartBtn_myBell = document.getElementById("e57_156_2");
if (cartBtn_myBell !== null) {
  cartBtn_myBell.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.assign("./nextPage.html");
  });
}

// Person Button
function dropDownPersonBtn() {
  document.getElementById("dropDown_myPerson").classList.toggle("show");
}
// Links
// Log out button
const logOutBtn_myPerson = document.getElementById("e57_156_3"); //change this
if (logOutBtn_myPerson !== null) {
  logOutBtn_myPerson.addEventListener("click", (e) => {
    e.preventDefault();
    window.localStorage.removeItem("accountLoggedIn");
    window.location.assign("./loginPage.html");
  });
}

const myPerson_myProfile = document.getElementById("myProfile"); //change this
if (myPerson_myProfile !== null) {
  myPerson_myProfile.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.assign("./myProfile.html");
  });
}

const myPerson_messageBox = document.getElementById("messageBox"); //change this
if (myPerson_messageBox !== null) {
  myPerson_messageBox.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.assign("./messageBox.html");
  });
}

const myPerson_helpSupport = document.getElementById("help_support"); //change this
if (myPerson_helpSupport !== null) {
  myPerson_helpSupport.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.assign("./help_support.html");
  });
}

const myPerson_reportStudent = document.getElementById("reportStudent"); //change this
if (myPerson_reportStudent !== null) {
  myPerson_reportStudent.addEventListener("click", (e) => {
    e.preventDefault();

    if (accountLoggedIn.role == "student") {
      window.location.assign("./reportStudent.html");
    } else {
      alert("You have no access for that report");
    }
  });
}

const myPerson_reportTeacher = document.getElementById("reportTeacher"); //change this
if (myPerson_reportTeacher !== null) {
  myPerson_reportTeacher.addEventListener("click", (e) => {
    e.preventDefault();

    if (accountLoggedIn.role == "teacher") {
      window.location.assign("./reportTeacher.html");
    } else {
      alert("You have no access for that report");
    }
  });
}

const myPerson_reportStorageKeeper = document.getElementById(
  "reportStorageKeeper"
); //change this
if (myPerson_reportStorageKeeper !== null) {
  myPerson_reportStorageKeeper.addEventListener("click", (e) => {
    e.preventDefault();

    if (accountLoggedIn.role == "storage_keeper") {
      window.location.assign("./reportStorageKeeper.html");
    } else {
      alert("You have no access for that report");
    }
  });
}

const myPerson_extansion = document.getElementById("extansion"); //change this
if (myPerson_extansion !== null) {
  myPerson_extansion.addEventListener("click", (e) => {
    e.preventDefault();

    if (accountLoggedIn.role == "student") {
      window.location.assign("./extansion.html");
    } else {
      if (accountLoggedIn.role == "teacher") {
        window.location.assign("./extansionTeacher.html");
      } else {
        alert("You have no access for that section");
      }
    }
  });
}
const myPerson_newItemReq = document.getElementById("newItemReq"); //change this
if (myPerson_newItemReq !== null) {
  myPerson_newItemReq.addEventListener("click", (e) => {
    e.preventDefault();

    if (accountLoggedIn.role == "teacher") {
      window.location.assign("./newItemReq.html");
    } else {
      alert("You have no access for that section");
    }
  });
}

//window.location.assign();
//Yuval's part                                                                                              //@@@@@ CHANGE THE LINKS @@@@@@@@
const btnDigital = document.getElementById("Digital");
const btnArt = document.getElementById("Art");
const btnTextile = document.getElementById("Textile");
const btnPhotography = document.getElementById("Photography");
const btnJewellery = document.getElementById("Jewellery");

if (btnDigital !== null) {
  btnDigital.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.assign("./addDigital.html");
  });
}

if (btnTextile !== null) {
  btnTextile.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.assign("./addTextile.html");
    //ADD the right file
  });
}
if (btnPhotography !== null) {
  btnPhotography.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.assign("./addPhotograpy.html");
    //ADD the right file
  });
}
if (btnJewellery !== null) {
  btnJewellery.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.assign("./addJewellery.html");
    //ADD the right file
  });
}
if (btnArt !== null) {
  btnArt.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.assign("./addtoart.html");
    //ADD the right file
  });
}

// GoPro in cart - element
// copied from Yuvals - addPhotography.js

let VideoCamera = {
  category: "photography",
  name: "VideoCamera",
  quantity: 10,
  MaxQuantity: 10,
  MKT: "0000",
};
let CarCamera = {
  category: "photography",
  name: "CarCamera",
  quantity: 7,
  MaxQuantity: 7,
  MKT: "0001",
};
let tripodCamera = {
  category: "photography",
  name: "tripodCamera",
  quantity: 50,
  MaxQuantity: 50,
  MKT: "0002",
};
let Umbrella = {
  category: "photography",
  name: "Umbrella",
  quantity: 5,
  MaxQuantity: 5,
  MKT: "0003",
};
let GoPro = {
  category: "photography",
  name: "GoPro",
  quantity: 20,
  MaxQuantity: 20,
  MKT: "0004",
};
let ipads = {
  category: "Digital",
  name: "ipads",
  quantity: 50,
  MaxQuantity: 50,
  MKT: "0005",
};
let MacBook = {
  category: "Digital",
  name: "MacBook",
  quantity: 3,
  MaxQuantity: 3,
  MKT: "0006",
};

let ApplePencil = {
  category: "Digital",
  name: "ApplePencil",
  quantity: 50,
  MaxQuantity: 50,
  MKT: "0007",
};
let LEDbourd = {
  category: "Digital",
  name: "LEDbourd",
  quantity: 50,
  MaxQuantity: 50,
  MKT: "0008",
};
let canvas = {
  category: "Art",
  name: "canvas",
  quantity: 100,
  MKT: "0009",
  MaxQuantity: 100,
};
let brush = {
  category: "Art",
  name: "brush",
  quantity: 100,
  MKT: "0010",
  MaxQuantity: 100,
};
let faberCastell = {
  category: "Art",
  name: "faberCastell",
  quantity: 70,
  MKT: "0011",
  MaxQuantity: 70,
};

let paint = {
  category: "Art",
  name: "paint",
  quantity: 200,
  MKT: "0012",
  MaxQuantity: 200,
};

let sewingMechine = {
  category: "Textile",
  name: "sewingMechine",
  quantity: 15,
  MKT: "0013",
  MaxQuantity: 15,
};
let fabric = {
  category: "Textile",
  name: "fabric",
  quantity: 100,
  MKT: "0014",
  MaxQuantity: 100,
};
let tapeMessures = {
  category: "Textile",
  name: "tapeMessures",
  quantity: 200,
  MKT: "0015",
  MaxQuantity: 200,
};

let manniqen = {
  category: "Textile",
  name: "manniqen",
  quantity: 10,
  MKT: "0016",
  MaxQuantity: 10,
};
let silver = {
  category: "Jewllery",
  name: "silver",
  quantity: 60,
  MKT: "0017",
  MaxQuantity: 30,
};
let gold = {
  category: "Jewllery",
  name: "gold",
  quantity: 60,
  MKT: "0018",
  MaxQuantity: 30,
};

let cutter = {
  category: "Jewllery",
  name: "cutter",
  quantity: 50,
  MKT: "0019",
  MaxQuantity: 35,
};
let welder = {
  category: "Jewllery",
  name: "welder",
  quantity: 40,
  MKT: "0020",
  MaxQuantity: 40,
};
let stretcher = {
  category: "Jewllery",
  name: "stretcher",
  quantity: 10,
  MKT: "0021",
  MaxQuantity: 10,
};

const JewlleryProduct = [silver, gold, cutter, welder, stretcher];
const TextileProduct = [sewingMechine, fabric, tapeMessures, manniqen];
const ArtProduct = [canvas, brush, faberCastell, paint];
const DigitalProduct = [ipads, MacBook, ApplePencil, LEDbourd];

const photographyProduct = [
  VideoCamera,
  CarCamera,
  tripodCamera,
  Umbrella,
  GoPro,
];

let AlltheProducts = [
  photographyProduct,
  DigitalProduct,
  ArtProduct,
  TextileProduct,
  JewlleryProduct,
];

const btnSearch = document.getElementById("Searchbtn");
let flag = 0;
if (btnSearch !== null) {
  btnSearch.addEventListener("click", (e) => {
    e.preventDefault;
    const serchForproduct =
      document.getElementById("SearchBartype").search.value;
    for (let i = 0; i < AlltheProducts.length; i++) {
      AlltheProducts[i].forEach((product) => {
        if (product.name === serchForproduct) {
          //push to local story to be able to complete search
          window.localStorage.setItem(
            "searchProduct",
            JSON.stringify(serchForproduct)
          );
          if (product.category === "photography") {
            window.location.assign("./addPhotograpy.html");
            flag = 1;
          }
          if (product.category === "Digital") {
            window.location.assign("./addDigital.html");
            flag = 1;
          }
          if (product.category === "Art") {
            console.log(serchForproduct);
            window.location.assign("./addtoart.html");
            flag = 1;
          }
          if (product.category === "Textile") {
            window.location.assign("./addTextile.html");
            flag = 1;
          }
          if (product.category === "Jewllery") {
            window.location.assign("./addJewellery.html");
            flag = 1;
          }
        }
      });
    }
    if (flag === 0) {
      alert("The product does not exist,please try again!");
    }
  });
}

//when we search ,the right product will popout
let searchProductPop = JSON.parse(window.localStorage.getItem("searchProduct"));
if (searchProductPop !== null) {
  document.getElementById(`${searchProductPop}`).style.border =
    "dashed rgb(40, 192, 53)";
}

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ Oscar's try for extansion Student local storage....
let messagesArray = [];

class messagesCLS {
  studentName = null;
  MKT = null;
  teacherName = null;
  reason = null;

  constructor(studentName, MKT, teacherName, reason) {
    this.studentName = studentName;
    this.MKT = MKT;
    this.teacherName = teacherName;
    this.reason = reason;
  }
}

const sendBtn = document.getElementById("Send");
if (sendBtn !== null) {
  sendBtn.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("hello");
    let mktNumber = extansionForm.MKTNumber.value; // mkt number value
    let teacherName = extansionForm.TeacherName.value; // teacher name
    let reasonContent = extansionForm.extansionReason.value; // reason for extension
    let userNameFromLS = JSON.parse(
      window.localStorage.getItem("accountsLoggedIn")
    );
    //console.log(userNameFromLS);
    const messages =
      userNameFromLS.username + reasonContent + teacherName + mktNumber;
    // console.log(typeof (userNameFromLS[0].username));
    // console.log(typeof (mktNumber));
    let nameOfStudent = userNameFromLS.username;
    let messagesOBJ = new messagesCLS(
      nameOfStudent,
      mktNumber,
      teacherName,
      reasonContent
    );
    console.log(userNameFromLS.username);
    //console.log(userNameFromLS);
    messagesArray.push(messagesOBJ);
    window.localStorage.setItem(
      "messgesForSKFromStudent",
      JSON.stringify(messagesArray)
    );

    console.log(messagesOBJ);
    // alert(
    //   "Checking if extension sent: " +
    //   reasonContent +
    //   " + " +
    //   teacherName +
    //   " + " +
    //   mktNumber + messages
    // );
    alert("Checking if messages sent: " + messages);
  });
}

let showMSGsBtn = document.getElementById("showMSGS");
if (showMSGsBtn !== null) {
  showMSGsBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let temp = JSON.parse(localStorage.getItem("messgesForSKFromStudent"));
    //console.log(temp[0].MKT);
    if (localStorage.getItem("messgesForSKFromStudent") !== null) {
      document.getElementById(
        "messagesShownExtentionStudent"
      ).innerHTML = ` name: ${temp[0].studentName} <br> MKT: ${temp[0].MKT} <br> Teacher name: ${temp[0].teacherName} <br> Reason for extension: ${temp[0].reason}`;
    }
  });
}

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ Oscars try ends

// //@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ Oscar try for extansion teacher

class messagesFromTeacherCLS {
  TeacherName = null;
  MKT = null;
  numberOfextensions = 0;
  reason = null;

  constructor(TeacherName, MKT, numberOfextensions, reason) {
    this.TeacherName = TeacherName;
    this.MKT = MKT;
    this.numberOfextensions = numberOfextensions;
    this.reason = reason;
  }
}

const sendReqBtn = document.getElementById("SendBtnTeacher");
if (sendReqBtn !== null) {
  //dont work!!!! continue from here
  sendReqBtn.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("hello");
    let mktNumber = sendReqForm.TeachersMKT.value; // mkt number value
    const exetensionsNumber = sendReqForm.NumOfExtansions.value; // teacher name
    let reasonContent = sendReqForm.TeachersReason.value; // reason for extension
    let userNameFromLS = JSON.parse(
      window.localStorage.getItem("accountsLoggedIn")
    );
    alert(userNameFromLS.username);
    //console.log(userNameFromLS);
    let messages =
      userNameFromLS.username + reasonContent + exetensionsNumber + mktNumber;
    console.log(typeof mktNumber);
    let nameOfteacher = userNameFromLS.username;
    let messagesTeacherOBJ = new messagesFromTeacherCLS(
      nameOfteacher,
      mktNumber,
      exetensionsNumber,
      reasonContent
    );
    messagesArray.push(messagesTeacherOBJ);
    window.localStorage.setItem(
      "messgesForSKfromTeacher",
      JSON.stringify(messagesArray)
    );

    console.log(messagesTeacherOBJ);
    // alert(
    //   "Checking if extension sent: " +
    //   reasonContent +
    //   " + " +
    //   teacherName +
    //   " + " +
    //   mktNumber + messages
    // );
    alert("Checking if messages sent: " + messages);
  });
}

showMSGsBtn = document.getElementById("showMSGS");
if (showMSGsBtn !== null) {
  showMSGsBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let temp = JSON.parse(localStorage.getItem("messgesForSKfromTeacher"));
    //console.log(temp[0].MKT);
    if (localStorage.getItem("messgesForSKfromTeacher") !== null) {
      document.getElementById(
        "messagesShownExtentionTeacher"
      ).innerHTML = ` name: ${temp[0].TeacherName} <br> MKT: ${temp[0].MKT} <br>  Number of extensions: ${temp[0].numberOfextensions} <br> Reason for extension: ${temp[0].reason}`;
    }
  });
}

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ Oscars try ends

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ Oscars try for new item
class newItemCLS {
  teacherName = null;
  itemName = null;
  link = null;
  reason = null;

  constructor(teacherName, itemName, link, reason) {
    this.teacherName = teacherName;
    this.itemName = itemName;
    this.link = link;
    this.reason = reason;
  }
}

const newItemBtn = document.getElementById("SendBtnNewItem");
if (newItemBtn !== null) {
  //dont work!!!! continue from here
  newItemBtn.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("hello");
    let itemName = newItemForm.nameOfItem.value; // mkt number value
    const link = newItemForm.itemLink.value; // teacher name
    let reasonContent = newItemForm.ReasonOfReq.value; // reason for extension
    let userNameFromLS = JSON.parse(
      window.localStorage.getItem("accountsLoggedIn")
    );
    let messages = userNameFromLS.username + itemName + link + reasonContent;
    console.log(userNameFromLS.username);
    //console.log(typeof (mktNumber));
    const nameOfteacher = userNameFromLS.username;
    console.log(nameOfteacher);
    console.log(typeof nameOfteacher);
    let newItemOBJ = new newItemCLS(
      nameOfteacher,
      itemName,
      link,
      reasonContent
    );
    messagesArray.push(newItemOBJ);
    //console.log(newItemOBJ.TeacherName);
    window.localStorage.setItem(
      "messgesForSKNewItem",
      JSON.stringify(messagesArray)
    ); // change array to new ones for every send btn

    console.log(newItemOBJ);
    // alert(
    //   "Checking if extension sent: " +
    //   reasonContent +
    //   " + " +
    //   teacherName +
    //   " + " +
    //   mktNumber + messages
    // );
    alert("Checking if messages sent: " + messages);
  });
}

showMSGsBtn = document.getElementById("showMSGS");
if (showMSGsBtn !== null) {
  showMSGsBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let temp = JSON.parse(localStorage.getItem("messgesForSKNewItem"));
    //console.log(temp[0].MKT);
    if (localStorage.getItem("messgesForSKNewItem") !== null) {
      document.getElementById(
        "messagesShownNewitem"
      ).innerHTML = ` name: ${temp[0].teacherName} <br> Item Name: ${temp[0].itemName} <br>  Link:  ${temp[0].link} <br> Reason for the new item: ${temp[0].reason}`;
    }
  });
}

let BtnshowShortage = document.getElementById("showshortage");
if (BtnshowShortage !== null) {
  BtnshowShortage.addEventListener("click", (e) => {
    e.preventDefault();
    const localstorageShortage = JSON.parse(
      window.localStorage.getItem("productShortage")
    );
    document.getElementById(
      "shortage_for_good"
    ).innerHTML = `החוסרים באתר הם:${localstorageShortage} `;
  });
}
let BtnaddShortage = document.getElementById("addshortage");
if (BtnaddShortage !== null) {
  BtnaddShortage.addEventListener("click", (e) => {
    e.preventDefault();
    let Role = JSON.parse(window.localStorage.getItem("accountsLoggedIn"));
    if (Role.role === "storage_keeper") {
      const newshortagetext = document.getElementById("addshortagebySKForm")
        .addshortagebySK.value;
      console.log(newshortagetext);
      window.localStorage.setItem(
        "productShortage",
        JSON.stringify(newshortagetext)
      );
    }
  });
}
//to delete this item from local storage to be able to select to the cart other things
window.localStorage.removeItem("searchProduct");

//ass products to cart-when we switch bwtween html its delete the cart
let CartProduct = [];
//localStorage.setItem("intocart", JSON.stringify(CartProduct));

//function to save diffrenet product in the same cart
function save(data) {
  if (window.localStorage.getItem("cart") === null) {
    window.localStorage.setItem("cart", "[]");
  }
  var old_data = JSON.parse(localStorage.getItem("cart"));
  // Push the new data (whether it be an object or anything else) onto the array
  old_data.push(data);
  localStorage.setItem("cart", JSON.stringify(old_data));
}
//its not the best solution but it remove the last thing that got into the cart
function deletetheitem(data) {
  if (window.localStorage.getItem("cart") === null) {
    window.localStorage.setItem("cart", "[]");
  }
  var old_data = JSON.parse(localStorage.getItem("cart"));
  // Push the new data (whether it be an object or anything else) onto the array
  // old_data.pop(data);  //old one, works with pop only
  // old_data = old_data.filter(product => product != data);  //remove 1 item from the array

  let index = old_data.indexOf(data);
  if (index > -1) {
    old_data.splice(index, 1);
  }

  localStorage.setItem("cart", JSON.stringify(old_data));
}

let HowManyGoPro = 0;
const btnGoProUp = document.getElementById("plusGoPro");
const btnGoProDown = document.getElementById("minusGoPro");
//select product and amount
if (btnGoProUp !== null) {
  //check if the pruduct available
  btnGoProUp.addEventListener("click", (e) => {
    e.preventDefault();
    if (GoPro.quantity > 0) {
      document.getElementById("amountGoPro").textContent = ++HowManyGoPro;
      console.log(HowManyGoPro);
      CartProduct.push("GoPro"); //Add to the cart
      save("GoPro");
      console.log(CartProduct);
      document.getElementById(
        "DescriptionGoPro"
      ).textContent = `מצלמת GoPro Available: ${
        20 - HowManyGoPro
      } Color: Black`;
      GoPro.quantity--;
    }
  });
}

//if there is something in the cart from this product
if (btnGoProDown !== null) {
  btnGoProDown.addEventListener("click", function () {
    if (HowManyGoPro > 0) {
      document.getElementById("amountGoPro").textContent = --HowManyGoPro;
      console.log(GoPro.quantity);
      CartProduct.pop("GoPro");
      deletetheitem("GoPro");
      console.log(HowManyGoPro);
      document.getElementById(
        "DescriptionGoPro"
      ).textContent = `מצלמת GoPro Available: ${
        GoPro.quantity + 1
      } Color: Black`;
      GoPro.quantity++;
    }
  });
}

let HowManycanvas = 0;
const btncanvasUp = document.getElementById("pluscanvas");
const btncanvasDown = document.getElementById("minuscanvas");
//Add to the cart

//select product and amount
if (btncanvasUp !== null) {
  //check if the pruduct available
  btncanvasUp.addEventListener("click", (e) => {
    e.preventDefault();
    if (canvas.quantity > 0) {
      document.getElementById("amountcanvas").textContent = ++HowManycanvas;
      console.log(HowManycanvas);
      let cart = window.localStorage.getItem("intocart");
      CartProduct.push(cart);
      CartProduct.push("canvas"); //Add to the cart
      save("canvas");
      console.log(CartProduct);
      document.getElementById(
        "Descriptioncanvas"
      ).textContent = ` canvas Available: ${100 - HowManycanvas} Color: Black`; //TODO #1 20 to canvas.quantity
      canvas.quantity--;
    }
  });
}
//if there is something in the cart from this product
if (btncanvasDown !== null) {
  btncanvasDown.addEventListener("click", function () {
    if (HowManycanvas > 0) {
      document.getElementById("amountcanvas").textContent = --HowManycanvas;
      console.log(canvas.quantity);
      CartProduct.pop("canvas");
      deletetheitem("canvas");

      console.log(HowManycanvas);
      document.getElementById(
        "Descriptioncanvas"
      ).textContent = ` canvas Available: ${canvas.quantity + 1} Color: white`;
      canvas.quantity++;
    }
  });
}
let HowManyVideoCamera = 0;
const btnVideoCameraUp = document.getElementById("plusVideoCamera");
const btnVideoCameraDown = document.getElementById("minusVideoCamera");
//select product and amount
if (btnVideoCameraUp !== null) {
  //check if the pruduct available
  btnVideoCameraUp.addEventListener("click", (e) => {
    e.preventDefault();
    if (VideoCamera.quantity > 0) {
      document.getElementById("amountVideoCamera").textContent =
        ++HowManyVideoCamera;
      CartProduct.push("VideoCamera"); //Add to the cart
      save("VideoCamera");
      console.log(CartProduct);
      document.getElementById(
        "DescriptionVideoCamera"
      ).textContent = `Video Camera 24MP ו-1080P FHD Available: ${
        10 - HowManyVideoCamera
      } Color:
      Black`;
      VideoCamera.quantity--;
    }
  });
}
//if there is something in the cart from this product
if (btnVideoCameraDown !== null) {
  btnVideoCameraDown.addEventListener("click", function () {
    if (HowManyVideoCamera > 0) {
      document.getElementById("amountVideoCamera").textContent =
        --HowManyVideoCamera;
      console.log(VideoCamera.quantity);
      CartProduct.pop("VideoCamera");
      deletetheitem("VideoCamera");
      document.getElementById(
        "DescriptionVideoCamera"
      ).textContent = `Video Camera 24MP ו-1080P FHD Available: ${
        VideoCamera.quantity + 1
      } Color:
      Black`;
      VideoCamera.quantity++;
    }
  });
}
let HowManyUmbrella = 0;
const btnUmbrellaUp = document.getElementById("plusUmbrella");
const btnUmbrellaDown = document.getElementById("minusUmbrella");
//select product and amount
if (btnUmbrellaUp !== null) {
  //check if the pruduct available
  btnUmbrellaUp.addEventListener("click", (e) => {
    e.preventDefault();
    if (VideoCamera.quantity > 0) {
      document.getElementById("amountUmbrella").textContent = ++HowManyUmbrella;
      CartProduct.push("Umbrella"); //Add to the cart
      save("Umbrella");
      console.log(CartProduct);
      document.getElementById(
        "DescriptionUmbrella"
      ).textContent = `Umbrella Available: ${5 - HowManyUmbrella} Color: Black`;
      Umbrella.quantity--;
    }
  });
}
//if there is something in the cart from this product
if (btnUmbrellaDown !== null) {
  btnUmbrellaDown.addEventListener("click", function () {
    if (HowManyUmbrella > 0) {
      document.getElementById("amountUmbrella").textContent = --HowManyUmbrella;
      CartProduct.pop("Umbrella");
      deletetheitem("Umbrella");
      document.getElementById(
        "DescriptionUmbrella"
      ).textContent = `Umbrella Available: ${
        Umbrella.quantity + 1
      }  Color: Black`;
      Umbrella.quantity++;
    }
  });
}
let HowManyCarCamera = 0;
const btnCarCameraUp = document.getElementById("plusCarCamera");
const btnCarCameraDown = document.getElementById("minusCarCamera");
//select product and amount
if (btnCarCameraUp !== null) {
  //check if the pruduct available
  btnCarCameraUp.addEventListener("click", (e) => {
    e.preventDefault();
    if (CarCamera.quantity > 0) {
      document.getElementById("amountCarCamera").textContent =
        ++HowManyCarCamera;
      CartProduct.push("CarCamera"); //Add to the cart
      save("CarCamera");
      console.log(CartProduct);
      document.getElementById(
        "DescriptionCarCamera"
      ).textContent = `Car Camera K4 
      Available: ${7 - HowManyCarCamera}
       Color: Black`;
      CarCamera.quantity--;
    }
  });
}

//if there is something in the cart from this product
if (btnCarCameraDown !== null) {
  btnCarCameraDown.addEventListener("click", function () {
    if (HowManyCarCamera > 0) {
      document.getElementById("amountCarCamera").textContent =
        --HowManyCarCamera;
      CartProduct.pop("CarCamera");
      deletetheitem("CarCamera");
      document.getElementById(
        "DescriptionCarCamera"
      ).textContent = `Car Camera K4 Available: ${
        CarCamera.quantity + 1
      }  Color: Black`;
      CarCamera.quantity++;
    }
  });
}
let HowManytripodCamera = 0;
const btntripodCameraUp = document.getElementById("plustripodCamera");
const btntripodCameraDown = document.getElementById("minustripodCamera");
//select product and amount
if (btntripodCameraUp !== null) {
  //check if the pruduct available
  btntripodCameraUp.addEventListener("click", (e) => {
    e.preventDefault();
    if (tripodCamera.quantity > 0) {
      document.getElementById("amounttripodCamera").textContent =
        ++HowManytripodCamera;
      CartProduct.push("tripodCamera"); //Add to the cart
      save("tripodCamera");
      console.log(CartProduct);
      document.getElementById(
        "DescriptiontripodCamera"
      ).textContent = `Tripod Kingjoy VT2500 Available:${
        50 - HowManytripodCamera
      } Color: Black`;
      tripodCamera.quantity--;
    }
  });
}

//if there is something in the cart from this product
if (btntripodCameraDown !== null) {
  console.log("hello");
  btntripodCameraDown.addEventListener("click", function () {
    if (HowManytripodCamera > 0) {
      document.getElementById("amounttripodCamera").textContent =
        --HowManytripodCamera;
      CartProduct.pop("tripodCamera");
      deletetheitem("tripodCamera");
      document.getElementById(
        "DescriptiontripodCamera"
      ).textContent = `Tripod Kingjoy VT2500 Available:${
        tripodCamera.quantity + 1
      } Color: Black`;
      tripodCamera.quantity++;
    }
  });
}
let HowManypaint = 0;
const btnpaintUp = document.getElementById("pluspaint");
const btnpaintDown = document.getElementById("minuspaint");
//select product and amount
if (btnpaintUp !== null) {
  //check if the pruduct available
  btnpaintUp.addEventListener("click", (e) => {
    e.preventDefault();
    if (paint.quantity > 0) {
      document.getElementById("amountpaint").textContent = ++HowManypaint;
      CartProduct.push("paint"); //Add to the cart
      save("paint");
      console.log(CartProduct);
      document.getElementById(
        "Descriptionpaint"
      ).textContent = `Paint Available:${200 - HowManypaint}  Color: Black`;
      paint.quantity--;
    }
  });
}

//if there is something in the cart from this product
if (btnpaintDown !== null) {
  console.log("hello");
  btnpaintDown.addEventListener("click", function () {
    if (HowManypaint > 0) {
      document.getElementById("amountpaint").textContent = --HowManypaint;
      CartProduct.pop("paint");
      deletetheitem("paint");
      document.getElementById(
        "Descriptionpaint"
      ).textContent = `Paint Available:${paint.quantity + 1} Color: Black`;
      paint.quantity++;
    }
  });
}
let HowManybrush = 0;
const btnbrushUp = document.getElementById("plusbrush");
const btnbrushDown = document.getElementById("minusbrush");
//select product and amount
if (btnbrushUp !== null) {
  //check if the pruduct available
  btnbrushUp.addEventListener("click", (e) => {
    e.preventDefault();
    if (brush.quantity > 0) {
      document.getElementById("amountbrush").textContent = ++HowManybrush;
      CartProduct.push("brush"); //Add to the cart
      save("brush");
      console.log(CartProduct);
      document.getElementById(
        "Descriptionbrush"
      ).textContent = `Brush Available:${100 - HowManybrush}  Color: Black`;
      brush.quantity--;
    }
  });
}

//if there is something in the cart from this product
if (btnbrushDown !== null) {
  console.log("hello");
  btnbrushDown.addEventListener("click", function () {
    if (HowManybrush > 0) {
      document.getElementById("amountbrush").textContent = --HowManybrush;
      CartProduct.pop("brush");
      deletetheitem("brush");
      document.getElementById(
        "Descriptionbrush"
      ).textContent = `Brush Available:${brush.quantity + 1}  Color: Black`;
      brush.quantity++;
    }
  });
}
let HowManyfaberCastell = 0;
const btnfaberCastellUp = document.getElementById("plusfaberCastell");
const btnfaberCastellDown = document.getElementById("minusfaberCastell");
//select product and amount
if (btnfaberCastellUp !== null) {
  //check if the pruduct available
  btnfaberCastellUp.addEventListener("click", (e) => {
    e.preventDefault();
    if (faberCastell.quantity > 0) {
      document.getElementById("amountfaberCastell").textContent =
        ++HowManyfaberCastell;
      CartProduct.push("faberCastell"); //Add to the cart
      save("faberCastell");
      console.log(CartProduct);
      document.getElementById(
        "DescriptionfaberCastell"
      ).textContent = `Faber castell Available:${
        70 - HowManyfaberCastell
      } Color: all`;
      faberCastell.quantity--;
    }
  });
}

//if there is something in the cart from this product
if (btnfaberCastellDown !== null) {
  console.log("hello");
  btnfaberCastellDown.addEventListener("click", function () {
    if (HowManyfaberCastell > 0) {
      document.getElementById("amountfaberCastell").textContent =
        --HowManyfaberCastell;
      CartProduct.pop("faberCastell");
      deletetheitem("faberCastell");
      document.getElementById(
        "DescriptionfaberCastell"
      ).textContent = `Faber castell Available:${
        faberCastell.quantity + 1
      } Color: all`;
      faberCastell.quantity++;
    }
  });
}
let HowManyLEDBourd = 0;
const btnLEDBourdUp = document.getElementById("plusLEDBourd");
const btnLEDBourdDown = document.getElementById("minusLEDBourd");
//select product and amount
if (btnLEDBourdUp !== null) {
  //check if the pruduct available
  btnLEDBourdUp.addEventListener("click", (e) => {
    e.preventDefault();
    if (LEDbourd.quantity > 0) {
      document.getElementById("amountLEDBourd").textContent = ++HowManyLEDBourd;
      CartProduct.push("LEDBourd"); //Add to the cart
      save("LEDBourd");
      console.log(CartProduct);
      document.getElementById(
        "DescriptionLEDBourd"
      ).textContent = `ledBord Available:${20 - HowManyLEDBourd} Color: Black`;
      LEDbourd.quantity--;
    }
  });
}

//if there is something in the cart from this product
if (btnLEDBourdDown !== null) {
  console.log("hello");
  btnLEDBourdDown.addEventListener("click", function () {
    if (HowManyLEDBourd > 0) {
      document.getElementById("amountLEDBourd").textContent = --HowManyLEDBourd;
      CartProduct.pop("LEDBourd");
      deletetheitem("LEDBourd");
      document.getElementById(
        "DescriptionLEDBourd"
      ).textContent = `ledBord Available: ${
        LEDbourd.quantity + 1
      } Color: Black`;
      LEDbourd.quantity++;
    }
  });
}
let HowManyApplePencil = 0;
const btnApplePencilUp = document.getElementById("plusApplePencil");
const btnApplePencilDown = document.getElementById("minusApplePencil");
//select product and amount
if (btnApplePencilUp !== null) {
  //check if the pruduct available
  btnApplePencilUp.addEventListener("click", (e) => {
    e.preventDefault();
    if (ApplePencil.quantity > 0) {
      document.getElementById("amountApplePencil").textContent =
        ++HowManyApplePencil;
      CartProduct.push("ApplePencil"); //Add to the cart
      save("ApplePencil");
      console.log(CartProduct);
      document.getElementById(
        "DescriptionApplePencil"
      ).textContent = `ApplePencil Available: ${
        50 - HowManyApplePencil
      } Color: Black`;
      ApplePencil.quantity--;
    }
  });
}

//if there is something in the cart from this product
if (btnApplePencilDown !== null) {
  console.log("hello");
  btnApplePencilDown.addEventListener("click", function () {
    if (HowManyApplePencil > 0) {
      document.getElementById("amountApplePencil").textContent =
        --HowManyApplePencil;
      CartProduct.pop("ApplePencil");
      deletetheitem("ApplePencil");
      document.getElementById(
        "DescriptionApplePencil"
      ).textContent = `ApplePencil Available: ${
        ApplePencil.quantity + 1
      } Color: Black`;
      ApplePencil.quantity++;
    }
  });
}
let HowManyipads = 0;
const btnipadsUp = document.getElementById("plusipads");
const btnipadsDown = document.getElementById("minusipads");
//select product and amount
if (btnipadsUp !== null) {
  //check if the pruduct available
  btnipadsUp.addEventListener("click", (e) => {
    e.preventDefault();
    if (ipads.quantity > 0) {
      document.getElementById("amountipads").textContent = ++HowManyipads;
      CartProduct.push("ipads"); //Add to the cart
      save("ipads");
      console.log(CartProduct);
      document.getElementById(
        "Descriptionipads"
      ).textContent = `Ipads Available: ${50 - HowManyipads} Color: Black`;
      ipads.quantity--;
    }
  });
}

//if there is something in the cart from this product
if (btnipadsDown !== null) {
  console.log("hello");
  btnipadsDown.addEventListener("click", function () {
    if (HowManyipads > 0) {
      document.getElementById("amountipads").textContent = --HowManyipads;
      CartProduct.pop("ipads");
      deletetheitem("ipads");
      document.getElementById(
        "Descriptionipads"
      ).textContent = `Ipads Available: ${ipads.quantity + 1} Color: Black`;
      ipads.quantity++;
    }
  });
}
let HowManyMcBook = 0;
const btnMcBookUp = document.getElementById("plusMcBook");
const btnMcBookDown = document.getElementById("minusMcBook");
//select product and amount
if (btnMcBookUp !== null) {
  //check if the pruduct available
  btnMcBookUp.addEventListener("click", (e) => {
    e.preventDefault();
    if (MacBook.quantity > 0) {
      document.getElementById("amountMcBook").textContent = ++HowManyMcBook;
      CartProduct.push("McBook"); //Add to the cart
      save("MacBook");
      console.log(CartProduct);
      document.getElementById(
        "DescriptionMcBook"
      ).textContent = `McBook Available:${50 - HowManyMcBook} Color: Black`;
      MacBook.quantity--;
    }
  });
}

//if there is something in the cart from this product
if (btnMcBookDown !== null) {
  console.log("hello");
  btnMcBookDown.addEventListener("click", function () {
    if (HowManyMcBook > 0) {
      document.getElementById("amountMcBook").textContent = --HowManyMcBook;
      CartProduct.pop("McBook");
      deletetheitem("MacBook");
      document.getElementById(
        "DescriptionMcBook"
      ).textContent = `McBook Available:${MacBook.quantity + 1} Color: Black`;
      MacBook.quantity++;
    }
  });
}
let HowManysewingMechine = 0;
const btnsewingMechineUp = document.getElementById("plussewingMachine");
const btnsewingMechineDown = document.getElementById("minussewingMachine");
//select product and amount
if (btnsewingMechineUp !== null) {
  //check if the pruduct available
  btnsewingMechineUp.addEventListener("click", (e) => {
    e.preventDefault();
    if (sewingMechine.quantity > 0) {
      document.getElementById("amountsewingMachine").textContent =
        ++HowManysewingMechine;
      CartProduct.push("sewingMechine"); //Add to the cart
      save("sewingMechine");
      console.log(CartProduct);
      document.getElementById(
        "DescriptionsewingMechine"
      ).textContent = `Sewing machine Available: ${
        15 - HowManysewingMechine
      } Color: grey`;
      sewingMechine.quantity--;
    }
  });
}

//if there is something in the cart from this product
if (btnsewingMechineDown !== null) {
  console.log("hello");
  btnsewingMechineDown.addEventListener("click", function () {
    if (HowManysewingMechine > 0) {
      document.getElementById("amountsewingMachine").textContent =
        --HowManysewingMechine;
      CartProduct.pop("sewingMechine");
      deletetheitem("sewingMechine");
      document.getElementById(
        "DescriptionsewingMechine"
      ).textContent = `Sewing machine Available: ${
        sewingMechine.quantity + 1
      } Color: grey`;
      sewingMechine.quantity++;
    }
  });
}
let HowManymanniqen = 0;
const btnmanniqenUp = document.getElementById("plusmanniqen");
const btnmanniqenDown = document.getElementById("minusmanniqen");
//select product and amount
if (btnmanniqenUp !== null) {
  //check if the pruduct available
  btnmanniqenUp.addEventListener("click", (e) => {
    e.preventDefault();
    if (manniqen.quantity > 0) {
      document.getElementById("amountmanniqen").textContent = ++HowManymanniqen;
      CartProduct.push("manniqen"); //Add to the cart
      save("manniqen");
      console.log(CartProduct);
      document.getElementById(
        "Descriptionmanniqen"
      ).textContent = `Manniqen Available:${
        15 - HowManymanniqen
      } Color: Black `;
      manniqen.quantity--;
    }
  });
}

//if there is something in the cart from this product
if (btnmanniqenDown !== null) {
  console.log("hello");
  btnmanniqenDown.addEventListener("click", function () {
    if (HowManymanniqen > 0) {
      document.getElementById("amountmanniqen").textContent = --HowManymanniqen;
      CartProduct.pop("manniqen");
      deletetheitem("manniqen");
      document.getElementById(
        "Descriptionmanniqen"
      ).textContent = `Manniqen Available: ${
        manniqen.quantity + 1
      } Color: Black `;
      manniqen.quantity++;
    }
  });
}
let HowManyfabric = 0;
const btnfabricUp = document.getElementById("plusfabric");
const btnfabricDown = document.getElementById("minusfabric");
//select product and amount
if (btnfabricUp !== null) {
  //check if the pruduct available
  btnfabricUp.addEventListener("click", (e) => {
    e.preventDefault();
    if (fabric.quantity > 0) {
      document.getElementById("amountfabric").textContent = ++HowManyfabric;
      CartProduct.push("fabric"); //Add to the cart
      save("fabric");
      console.log(CartProduct);
      document.getElementById(
        "Descriptionfabric"
      ).textContent = `Fabric Available:${100 - HowManyfabric} Color: all`;
      fabric.quantity--;
    }
  });
}

//if there is something in the cart from this product
if (btnfabricDown !== null) {
  console.log("hello");
  btnfabricDown.addEventListener("click", function () {
    if (HowManyfabric > 0) {
      document.getElementById("amountfabric").textContent = --HowManyfabric;
      CartProduct.pop("fabric");
      deletetheitem("fabric");
      document.getElementById(
        "Descriptionfabric"
      ).textContent = `Fabric Available:${fabric.quantity + 1} Color: all`;
      fabric.quantity++;
    }
  });
}
let HowManytapeMessures = 0;
const btntapeMessuresUp = document.getElementById("plustapeMessures");
const btntapeMessuresDown = document.getElementById("minustapeMessures");
//select product and amount
if (btntapeMessuresUp !== null) {
  //check if the pruduct available
  btntapeMessuresUp.addEventListener("click", (e) => {
    e.preventDefault();
    if (tapeMessures.quantity > 0) {
      document.getElementById("amounttapeMessures").textContent =
        ++HowManytapeMessures;
      CartProduct.push("tapeMessures"); //Add to the cart
      save("tapeMessures");
      console.log(CartProduct);
      document.getElementById(
        "DescriptiontapeMessures"
      ).textContent = `Tape messures Available:${
        200 - HowManytapeMessures
      } Color: white `;
      tapeMessures.quantity--;
    }
  });
}

//if there is something in the cart from this product
if (btntapeMessuresDown !== null) {
  console.log("hello");
  btntapeMessuresDown.addEventListener("click", function () {
    if (HowManytapeMessures > 0) {
      document.getElementById("amounttapeMessures").textContent =
        --HowManytapeMessures;
      CartProduct.pop("tapeMessures");
      deletetheitem("tapeMessures");
      document.getElementById(
        "DescriptiontapeMessures"
      ).textContent = `Tape messures Available:${
        tapeMessures.quantity + 1
      } Color: white `;
      tapeMessures.quantity++;
    }
  });
}
let HowManystrecher = 0;
const btnstrecherUp = document.getElementById("plusstrecher");
const btnstrecherDown = document.getElementById("minusstrecher");
//select product and amount
if (btnstrecherUp !== null) {
  //check if the pruduct available
  btnstrecherUp.addEventListener("click", (e) => {
    e.preventDefault();
    if (stretcher.quantity > 0) {
      document.getElementById("amountstrecher").textContent = ++HowManystrecher;
      CartProduct.push("strecher"); //Add to the cart
      save("stretcher");
      console.log(CartProduct);
      document.getElementById(
        "Descriptionstrecher"
      ).textContent = `Stretcher Available:${
        10 - HowManystrecher
      }  Color: Black`;
      stretcher.quantity--;
    }
  });
}

//if there is something in the cart from this product
if (btnstrecherDown !== null) {
  console.log("hello");
  btnstrecherDown.addEventListener("click", function () {
    if (HowManystrecher > 0) {
      document.getElementById("amountstrecher").textContent = --HowManystrecher;
      CartProduct.pop("strecher");
      deletetheitem("stretcher");
      document.getElementById(
        "Descriptionstrecher"
      ).textContent = `Stretcher Available:${
        stretcher.quantity + 1
      } Color: Black`;
      stretcher.quantity++;
    }
  });
}
let HowManywelder = 0;
const btnwelderUp = document.getElementById("pluswelder");
const btnwelderDown = document.getElementById("minuswelder");
//select product and amount
if (btnwelderUp !== null) {
  //check if the pruduct available
  btnwelderUp.addEventListener("click", (e) => {
    e.preventDefault();
    if (welder.quantity > 0) {
      document.getElementById("amountwelder").textContent = ++HowManywelder;
      CartProduct.push("welder"); //Add to the cart
      save("welder");
      console.log(CartProduct);
      document.getElementById(
        "Descriptionwelder"
      ).textContent = `Welder Available:${40 - HowManywelder} Color: Black`;
      welder.quantity--;
    }
  });
}

//if there is something in the cart from this product
if (btnwelderDown !== null) {
  console.log("hello");
  btnwelderDown.addEventListener("click", function () {
    if (HowManywelder > 0) {
      document.getElementById("amountwelder").textContent = --HowManywelder;
      CartProduct.pop("welder");
      deletetheitem("welder");
      document.getElementById(
        "Descriptionwelder"
      ).textContent = `Welder Available:${welder.quantity + 1} Color: Black`;
      welder.quantity++;
    }
  });
}
let HowManysilver = 0;
const btnsilverUp = document.getElementById("plussilver");
const btnsilverDown = document.getElementById("minussilver");
//select product and amount
if (btnsilverUp !== null) {
  //check if the pruduct available
  btnsilverUp.addEventListener("click", (e) => {
    e.preventDefault();
    if (silver.quantity > 0) {
      document.getElementById("amountsilver").textContent = ++HowManysilver;
      CartProduct.push("silver"); //Add to the cart
      save("silver");
      console.log(CartProduct);
      document.getElementById(
        "Descriptionsilver"
      ).textContent = `Silver wire Available: ${
        60 - HowManysilver
      } Color: silver`;
      silver.quantity--;
    }
  });
}

//if there is something in the cart from this product
if (btnsilverDown !== null) {
  console.log("hello");
  btnsilverDown.addEventListener("click", function () {
    if (HowManysilver > 0) {
      document.getElementById("amountsilver").textContent = --HowManysilver;
      CartProduct.pop("silver");
      deletetheitem("silver");
      document.getElementById(
        "Descriptionsilver"
      ).textContent = `Silver wire Available: ${
        silver.quantity + 1
      } Color: silver`;
      silver.quantity++;
    }
  });
}
let HowManygold = 0;
const btngoldUp = document.getElementById("plusgold");
const btngoldDown = document.getElementById("minusgold");
//select product and amount
if (btngoldUp !== null) {
  //check if the pruduct available
  btngoldUp.addEventListener("click", (e) => {
    e.preventDefault();
    if (gold.quantity > 0) {
      document.getElementById("amountgold").textContent = ++HowManygold;
      CartProduct.push("gold"); //Add to the cart
      save("gold");
      console.log(CartProduct);
      document.getElementById(
        "Descriptiongold"
      ).textContent = `gold wire Available: ${60 - HowManygold} Color: gold`;
      gold.quantity--;
    }
  });
}

//if there is something in the cart from this product
if (btngoldDown !== null) {
  console.log("hello");
  btngoldDown.addEventListener("click", function () {
    if (HowManygold > 0) {
      document.getElementById("amountgold").textContent = --HowManygold;
      CartProduct.pop("gold");
      deletetheitem("gold");
      document.getElementById(
        "Descriptiongold"
      ).textContent = `gold wire Available: ${gold.quantity + 1} Color: gold`;
      gold.quantity++;
    }
  });
}
let HowManycutter = 0;
const btncutterUp = document.getElementById("pluscutter");
const btncutterDown = document.getElementById("minuscutter");
//select product and amount
if (btncutterUp !== null) {
  //check if the pruduct available
  btncutterUp.addEventListener("click", (e) => {
    e.preventDefault();
    if (cutter.quantity > 0) {
      document.getElementById("amountcutter").textContent = ++HowManycutter;
      CartProduct.push("cutter"); //Add to the cart
      save("cutter");
      console.log(CartProduct);
      document.getElementById(
        "Descriptioncutter"
      ).textContent = `Cutter Available:${50 - HowManycutter} Color: Black`;
      cutter.quantity--;
    }
  });
}

//if there is something in the cart from this product
if (btncutterDown !== null) {
  console.log("hello");
  btncutterDown.addEventListener("click", function () {
    if (HowManycutter > 0) {
      document.getElementById("amountcutter").textContent = --HowManycutter;
      CartProduct.pop("cutter");
      deletetheitem("cutter");
      document.getElementById(
        "Descriptioncutter"
      ).textContent = `Cutter Available:${cutter.quantity + 1} Color: Black`;
      cutter.quantity++;
    }
  });
}

//alert(JSON.parse(localStorage.getItem("cart")));
const btnshoeOnCart = document.getElementById("show_what_in_cart");
if (btnshoeOnCart !== null) {
  btnshoeOnCart.addEventListener("click", function (e) {
    e.preventDefault();
    if (localStorage.getItem("cart") !== null) {
      document.getElementById("outputfromcart").innerHTML = JSON.parse(
        localStorage.getItem("cart")
      );
    }
  });
}
const btnclearTheCart = document.getElementById("clearThecart");
if (btnclearTheCart !== null) {
  btnclearTheCart.addEventListener("click", function (e) {
    e.preventDefault();
    window.localStorage.removeItem("cart");
    document.getElementById("outputfromcart").innerHTML = `:מוצרים בעגלה`;
  });
}
const btnInvite = document.getElementById("invite");
if (btnInvite !== null) {
  btnInvite.addEventListener("click", function (e) {
    e.preventDefault();
    //to give the teacher a preference over student
    let cartProductForchecking = JSON.parse(
      window.localStorage.getItem("cart")
    );
    console.log(cartProductForchecking);
    let Role = JSON.parse(window.localStorage.getItem("accountsLoggedIn"));
    cartProductForchecking.forEach((product) => {
      if (product.quantity <= 3) {
        if (Role.role === student) {
          alert(`You can't order ${product}`);
          deletetheitem(product);
        }
      }
    });
    window.localStorage.removeItem("cart");
    if (Role.role == "student") {
      alert("Please bring back the products in 3 weeks");
    }
    if (Role.role == "teacher") {
      alert("Please bring back the products in 3 days");
    }
    document.getElementById(
      "outputfromcart"
    ).innerHTML = `הזמנתך נשלחה ומחכה לאישור`;
  });
}

//report student
const reportStudentNotNull = document.getElementById("reportStudentNotNull");
if (reportStudentNotNull != null) {
}
document.getElementById(
  "report_quantity_1"
).textContent = `${VideoCamera.quantity}`;
document.getElementById("report_name_1").textContent = `${VideoCamera.name}`;
document.getElementById("report_mkt_1").textContent = `${VideoCamera.MKT}`;

document.getElementById(
  "report_quantity_2"
).textContent = `${CarCamera.quantity}`;
document.getElementById("report_name_2").textContent = `${CarCamera.name}`;
document.getElementById("report_mkt_2").textContent = `${CarCamera.MKT}`;

document.getElementById(
  "report_quantity_3"
).textContent = `${tripodCamera.quantity}`;
document.getElementById("report_name_3").textContent = `${tripodCamera.name}`;
document.getElementById("report_mkt_3").textContent = `${tripodCamera.MKT}`;

document.getElementById(
  "report_quantity_4"
).textContent = `${Umbrella.quantity}`;
document.getElementById("report_name_4").textContent = `${Umbrella.name}`;
document.getElementById("report_mkt_4").textContent = `${Umbrella.MKT}`;

document.getElementById("report_quantity_5").textContent = `${GoPro.quantity}`;
document.getElementById("report_name_5").textContent = `${GoPro.name}`;
document.getElementById("report_mkt_5").textContent = `${GoPro.MKT}`;

document.getElementById("report_quantity_6").textContent = `${ipads.quantity}`;
document.getElementById("report_name_6").textContent = `${ipads.name}`;
document.getElementById("report_mkt_6").textContent = `${ipads.MKT}`;

document.getElementById(
  "report_quantity_7"
).textContent = `${MacBook.quantity}`;
document.getElementById("report_name_7").textContent = `${MacBook.name}`;
document.getElementById("report_mkt_7").textContent = `${MacBook.MKT}`;

document.getElementById(
  "report_quantity_8"
).textContent = `${ApplePencil.quantity}`;
document.getElementById("report_name_8").textContent = `${ApplePencil.name}`;
document.getElementById("report_mkt_8").textContent = `${ApplePencil.MKT}`;

document.getElementById(
  "report_quantity_9"
).textContent = `${LEDbourd.quantity}`;
document.getElementById("report_name_9").textContent = `${LEDbourd.name}`;
document.getElementById("report_mkt_9").textContent = `${LEDbourd.MKT}`;

document.getElementById(
  "report_quantity_10"
).textContent = `${canvas.quantity}`;
document.getElementById("report_name_10").textContent = `${canvas.name}`;
document.getElementById("report_mkt_10").textContent = `${canvas.MKT}`;

document.getElementById("report_quantity_11").textContent = `${brush.quantity}`;
document.getElementById("report_name_11").textContent = `${brush.name}`;
document.getElementById("report_mkt_11").textContent = `${brush.MKT}`;

document.getElementById(
  "report_quantity_12"
).textContent = `${faberCastell.quantity}`;
document.getElementById("report_name_12").textContent = `${faberCastell.name}`;
document.getElementById("report_mkt_12").textContent = `${faberCastell.MKT}`;

document.getElementById("report_quantity_13").textContent = `${paint.quantity}`;
document.getElementById("report_name_13").textContent = `${paint.name}`;
document.getElementById("report_mkt_13").textContent = `${paint.MKT}`;

document.getElementById(
  "report_quantity_14"
).textContent = `${sewingMechine.quantity}`;
document.getElementById("report_name_14").textContent = `${sewingMechine.name}`;
document.getElementById("report_mkt_14").textContent = `${sewingMechine.MKT}`;

document.getElementById(
  "report_quantity_15"
).textContent = `${fabric.quantity}`;
document.getElementById("report_name_15").textContent = `${fabric.name}`;
document.getElementById("report_mkt_15").textContent = `${fabric.MKT}`;

document.getElementById(
  "report_quantity_16"
).textContent = `${tapeMessures.quantity}`;
document.getElementById("report_name_16").textContent = `${tapeMessures.name}`;
document.getElementById("report_mkt_16").textContent = `${tapeMessures.MKT}`;

document.getElementById(
  "report_quantity_17"
).textContent = `${manniqen.quantity}`;
document.getElementById("report_name_17").textContent = `${manniqen.name}`;
document.getElementById("report_mkt_17").textContent = `${manniqen.MKT}`;

document.getElementById(
  "report_quantity_18"
).textContent = `${silver.quantity}`;
document.getElementById("report_name_18").textContent = `${silver.name}`;
document.getElementById("report_mkt_18").textContent = `${silver.MKT}`;

document.getElementById("report_quantity_19").textContent = `${gold.quantity}`;
document.getElementById("report_name_19").textContent = `${gold.name}`;
document.getElementById("report_mkt_19").textContent = `${gold.MKT}`;

document.getElementById(
  "report_quantity_20"
).textContent = `${cutter.quantity}`;
document.getElementById("report_name_20").textContent = `${cutter.name}`;
document.getElementById("report_mkt_20").textContent = `${cutter.MKT}`;

document.getElementById(
  "report_quantity_21"
).textContent = `${welder.quantity}`;
document.getElementById("report_name_21").textContent = `${welder.name}`;
document.getElementById("report_mkt_21").textContent = `${welder.MKT}`;

document.getElementById(
  "report_quantity_22"
).textContent = `${stretcher.quantity}`;
document.getElementById("report_name_22").textContent = `${stretcher.name}`;
document.getElementById("report_mkt_22").textContent = `${stretcher.MKT}`;

//

//report storageKeeper addons
const reportStorageKeeperNotNull = document.getElementById(
  "reportStorageKeeperNotNull"
);
if (reportStorageKeeperNotNull != null) {
}
document.getElementById(
  "report_quantity_max_1"
).textContent = `${VideoCamera.MaxQuantity}`;
document.getElementById(
  "report_quantity_max_2"
).textContent = `${CarCamera.MaxQuantity}`;
document.getElementById(
  "report_quantity_max_3"
).textContent = `${tripodCamera.MaxQuantity}`;
document.getElementById(
  "report_quantity_max_4"
).textContent = `${Umbrella.MaxQuantity}`;
document.getElementById(
  "report_quantity_max_5"
).textContent = `${GoPro.MaxQuantity}`;
document.getElementById(
  "report_quantity_max_6"
).textContent = `${ipads.MaxQuantity}`;
document.getElementById(
  "report_quantity_max_7"
).textContent = `${MacBook.MaxQuantity}`;
document.getElementById(
  "report_quantity_max_8"
).textContent = `${ApplePencil.MaxQuantity}`;
document.getElementById(
  "report_quantity_max_9"
).textContent = `${LEDbourd.MaxQuantity}`;
document.getElementById(
  "report_quantity_max_10"
).textContent = `${canvas.MaxQuantity}`;
document.getElementById(
  "report_quantity_max_11"
).textContent = `${brush.MaxQuantity}`;
document.getElementById(
  "report_quantity_max_12"
).textContent = `${faberCastell.MaxQuantity}`;
document.getElementById(
  "report_quantity_max_13"
).textContent = `${paint.MaxQuantity}`;
document.getElementById(
  "report_quantity_max_14"
).textContent = `${sewingMechine.MaxQuantity}`;
document.getElementById(
  "report_quantity_max_15"
).textContent = `${fabric.MaxQuantity}`;
document.getElementById(
  "report_quantity_max_16"
).textContent = `${tapeMessures.MaxQuantity}`;
document.getElementById(
  "report_quantity_max_17"
).textContent = `${manniqen.MaxQuantity}`;
document.getElementById(
  "report_quantity_max_18"
).textContent = `${silver.MaxQuantity}`;
document.getElementById(
  "report_quantity_max_19"
).textContent = `${gold.MaxQuantity}`;
document.getElementById(
  "report_quantity_max_20"
).textContent = `${cutter.MaxQuantity}`;
document.getElementById(
  "report_quantity_max_21"
).textContent = `${welder.MaxQuantity}`;
document.getElementById(
  "report_quantity_max_22"
).textContent = `${stretcher.MaxQuantity}`;

//report Teacher

const reportTeacherNotNull = document.getElementById("reportTeacherNotNull");
if (reportTeacherNotNull !== null) {
  if (localStorage.getItem("cart") !== null) {
    document.getElementById("reportTeacherNotNull").innerHTML = JSON.parse(
      localStorage.getItem("cart")
    );
  }
}
