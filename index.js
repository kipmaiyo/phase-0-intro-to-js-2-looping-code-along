// Code your solutions in this file

// for (let age = 30; age < 40; age ++) {
//     console.log(`I'm ${age} years old.Happy birthday to me!`);
//     debugger
// }

const gift =["teddy bear", "drone", "doll"];

function wrapGifts(gift){
    for (let i =0; i < gift.length; i ++){
        console.log(`Wrapped ${gift[i]} and added a bowl`);
        debugger;
    }
    return gift;
}
wrapGifts(gift);

const names =["Guadalupe", "Ollie", "Aki"];
//const event = "birthday";
function writeCards(names, event) {
    const visitorsCard = [];
    //console.log(visitorsCard)
    for (let i = 0; i < names.length; i ++){
        //let message = (`Thank you ${names[i]}, for the wonderful ${event} gift!`);
        visitorsCard.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
        //console.log(visitorsCard)
    }
    return visitorsCard;
}
const message = writeCards(names)
console.log(message)


let count = 10
function countDown(count){
    for (let i = 10; i >= 0; i--){
        console.log(i)
    }
    return count
}
countDown(count)











// // const name = ["Guadalupe", "Ollie", "Aki"];
// // function wrapGifts(name) {
// //   let i = 0; 
// //   while (i < name.length) {
// //     console.log(`Thank you, ${name[i]}, for the wonderful ${card} gift!`);
// //     i++; 
// //   }

// //   return name;
// // }

// // cardsOwners(name);

// function writeCards(name, event) {
//     const array = []
//     for (let i = 0; i < name.length; i++) {
//         array.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`);
//     }
//     return array;
// }

// function countDown(number) {
//     while (number > 0) {
//         console.log(number);
//         number -= 1;
//     }
//     console.log(number);
// }

// console.log(writeCards(array))
