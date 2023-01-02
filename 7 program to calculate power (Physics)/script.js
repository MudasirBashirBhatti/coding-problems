function myFunc(){

let x = document.getElementById("voltage").value
let voltage = Number(x);

let y = document.getElementById("current").value;
let current = Number(y);

let resultFind = voltage * current;
document.getElementById("outPut").innerHTML = resultFind;

}