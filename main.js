"use strict";
//Dr.WH button
const DrWHBtn = document.getElementById("e57_118");
DrWHBtn.addEventListener("click", (e) =>{
    e.preventDefault();
    window.location.assign("./main.html");
  //ADD the right file
});


//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ Omer's part

// when the user clicks on the button, it toggles between hidding and showing the dropdown content
// Cart Button
function dropDownCartBtn(){
    document.getElementById("dropDown_myCart").classList.toggle("show");
}
    // Links
    const cartBtn_myCart = document.getElementById("e57_156_1");
    cartBtn_myCart.addEventListener("click", (e)=>{
        e.preventDefault();
        window.location.assign("./loginPage.html");
    })


// Bell Button
function dropDownBellBtn(){
    document.getElementById("dropDown_myBell").classList.toggle("show");
}
    // Links
    const cartBtn_myBell = document.getElementById("e57_156_2");
    cartBtn_myBell.addEventListener("click", (e)=>{
        e.preventDefault();
        window.location.assign("./nextPage.html");
    })


// Person Button
function dropDownPersonBtn(){
    document.getElementById("dropDown_myPerson").classList.toggle("show");
}
  // Links
    // Log out button
    const logOutBtn_myPerson = document.getElementById("e57_156_3"); //change this
    logOutBtn_myPerson.addEventListener("click", (e)=>{
        e.preventDefault();
        window.location.assign("./loginPage.html");
    })

    const myPerson_helpSupport = document.getElementById("help_support"); //change this
    myPerson_helpSupport.addEventListener("click", (e)=>{
        e.preventDefault();
        window.location.assign("./help_support.html");
    })


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

btnDigital.addEventListener("click", (e) =>{
    e.preventDefault();
    alert("Hey");
    window.location.assign("./loginPage.html");
  //ADD the right file
});
btnArt.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.assign("./loginPage.html");
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
  quantity: 10,
};
const CarCamera = {
  quantity: 7,
};
const tripodCamera = {
  quantity: 50,
};
const Umbrella = {
  quantity: 5,
};
let GoPro = {
  quantity: 20,
};
// const photographyProduct = [
//   VideoCamera,
//   CarCamera,
//   tripodCamera,
//   Umbrella,
//   GoPro,
// ];
let HowMany = 0;
// const hideGoProchoice = document.querySelector(".choosehowmanyGoPro");
const btnGoProUp = document.getElementById("plusGoPro");
const btnGoProDown = document.getElementById("minusGoPro");

//check if the pruduct available
if (GoPro.quantity > 0) {
  btnGoProUp.addEventListener("click", function () {
    //show the button from click on plus
    document.getElementById("amountGoPro").textContent = ++HowMany;
    console.log(HowMany);
    CartProduct.push("GoPro"); //Add to the cart
    console.log(CartProduct);
    document.getElementById(
      "DescriptionGoPro"
    ).textContent = `מצלמת GoPro Available: ${20 - HowMany} Color: Black`;  //TODO #1 20 to GoPro.quantity
    GoPro.quantity--;                                                       //TODO #2 block the -number option 
  });
}

//if there is something in the cart from this product

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