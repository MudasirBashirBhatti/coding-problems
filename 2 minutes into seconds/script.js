
function minuteToSeconds(){
let x = document.getElementById("minutes").value
let xCon = Number(x);
let y = xCon * 60;
document.getElementById("result").innerHTML = y;
}