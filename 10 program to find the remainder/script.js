function myFunc(){

let x = document.getElementById("dividend").value
let entry_1= Number(x);

let y =document.getElementById("divider").value
let entry_2 = Number(y);

let calc = entry_1 % entry_2

document.getElementById("outPut").innerHTML = calc;

}