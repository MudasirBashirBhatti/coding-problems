function myFunc(){

let x = document.getElementById("yourAge").value;
let age = Number(x);
let ageInDays = age * 365
let ageInHours = age * 365 * 24
let ageInMinutes = age * 365 * 24 * 60
let ageInSeconds = age * 365 * 24 * 60 * 60
document.getElementById("ageDays").innerHTML =ageInDays;
document.getElementById("ageHours").innerHTML =ageInHours;
document.getElementById("ageMinutes").innerHTML =ageInMinutes;
document.getElementById("ageSeconds").innerHTML =ageInSeconds;

}