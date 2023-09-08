// for of use on array or string not in object
// for in use on object


const numbers = [1,6,7,6,3];
// for(let i = 0; i<numbers.length;i++){}
// while
for(const num of numbers){
    // console.log(num); 
}
const nobab = 'siraj ud dowla';
for(const char of nobab){
    // console.log(char);
}

const actor = {
    name: 'ananta',
    age:37,
    phone:'65478484654',
    money:244546544
}

// for(const key of actor){
//     console.log(key);
// }
for(const key in actor){
    const value = actor[key]
    // console.log(key, value);
}

// optional
const keys = Object.keys(actor);
// console.log(keys);
for (const key of keys){
    console.log(key);
}