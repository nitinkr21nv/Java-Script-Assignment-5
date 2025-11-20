let a = prompt("Enter first number:");
let b = prompt("Enter second number:");
let operat = prompt("enter the operation from +, -, *, / which you want to perform on these two numbers:");

if(operat == "+") {
    alert(`The result is ${Number(a) + Number(b)}`);
} else if(operat == "-") {
    alert(`The result is ${Number(a) - Number(b)}`);
} else if(operat == "*") {
    alert(`The result is ${Number(a) * Number(b)}`);
} else if(operat == "/") {
    alert(`The result is ${Number(a) / Number(b)}`);
} else {
    alert(`Please write the correct operand.`)
}
       


