// var : is not use most of the case it rarely
// let : when we want to reassign. allow it to reassign
// const : not to allow reassign

// let can allow us to reassign
// let only = 4;
// console.log(only);
// only = 10;
// console.log(only);


// const can't allow us to reassign
// const only = 6;
// console.log(only);
// only = 8;
// console.log(only);

// now we try it with Array
// const arr = [4,5,7,3];
// arr = [4,95,2,5];
// arr[1] = 77;
// arr.push(45,98,25);
// console.log(arr);

// now we try it with object
// const obj = {name:'jahalu khan',class:8 }
// obj = {name:'jaka khan',class:4}
// let obj = {name:'jaka khan',class:4}
// console.log(obj);

// now we try it with for loop
let sum = 0;
for(let i = 0; i <10;i++){
    const num = i;
    sum += num;
}
