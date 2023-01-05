"use strict";
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

const cartBtn_myCart = document.getElementById("myCart");
if (cartBtn_myCart !== null) {
  cartBtn_myCart.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.assign("./myCart.html");
  })
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
  })
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
    window.location.assign("./loginPage.html");
  })
}

const myPerson_myProfile = document.getElementById("myProfile"); //change this
if (myPerson_myProfile !== null) {
  myPerson_myProfile.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.assign("./myProfile.html");
  })
}

const myPerson_messageBox = document.getElementById("messageBox"); //change this
if (myPerson_messageBox !== null) {
  myPerson_messageBox.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.assign("./messageBox.html");
  })
}

const myPerson_helpSupport = document.getElementById("help_support"); //change this
if (myPerson_helpSupport !== null) {
  myPerson_helpSupport.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.assign("./help_support.html");
  })
}

const myPerson_reportStudent = document.getElementById("reportStudent"); //change this
if (myPerson_reportStudent !== null) {
  myPerson_reportStudent.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.assign("./reportStudent.html");
  })
}

const myPerson_reportTeacher = document.getElementById("reportTeacher"); //change this
if (myPerson_reportTeacher !== null) {
  myPerson_reportTeacher.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.assign("./reportTeacher.html");
  })
}

const myPerson_reportStorageKeeper = document.getElementById("reportStorageKeeper"); //change this
if (myPerson_reportStorageKeeper !== null) {
  myPerson_reportStorageKeeper.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.assign("./reportStorageKeeper.html");
  })
}

const myPerson_extansion = document.getElementById("extansion"); //change this
if (myPerson_extansion !== null) {
  myPerson_extansion.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.assign("./extansion.html");
  })
}
const myPerson_newItemReq = document.getElementById("newItemReq"); //change this
if (myPerson_newItemReq !== null) {
  myPerson_newItemReq.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.assign("./newItemReq.html");
  })
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

let CartProduct = [];
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
            //add the link to Textile
            flag = 1;
          }
          if (product.category === "Jewllery") {
            //add the link to Jewllery
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

//when we search the right product will popout
let searchProductPop = JSON.parse(window.localStorage.getItem("searchProduct"));
if (searchProductPop !== null) {
  document.getElementById(`${searchProductPop}`).style.border =
    "dashed rgb(40, 192, 53)";
}

let HowMany = 0;
const btnGoProUp = document.getElementById("plusGoPro");
const btnGoProDown = document.getElementById("minusGoPro");
//select product and amount
if (btnGoProUp !== null) {
  //check if the pruduct available
  btnGoProUp.addEventListener("click", (e) => {
    e.preventDefault();
    if (GoPro.quantity > 0) {
      document.getElementById("amountGoPro").textContent = ++HowMany;
      console.log(HowMany);
      CartProduct.push("GoPro"); //Add to the cart
      console.log(CartProduct);
      document.getElementById(
        "DescriptionGoPro"
      ).textContent = `מצלמת GoPro Available: ${20 - HowMany} Color: Black`; //TODO #1 20 to GoPro.quantity
      GoPro.quantity--;
    }
  });
}


// //check if the pruduct available
// if (GoPro.quantity > 0) {
//   if(btnGoProUp !== null){
//     btnGoProUp.addEventListener("click", function () {
//       //show the button from click on plus
//       document.getElementById("amountGoPro").textContent = ++HowMany;
//       console.log(HowMany);
//       CartProduct.push("GoPro"); //Add to the cart
//       console.log(CartProduct);
//       document.getElementById(
//         "DescriptionGoPro"
//       ).textContent = `מצלמת GoPro Available: ${20 - HowMany} Color: Black`;  //TODO #1 20 to GoPro.quantity
//       GoPro.quantity--;                                                       //TODO #2 block the -number option 

//   });
// }}

//if there is something in the cart from this product

if (btnGoProUp !== null) {
  btnGoProDown.addEventListener("click", function () {
    if (HowMany > 0) {
      document.getElementById("amountGoPro").textContent = --HowMany;
      console.log(GoPro.quantity);
      CartProduct.pop("GoPro");
      console.log(HowMany);
      document.getElementById(
        "DescriptionGoPro"
      ).textContent = `מצלמת GoPro Available: ${GoPro.quantity + 1} Color: Black`;
      GoPro.quantity++;
    }
  });
};

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
};

