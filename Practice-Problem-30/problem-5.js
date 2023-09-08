const square = (x,y,z) =>{
    const first = x * x;
    const second = y * y;
    const third = z * z;
    const sum = first + second + third;
    return sum;
    // const avg = sum / square.length
    // return avg;
};
const numbers = square(2,3,4);
console.log(numbers);