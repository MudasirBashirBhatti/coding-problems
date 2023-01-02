function myFunc(){
let x = document.getElementById("inputNum").value;
let y = Number(x)

let greater ="The number you have entered is \"Greater\" than zero"
let lessThan = "The number you have entered is \"Less\" than zero"
let equalTo ="The number you have entered is \"Equal\" to zero"
let elsePart ="You have not entered any number"


if(y > 0){
    document.getElementById("outPut").innerHTML = greater
}

else if(y < 0){
    document.getElementById("outPut").innerHTML = lessThan
}

else if(y==0){
    document.getElementById("outPut").innerHTML = equalTo
}

else{
    document.getElementById("outPut").innerHTML = elsePart
}

}