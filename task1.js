let num1 = 8
let num2 = 2
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2



let ansObj = document.getElementById("sum-el")
function add() {
  ansObj.innerText = "Sum " + parseInt(num1+num2)

}
function subtract() {
  ansObj.innerText = "Subtract " + parseInt(num1 - num2) 

}
function multiply() {
  ansObj.innerText = "Multiply" + parseInt(num1 * num2)

}
function divide() {
  ansObj.innerText ="Divide" + parseInt(num1 / num2) 

}


