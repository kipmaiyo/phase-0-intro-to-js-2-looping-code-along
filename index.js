// Code your solutions in this file


// const name = ["Guadalupe", "Ollie", "Aki"];
// function wrapGifts(name) {
//   let i = 0; 
//   while (i < name.length) {
//     console.log(`Thank you, ${name[i]}, for the wonderful ${card} gift!`);
//     i++; 
//   }

//   return name;
// }

// cardsOwners(name);

function writeCards(name, event) {
    const array = []
    for (let i = 0; i < name.length; i++) {
        array.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`);
    }
    return array;
}

function countDown(number) {
    while (number > 0) {
        console.log(number);
        number -= 1;
    }
    console.log(number);
}

console.log(writeCards(array))