const sendBtn = document.getElementById("Send");
if (sendBtn !== null) {
  sendBtn.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("hello");
    let mktNumber = extansionForm.MKTNumber.value;  // mkt number value
    let teacherName = extansionForm.TeacherName.value; // teacher name
    let reasonContent = extansionForm.extansionReason.value;  // reason for extension
    let userNameFromLS = JSON.parse(window.localStorage.getItem("account"));
    //console.log(userNameFromLS);
    const messages = userNameFromLS[0].username + reasonContent + teacherName + mktNumber;
    // console.log(typeof (userNameFromLS[0].username));
    // console.log(typeof (mktNumber));
    let nameOfStudent = userNameFromLS[0].username;
    let messagesOBJ = new messagesCLS(nameOfStudent, mktNumber, teacherName, reasonContent);
    console.log(userNameFromLS[0].username);
    //console.log(userNameFromLS);
    messagesArray.push(messagesOBJ);
    window.localStorage.setItem("messgesForSKFromStudent", JSON.stringify(messagesArray));

    console.log(messagesOBJ);
    // alert(
    //   "Checking if extension sent: " +
    //   reasonContent +
    //   " + " +
    //   teacherName +
    //   " + " +
    //   mktNumber + messages
    // );
    alert(
      "Checking if messages sent: " + messages
    );

  });
}

let showMSGsBtn = document.getElementById("showMSGS");
if (showMSGsBtn !== null) {
  showMSGsBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let temp = JSON.parse(localStorage.getItem("messgesForSKFromStudent"));
    //console.log(temp[0].MKT);
    if (localStorage.getItem("messgesForSKFromStudent") !== null) {
      document.getElementById("messagesShownExtentionStudent").innerHTML = ` name: ${temp[0].studentName} <br> MKT: ${temp[0].MKT} <br> Teacher name: ${temp[0].teacherName} <br> Reason for extension: ${temp[0].reason}`

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
};

const sendReqBtn = document.getElementById("SendBtnTeacher");
if (sendReqBtn !== null) {      //dont work!!!! continue from here
  sendReqBtn.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("hello");
    let mktNumber = sendReqForm.TeachersMKT.value;  // mkt number value
    const exetensionsNumber = sendReqForm.NumOfExtansions.value; // teacher name
    let reasonContent = sendReqForm.TeachersReason.value;  // reason for extension
    let userNameFromLS = JSON.parse(window.localStorage.getItem("account"));
    //console.log(userNameFromLS);
    let messages = userNameFromLS[0].username + reasonContent + exetentionsNumber + mktNumber;
    console.log(typeof (mktNumber));
    let nameOfteacher = userNameFromLS[0].username;
    let messagesTeacherOBJ = new messagesFromTeacherCLS(nameOfteacher, mktNumber, exetensionsNumber, reasonContent);
    messagesArray.push(messagesTeacherOBJ);
    window.localStorage.setItem("messgesForSKfromTeacher", JSON.stringify(messagesArray));

    console.log(messagesTeacherOBJ);
    // alert(
    //   "Checking if extension sent: " +
    //   reasonContent +
    //   " + " +
    //   teacherName +
    //   " + " +
    //   mktNumber + messages
    // );
    alert(
      "Checking if messages sent: " + messages
    );

  });
}

showMSGsBtn = document.getElementById("showMSGS");
if (showMSGsBtn !== null) {
  showMSGsBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let temp = JSON.parse(localStorage.getItem("messgesForSKfromTeacher"));
    //console.log(temp[0].MKT);
    if (localStorage.getItem("messgesForSKfromTeacher") !== null) {
      document.getElementById("messagesShownExtentionTeacher").innerHTML = ` name: ${temp[0].TeacherName} <br> MKT: ${temp[0].MKT} <br>  Number of extensions: ${temp[0].numberOfextensions} <br> Reason for extension: ${temp[0].reason}`

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
};

const newItemBtn = document.getElementById("SendBtnNewItem");
if (newItemBtn !== null) {      //dont work!!!! continue from here
  newItemBtn.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("hello");
    let itemName = newItemForm.nameOfItem.value;  // mkt number value
    const link = newItemForm.itemLink.value; // teacher name
    let reasonContent = newItemForm.ReasonOfReq.value;  // reason for extension
    let userNameFromLS = JSON.parse(window.localStorage.getItem("account"));
    let messages = userNameFromLS[0].username + itemName + link + reasonContent;
    console.log(userNameFromLS[0].username);
    //console.log(typeof (mktNumber));
    const nameOfteacher = userNameFromLS[0].username;
    console.log(nameOfteacher);
    console.log(typeof (nameOfteacher));
    let newItemOBJ = new newItemCLS(nameOfteacher, itemName, link, reasonContent);
    messagesArray.push(newItemOBJ);
    //console.log(newItemOBJ.TeacherName);
    window.localStorage.setItem("messgesForSKNewItem", JSON.stringify(messagesArray)); // change array to new ones for every send btn

    console.log(newItemOBJ);
    // alert(
    //   "Checking if extension sent: " +
    //   reasonContent +
    //   " + " +
    //   teacherName +
    //   " + " +
    //   mktNumber + messages
    // );
    alert(
      "Checking if messages sent: " + messages
    );

  });
}

