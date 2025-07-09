// console.log("SCRIPT START");
// const grandParent = document.getElementById("grandParent");
// const parent = document.getElementById("parent");
// const child = document.getElementById("child");

// grandParent.addEventListener("click",(e) => {
//     console.log("THIS IS RED BLOCK!");
//     e.stopPropagation(); // Stops the event from bubbling up to parent elements
// },false);

// parent.addEventListener("click",(e) => {
//     console.log("BLUE BLOCK  CLICKED");
//     e.stopPropagation(); 
    
// },false);

// child.addEventListener("click" , () => {
//     console.log("GREEN BLOCK CLICKED !");
//     e.stopPropagation(); 
// },false); 


// const productList = document.getElementById("productList");
// productList.addEventListener("click", (event) => {
//     console.log("products");

//     if(event.target.tagName === "LI") {
//         console.log("clicked on:" , event.target.textContent);
//     }
// })

// // if i want to add new element
// const newEle = document.createElement("li");
// newEle.textContent = "Bottle"; 
// productList.appendChild(newEle);


// const textBox = document.getElementById("textBox");
// textBox.addEventListener("input", (event) => {
//     console.log("TYPED: ",event.target.value);
// });


// i want to filter it and show it single time by using setTimeout
const textBox = document.getElementById("textBox");
let thisTime 
textBox.addEventListener("input", (event) => {
    clearTimeout(thisTime); // Clear the previous timeout
    thisTime = setTimeout(() => {
        console.log("TYPED: ", event.target.value);
    },3000); 
});
1