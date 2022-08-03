let twoRaiseTo2 = Math.pow(2, 2)
console.log("2 raise to the power of 2 is: ",twoRaiseTo2)
let twoRaiseTo3 = Math.pow(2, 3)
console.log("2 raise to the power of 3 is: ",twoRaiseTo3)
let sixRaiseToPower2 = Math.pow(6, 2)
console.log("6 raise to the power of 2 is: ",sixRaiseToPower2)





function square() {
    console.log(2 ** 2)
}

for (let count = 1; count < 11; count++){
    square()
}

function multiply() {
    let number1 = 2
    let number2 = 4
    let product = number1 * number2
    let message = "2 times 4 is: " + product
    console.log(message)
}
function divition() {
    let number1 = 6
    let number2 = 2
    let product = number1 / number2
    let message = "6 divided by 2 is: " + product
    console.log(message)
    return product
}
function addition(a,b) {
    // let number1 = 10
    // let number2 = 2
    let product = a + b
    // let message = "10 plus 2 is: " + product
    // console.log(message)
    return product
}
function multiple(a,b) {
    let product = a * b
    // console.log(product)
    return product
}
function subtract(a,b) {
    let product = a - b
    // console.log(product)
    return product
}
subtract()
 multiply()
 divition()
let m = multiple(8,3)
console.log(m)
let a = addition(7,m)
console.log(a)
let s = subtract(a,2)
console.log(s);;


// invoke
// square() {{
//     square()
//     square()
//     square()
//     square()
// }}