showMSGsBtn = document.getElementById("showMSGS");
if (showMSGsBtn !== null) {
  showMSGsBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let temp = JSON.parse(localStorage.getItem("messgesForSKNewItem"));
    //console.log(temp[0].MKT);
    if (localStorage.getItem("messgesForSKNewItem") !== null) {
      document.getElementById("messagesShownNewitem").innerHTML = ` name: ${temp[0].teacherName} <br> Item Name: ${temp[0].itemName} <br>  Link:  ${temp[0].link} <br> Reason for the new item: ${temp[0].reason}`

    }


  });
}


//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ Oscars try ends
//report student

document.getElementById("report_quantity_1").textContent = `${VideoCamera.quantity}`;
document.getElementById("report_name_1").textContent = `${VideoCamera.name}`;
document.getElementById("report_mkt_1").textContent = `${VideoCamera.MKT}`;

document.getElementById("report_quantity_2").textContent = `${CarCamera.quantity}`;
document.getElementById("report_name_2").textContent = `${CarCamera.name}`;
document.getElementById("report_mkt_2").textContent = `${CarCamera.MKT}`;

document.getElementById("report_quantity_3").textContent = `${tripodCamera.quantity}`;
document.getElementById("report_name_3").textContent = `${tripodCamera.name}`;
document.getElementById("report_mkt_3").textContent = `${tripodCamera.MKT}`;

document.getElementById("report_quantity_4").textContent = `${Umbrella.quantity}`;
document.getElementById("report_name_4").textContent = `${Umbrella.name}`;
document.getElementById("report_mkt_4").textContent = `${Umbrella.MKT}`;

document.getElementById("report_quantity_5").textContent = `${GoPro.quantity}`;
document.getElementById("report_name_5").textContent = `${GoPro.name}`;
document.getElementById("report_mkt_5").textContent = `${GoPro.MKT}`;

document.getElementById("report_quantity_6").textContent = `${ipads.quantity}`;
document.getElementById("report_name_6").textContent = `${ipads.name}`;
document.getElementById("report_mkt_6").textContent = `${ipads.MKT}`;

document.getElementById("report_quantity_7").textContent = `${MacBook.quantity}`;
document.getElementById("report_name_7").textContent = `${MacBook.name}`;
document.getElementById("report_mkt_7").textContent = `${MacBook.MKT}`;

document.getElementById("report_quantity_8").textContent = `${ApplePencil.quantity}`;
document.getElementById("report_name_8").textContent = `${ApplePencil.name}`;
document.getElementById("report_mkt_8").textContent = `${ApplePencil.MKT}`;

document.getElementById("report_quantity_9").textContent = `${LEDbourd.quantity}`;
document.getElementById("report_name_9").textContent = `${LEDbourd.name}`;
document.getElementById("report_mkt_9").textContent = `${LEDbourd.MKT}`;

document.getElementById("report_quantity_10").textContent = `${canvas.quantity}`;
document.getElementById("report_name_10").textContent = `${canvas.name}`;
document.getElementById("report_mkt_10").textContent = `${canvas.MKT}`;

document.getElementById("report_quantity_11").textContent = `${brush.quantity}`;
document.getElementById("report_name_11").textContent = `${brush.name}`;
document.getElementById("report_mkt_11").textContent = `${brush.MKT}`;

document.getElementById("report_quantity_12").textContent = `${faberCastell.quantity}`;
document.getElementById("report_name_12").textContent = `${faberCastell.name}`;
document.getElementById("report_mkt_12").textContent = `${faberCastell.MKT}`;

document.getElementById("report_quantity_13").textContent = `${paint.quantity}`;
document.getElementById("report_name_13").textContent = `${paint.name}`;
document.getElementById("report_mkt_13").textContent = `${paint.MKT}`;

