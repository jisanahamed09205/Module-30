const differences = (x,y) => x - y;
const multiply = (first, second, third, fourth) => first * second * third * fourth;

// single parameter or one parameter with bracket and without bracket both are same
const getAge = (person) => person.age;
const student = {name: 'barik', age:78};
const age = getAge(student);
// console.log(age);

const getThird = numbers => numbers[2];
const third = getThird([45,98,36,69,58]);
// console.log(third);

// no parameter
const getPI = () => Math.PI;
console.log(getPI());

// large arrow function. If you want to get anything returned from this function then you have to use return keyword
const doMath = (x,y,z) => {
    const sum = x+ y +z;
    const mult = x* y* z;
    const result = sum + mult;
    return result;
}