function sum(){  //in the first line we have create a function so that we can call it in button.
let x = document.getElementById("firstQuery").value  //in the second line we have create a variable x and put the value of firstQuery id which is in string
let xCon = Number(x)  //in 3rd line we convert the value of x from string to numer
let y = document.getElementById("secondQuery").value    //Apply the same method as of line two
let yCon = Number(y)        //applied the same method as of line three
let z = xCon + yCon;        //in the 6th line we add the two variable values.
document.getElementById("result").value = z;    //in the 7th line we call the id result where we want to print our statement and store the value of z in it.

document.getElementById("result2").innerText = z
document.getElementById("result2").innerHTML = z
}








