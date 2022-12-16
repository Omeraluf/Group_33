"use strict";
//Dr.WH button
const DrWHBtn = document.getElementById("e57_118");
DrWHBtn.addEventListener("click", (e) => {
  e.preventDefault();
  window.location.assign("./main.html");
  //ADD the right file
});

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ Omer's part

// when the user clicks on the button, it toggles between hidding and showing the dropdown content
// Cart Button
// function dropDownCartBtn() {
//   document.getElementById("dropDown_myCart").classList.toggle("show");
// }
// // Links
// const cartBtn_myCart = document.getElementById("e57_156_1");
// cartBtn_myCart.addEventListener("click", (e) => {
//   e.preventDefault();
//   window.location.assign("./loginPage.html");
// });

// // Bell Button
// function dropDownBellBtn() {
//   document.getElementById("dropDown_myBell").classList.toggle("show");
// }
// // Links
// const cartBtn_myBell = document.getElementById("e57_156_2");
// cartBtn_myBell.addEventListener("click", (e) => {
//   e.preventDefault();
//   window.location.assign("./nextPage.html");
// });

// // Person Button
// function dropDownPersonBtn() {
//   document.getElementById("dropDown_myPerson").classList.toggle("show");
// }
// // Links
// const cartBtn_myPerson = document.getElementById("e57_156_3"); //change this
// cartBtn_myPerson.addEventListener("click", (e) => {
//   e.preventDefault();
//   window.location.assign("./loginPage.html");
// });

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

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ Omer's part

//window.location.assign();
//Yuval's part                                                                                              //@@@@@ CHANGE THE LINKS @@@@@@@@
const btnDigital = document.getElementById("Digital");
const btnArt = document.getElementById("Art");
const btnTextile = document.getElementById("Textile");
const btnPhotography = document.getElementById("Photography");
const btnJewellery = document.getElementById("Jewellery");

btnDigital.addEventListener("click", (e) => {
  e.preventDefault();
  window.location.assign("./addDigital.html");
  //ADD the right file
});
btnArt.addEventListener("click", (e) => {
  e.preventDefault();
  window.location.assign("./addtoart.html");
  //ADD the right file
});
btnTextile.addEventListener("click", (e) => {
  e.preventDefault();
  window.location.assign("#");
  //ADD the right file
});
btnPhotography.addEventListener("click", (e) => {
  e.preventDefault();
  window.location.assign("./addPhotograpy.html");
  //ADD the right file
});
btnJewellery.addEventListener("click", (e) => {
  e.preventDefault();
  window.location.assign("#");
  //ADD the right file
});

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
    "8px solid green";
}
//box-shadow ="0px 5px 16px rgba(60, 255, 0, 0.25)";
// if (searchProductPop === "GoPro") {
//   console.log("found GoPro");
// }
let HowMany = 0;
//const hideGoProchoice = document.querySelector(".choosehowmanyGoPro");
const btnGoProUp = document.getElementById("plusGoPro");
const btnGoProDown = document.getElementById("minusGoPro");
//select product and amount
if (btnGoProUp !== null) {
  //check if the pruduct available
  if (GoPro.quantity > 0) {
    btnGoProUp.addEventListener("click", (e) => {
      e.preventDefault();
      //show the button from click on plus
      document.getElementById("amountGoPro").textContent = ++HowMany;
      console.log(HowMany);
      CartProduct.push("GoPro"); //Add to the cart
      console.log(CartProduct);
      document.getElementById(
        "DescriptionGoPro"
      ).textContent = `מצלמת GoPro Available: ${20 - HowMany} Color: Black`; //TODO #1 20 to GoPro.quantity
      GoPro.quantity--; //TODO #2 block the -number option
    });
  }
}

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
      ).textContent = `מצלמת GoPro Available: ${
        GoPro.quantity + 1
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
