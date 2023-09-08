const max = Math.max(12,89,56,58,69,96);
// console.log(max);
const numbers = [456,58,65,23,78,89];
const arrayMax = Math.max(...numbers);
// console.log(...numbers);
// console.log(arrayMax);

// use spread operator to copy
const friends = [456,58,89];
const bondhu = friends;
// bondhu.push(654);
// console.log(bondhu);
// console.log(friends);
const dosto = [...friends]; //copy
console.log(dosto);
friends.push(100);
console.log(dosto);
console.log(friends);

// advance
const sonkha = [...friends, 5555]; //add extra element while copy
console.log(sonkha);