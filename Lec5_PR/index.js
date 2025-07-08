// PROMISE IS AN OBJECT HOW TO MAKE IT ?

// const promise1 = new Promise((resolve,reject) => {
//     setTimeout(() => {
//         console.log("THIS IS A PROMISE OBJECT");
//         resolve("PROMISE RESOLVED");
//     },3000)

// });
// console.log(promise1)
// .then((res) => console.log(res))
// .catch((err) => console.log("Error: ",err));


const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("THIS IS A PROMISE OBJECT");
        resolve("PROMISE P1 RESOLVED");
    }, 3000)
})
// promise1
//     .then((res) => console.log(res))
//     .then(() => setTimeout(() => {
//         console.log("P2");
//     }, 2000))
//     .then(() => setTimeout(() => {
//         console.log("P3");
//     }, 5000))
//     .then(() => setTimeout(() => {
//         console.log("P4");
//     }, 1000))
//     .catch((err) => console.log(err));

// we want to execute promises in sequential  order irrespective of the time

// function somethingSomething(message, delay) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log(message);
//             resolve() ;
//         }, delay)
//     })
// }

// promise1
// .then((res) => {
//     console.log(res);
//     return somethingSomething("P2", 4000);
// })
// .then(() => somethingSomething("P3", 3000))
// .then(() => somethingSomething("P4", 1000))
// .catch((err) => console.log(err));



// promise1.then((res) => {console.log(res)})
// .then(() => {
//     return somethingSomething("P2", 4000);
// }).then(() => {
//     return somethingSomething("P3", 3000);
// }).then(() => {
//     return somethingSomething("P4", 1000);
// })
// .catch((err) => {console.log(err)});


