const glass = {name:'glass', color:'golden',price:12,isCleaned:true};
console.log(glass);
// all properties name
const keys = Object.keys(glass);
// [ 'name', 'color', 'price', 'isCleaned' ]
// all properties value
const values = Object.values(glass)
// [ 'glass', 'golden', 12, true ]

// console.log(values);

const entries = Object.entries(glass)
// console.log(entries);
// array of array ,2D, Two-Dimensional array
// [
//     [ 'name', 'glass' ],
//     [ 'color', 'golden' ],
//     [ 'price', 12 ],
//     [ 'isCleaned', true ]
// ]

// delete a object proprty
// delete glass.isCleaned;
// console.log(glass);

const {isCleaned,...shortGlass} = glass;
// console.log(shortGlass);

// freeze
// Object.freeze(glass);
Object.seal(glass);
glass.source = 'Bangladesh';
glass.price = 5000;
delete glass.name;
console.log(glass);