document.getElementById("report_quantity_14").textContent = `${sewingMechine.quantity}`;
document.getElementById("report_name_14").textContent = `${sewingMechine.name}`;
document.getElementById("report_mkt_14").textContent = `${sewingMechine.MKT}`;

document.getElementById("report_quantity_15").textContent = `${fabric.quantity}`;
document.getElementById("report_name_15").textContent = `${fabric.name}`;
document.getElementById("report_mkt_15").textContent = `${fabric.MKT}`;

document.getElementById("report_quantity_16").textContent = `${tapeMessures.quantity}`;
document.getElementById("report_name_16").textContent = `${tapeMessures.name}`;
document.getElementById("report_mkt_16").textContent = `${tapeMessures.MKT}`;

document.getElementById("report_quantity_17").textContent = `${manniqen.quantity}`;
document.getElementById("report_name_17").textContent = `${manniqen.name}`;
document.getElementById("report_mkt_17").textContent = `${manniqen.MKT}`;

document.getElementById("report_quantity_18").textContent = `${silver.quantity}`;
document.getElementById("report_name_18").textContent = `${silver.name}`;
document.getElementById("report_mkt_18").textContent = `${silver.MKT}`;

document.getElementById("report_quantity_19").textContent = `${gold.quantity}`;
document.getElementById("report_name_19").textContent = `${gold.name}`;
document.getElementById("report_mkt_19").textContent = `${gold.MKT}`;

document.getElementById("report_quantity_20").textContent = `${cutter.quantity}`;
document.getElementById("report_name_20").textContent = `${cutter.name}`;
document.getElementById("report_mkt_20").textContent = `${cutter.MKT}`;

document.getElementById("report_quantity_21").textContent = `${welder.quantity}`;
document.getElementById("report_name_21").textContent = `${welder.name}`;
document.getElementById("report_mkt_21").textContent = `${welder.MKT}`;

document.getElementById("report_quantity_22").textContent = `${stretcher.quantity}`;
document.getElementById("report_name_22").textContent = `${stretcher.name}`;
document.getElementById("report_mkt_22").textContent = `${stretcher.MKT}`;


//report storageKeeper addons
document.getElementById("report_quantity_max_1").textContent = `${VideoCamera.MaxQuantity}`;
document.getElementById("report_quantity_max_2").textContent = `${CarCamera.MaxQuantity}`;
document.getElementById("report_quantity_max_3").textContent = `${tripodCamera.MaxQuantity}`;
document.getElementById("report_quantity_max_4").textContent = `${Umbrella.MaxQuantity}`;
document.getElementById("report_quantity_max_5").textContent = `${GoPro.MaxQuantity}`;
document.getElementById("report_quantity_max_6").textContent = `${ipads.MaxQuantity}`;
document.getElementById("report_quantity_max_7").textContent = `${MacBook.MaxQuantity}`;
document.getElementById("report_quantity_max_8").textContent = `${ApplePencil.MaxQuantity}`;
document.getElementById("report_quantity_max_9").textContent = `${LEDbourd.MaxQuantity}`;
document.getElementById("report_quantity_max_10").textContent = `${canvas.MaxQuantity}`;
document.getElementById("report_quantity_max_11").textContent = `${brush.MaxQuantity}`;
document.getElementById("report_quantity_max_12").textContent = `${faberCastell.MaxQuantity}`;
document.getElementById("report_quantity_max_13").textContent = `${paint.MaxQuantity}`;
document.getElementById("report_quantity_max_14").textContent = `${sewingMechine.MaxQuantity}`;
document.getElementById("report_quantity_max_15").textContent = `${fabric.MaxQuantity}`;
document.getElementById("report_quantity_max_16").textContent = `${tapeMessures.MaxQuantity}`;
document.getElementById("report_quantity_max_17").textContent = `${manniqen.MaxQuantity}`;
document.getElementById("report_quantity_max_18").textContent = `${silver.MaxQuantity}`;
document.getElementById("report_quantity_max_19").textContent = `${gold.MaxQuantity}`;
document.getElementById("report_quantity_max_20").textContent = `${cutter.MaxQuantity}`;
document.getElementById("report_quantity_max_21").textContent = `${welder.MaxQuantity}`;
document.getElementById("report_quantity_max_22").textContent = `${stretcher.MaxQuantity}`;

