// function welcomeStudents(welcomeMsg, goodbyeMessage) {
//     console.log(welcomeMsg + this.studentName + " is a student of class " + this.studentClass + " " + goodbyeMessage);
// }

// const student1 = {
//     studentName: "Paras",
//     studentClass: "G4"
// }

// const student2 = {
//     studentName: "devesh",
//     studentClass: "g6"
// }

//call
// welcomeStudents.call(student1, "gm ", "bye");
// welcomeStudents.call(student2, "gn ", "bye");

//apply

//bind 
// const s1 = welcomeStudents.bind(student1, ["gm", "bye"]);
// const s2 = welcomeStudents.bind(student2, ["gn", "bye ,bye "]);

// console.log(s1());
// console.log(s2());


//CURRYING
// function sumOfThree(a, b, c) {
//     console.log(a + b + c);
// }

// sumOfThree(10, 20, 30);

// function sumofThree(a) {
//     return function (b) {
//         return function (c) {
//             console.log(a + b + c);
//         }
//     }
// }
// console.log(sumofThree(20)(30)(40));

// function chooseBread(bread) {
//     return function(patty) {
//         return function(cheese) {
//             console.log(bread+patty+cheese);
//         }
//     }
// }


// const grandParent = document.getElementById("grandParent");
// const parent = document.getElementById("parent");
// const child = document.getElementById("child");

// grandParent.addEventListener("click",() => {
//     console.log("GRANDPARENT CLICKED !");
// },true);

// parent.addEventListener("click",() => {
//     console.log("Parent CLICKED !");
// },true);

// child.addEventListener("click" , () => {
//     console.log("Child clicked !");
// },true); 


// const products = [
//     {name:"Cloth" , description:"good quality",price:1000} ,
//     {name:"Coat" , description:"premium",price:5000} ,
//     {name:"Shoes" , description:"good quality",price:2000} ,
//     {name:"Shirt" , description:"good quality",price:1500} ,
// ];
// function productsFetch() {
    
//     return products.map(products => {
//         return {
//             name:products.name ,
//             description:products.description ,
//             price:products.price ,
//         };
//     });
// }
// console.log(productsFetch());



