const numbers= [1, 2, 3, 4, 5, 6]

for (let i= 0; i<numbers.length; i++)
console.log(numbers[i]);

function arg(arg1, arg2, arg3) {
    console.log(arg1 + arg2 * arg3); arg1 + arg2 * arg3
}
arg(1, 2, 3)

if (numbers.length>5) {
    console.log(`TRUE`);
} else {
    console.log(`FALSE`);
}