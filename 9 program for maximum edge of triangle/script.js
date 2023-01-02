function myFunc(){

let x = document.getElementById("side1").value;
let entry_1 = Number(x);

let y = document.getElementById('side2').value;
let entry_2 = Number(y);

let Calculations = (entry_1 + entry_2) - 1

document.getElementById("outPut").innerHTML = Calculations;
}