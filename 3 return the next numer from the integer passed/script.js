function myFunc(){
let entry = document.getElementById("number").value;
let entry_change_number = Number(entry);
let result = entry_change_number + 1;
document.getElementById("outPut").innerText = result; 
}