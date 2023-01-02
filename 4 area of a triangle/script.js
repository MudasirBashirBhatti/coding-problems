function myFunc(){
let x = document.getElementById("base").value
let base = Number(x);

let y = document.getElementById("height").value
let height = Number(y);

let z = (base * height)/2;
document.getElementById("outPut").innerHTML = z;
}