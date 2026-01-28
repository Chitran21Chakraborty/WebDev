//document.getElementById("counter").innerText = 5;



// let firstBatch = 5;
// let secondBatch = 12;
// let count  = firstBatch + secondBatch;
// console.log(count);



// let myAge = 21;
// let humanDogRatio = 7;
// let myDogAge = myAge * humanDogRatio;
// console.log(myDogAge);

// let count = 5;
// count = count + 1;
// console.log(count)


// function fourtyTwo() {
//   console.log("42")
// }
// fourtyTwo()

// let lap1 = 12
// let lap2 = 34
// let lap3 = 11
// let sum = 0

// function totalLap() {
//   sum = lap1+lap2+lap3
//   console.log(sum)
// }

// totalLap()

let countEl = document.getElementById("counter")


let count = 0
function increment(){
  count +=1
  countEl.innerText = count
}



// let userName = "Chitran"
// let message = "You have three notifications" 

// console.log(message+"," + " " + userName)

// let mesageToUser = message + "," + " " + userName
// console.log(mesageToUser)

// let name = "Chitran "
// let greetings = "Today is my birthday"
// let myGreetings = name + greetings
// console.log(myGreetings)

let saveEl = document.getElementById("save-el")
console.log(saveEl)

function save() {
  console.log(count)
  let coutStr = count + " - "
  saveEl.textContent  += coutStr
  resetCounter()
}

function resetCounter() {
  countEl.textContent = 0
}

