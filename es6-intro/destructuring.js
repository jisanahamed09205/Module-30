// object destruction
const actor = {
    name: 'ananta',
    age:37,
    phone:'65478484654',
    money:244546544
}
// if right side is an object left side of destructing will be object as well
// use property name as a variable that contains the property value
// const {phone, name,age} = actor
const {phone, name,age: boyos} = actor


// const name = actor.name;
// console.log(name);
// console.log(name);
// console.log(age);
console.log(phone);
console.log(boyos);
console.log(name);

// array destruction
const numbers = [45,69];
const [first, second] = numbers;
const [x,y] = [2,5];

// advanced function destructing
function doubleThem(a,b){
    return [a*2,b*2];
    // return a*2,b*2;
}
const [prothom, ditiyo] = doubleThem(6,9);
console.log(prothom,ditiyo);