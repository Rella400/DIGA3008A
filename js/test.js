window.alert(" This is a pop-up")

function calculateArea(length, width) {
    let area = length * width;
    console.log("The area of the rectangle is: " + area + " square units.");
}

let length = 10;
let width = 5;  

calculateArea(length, width);

function exercise2(){
    let x=3
    let y=3

    if(x===y){
        return sum*3
    }
    else{
        return sum
    }
}

function exercise3(){
    let num1=50
    let num2=10

    if(num1===50 || num2===50 || (num2+num2)===50){
    return true;
    }
    else{
        return false;
    }

}


let voltage=10
let power
let current =5

function exercise4(voltage, current){

let current=power/voltage


    return power

}



function exercise42(voltage,current){
    return current*voltage
}

function exercise5(){
    let numCheck = false;
    let stringCheck = "";

    let randomNum = Math.floor(Math.random()*11);

    if(randomNum < 5){
        numCheck = true
    }
}


//TEST BUTTON

function updateName() {
  const name = prompt("Enter a new name");
  button.textContent = `Player 1: ${name}`;
}

const button = document.querySelector("button");

button.addEventListener("click", updateName);