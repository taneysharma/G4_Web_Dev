console.log("SCRIPT START");
// setTimeout(() => {
//     console.log("I AM GOING TO RESTAURANT");
// },4000);

// setTimeout(() => {
//     console.log("I AM CHECKING THE ORDER");
// },3000);

// function walkInRestaurant(cb) {
//     console.log("I am walking inside the restaurant");
//      setTimeout(cb,3000);
// }
// function menuCheck(cb) {
//     console.log("I am checking the menu");
//      setTimeout(cb,2000);
// }
// function foodOrder(cb) {
//     console.log("I am ordering food");
//      setTimeout(cb,6000);
// }
// function havingLunch(cb) {
//     console.log("I am having food");
//     setTimeout(cb,8000);
// }
// function payBill(cb) {
//     console.log("I am paying the bill");
//     setTimeout(cb,3000);
// }
// function walkAwayFromRes(cb) {
//     console.log("BYE BYE GO HOME");
// }
// walkInRestaurant(()=>{
//     menuCheck(()=>{
//         foodOrder(()=>{
//             havingLunch(()=>{
//                 payBill(()=>{
//                     walkAwayFromRes();
//                 })
//             })
//         })
//     })
// })
// // this structure is pyramid of doom 
// console.log("SCRIPT END");

//ARRAY OPERATIONS
// let arr = [2, 3, 4, 6, 8, 5];

// //create new array then return
// function doubleArrVal(arr) {
//     let newArr = [] ;
//     for(let i=0 ; i<arr.length ; i++) {
//         newArr[i] = arr[i]*2 ;
//     }
//     return newArr ;
// }
// let print = doubleArrVal(arr);
// console.log(print);

let arr = [2, 3, 4, 6, 8, 5];
Array.prototype.doubleArrVal = function (arr) {
    let output = [];

    for (var i = 0; i < arr.length; i++) {
        output.push(arr[i] * 2);
    }
    return output;
}
function triple(x) {
    return x*x*x ;
}
let print = arr.doubleArrVal(arr);
console.log(print);