//if there is something in the cart from this product
if (btnGoProDown !== null) {

  btnGoProDown.addEventListener("click", function () {
    if (HowMany > 0) {
      document.getElementById("amountGoPro").textContent = --HowMany;
      console.log(GoPro.quantity);
      CartProduct.pop("GoPro");
      console.log(HowMany);
      document.getElementById(
        "DescriptionGoPro"
      ).textContent = `מצלמת GoPro Available: ${GoPro.quantity + 1
      } Color: Black`;
      GoPro.quantity++;
    }
  });
}
HowMany = 0;
const btncanvasUp = document.getElementById("pluscanvad");
const btncanvasDown = document.getElementById("minuscanvas");
//select product and amount
if (btncanvasUp !== null) {
  //check if the pruduct available
  if (canvas.quantity > 0) {
    btncanvasUp.addEventListener("click", (e) => {
      e.preventDefault();
      //show the button from click on plus
      document.getElementById("amountcanvas").textContent = ++HowMany;
      console.log(HowMany);
      CartProduct.push("canvas"); //Add to the cart
      console.log(CartProduct);
      document.getElementById(
        "Descriptioncanvas"
      ).textContent = ` canvas Available: ${100 - HowMany} Color: Black`; //TODO #1 20 to canvas.quantity
      canvas.quantity--; //TODO #2 block the -number option
    });
  }
}

//if there is something in the cart from this product
if (btnGoProDown !== null) {
  btnGoProDown.addEventListener("click", function () {
    if (HowMany > 0) {
      document.getElementById("amountcanvas").textContent = --HowMany;
      console.log(canvas.quantity);
      CartProduct.pop("canvas");
      console.log(HowMany);
      document.getElementById(
        "Descriptioncanvas"
      ).textContent = ` canvas Available: ${canvas.quantity + 1} Color: white`;
      canvas.quantity++;
    }
  });
}


//generic way only if we search
HowMany = 0;
let amount = "quantity";
const btnUp = document.getElementById(`plus${searchProductPop}`);
console.log(btnUp);
// console.log(searchProductPop.quantity);
const btnDown = document.getElementById(`minus${searchProductPop}`);
//select product and amount
if (btnUp !== null) {
  //check if the pruduct available
  //if (`${searchProductPop}`.quantity > 0) {
  btnUp.addEventListener("click", (e) => {
    e.preventDefault();
    //show the button from click on plus
    document.getElementById(`amount${searchProductPop}`).textContent =
      ++HowMany;
    console.log(HowMany);
    CartProduct.push(searchProductPop); //Add to the cart
    console.log(CartProduct);
    document.getElementById(
      `Description${searchProductPop}`
    ).textContent = ` ${searchProductPop} Available: ${100 - HowMany
    } Color: all`; //TODO #1 20 to canvas.quantity
    searchProductPop.quantity--; //TODO #2 block the -number option
  });
  //}
}
const btnUpGeneral = document.getElementById(`plus${AlltheProducts}`);
console.log(btnUp);
// console.log(searchProductPop.quantity);
const btnDownGeneral = document.getElementById(`minus${searchProductPop}`);
//select product and amount
if (btnUp !== null) {
  //check if the pruduct available
  //if (`${searchProductPop}`.quantity > 0) {
  btnUp.addEventListener("click", (e) => {
    e.preventDefault();
    //show the button from click on plus
    document.getElementById(`amount${searchProductPop}`).textContent =
      ++HowMany;
    console.log(HowMany);
    CartProduct.push(searchProductPop); //Add to the cart
    console.log(CartProduct);
    document.getElementById(
      `Description${searchProductPop}`
    ).textContent = ` ${searchProductPop} Available: ${100 - HowMany
    } Color: all`; //TODO #1 20 to canvas.quantity
    //searchProductPop.quantity--; //TODO #2 block the -number option
  });
  //}
}
//if there is something in the cart from this product
// if (btnDown !== null) {
//   btnDown.addEventListener("click", function () {
//     if (HowMany > 0) {
//       document.getElementById(`amount${searchProductPop}`).textContent = --HowMany;
//       console.log(canvas.quantity);
//       CartProduct.pop("canvas");
//       console.log(HowMany);
//       document.getElementById(
//         `Descriptio${searchProductPop}`
//       ).textContent = ` ${searchProductPop} Available: ${canvas.quantity + 1} Color: white`;
//       canvas.quantity++;
//     }
//   });
// }

//report student

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

//report storageKeeper addons
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





