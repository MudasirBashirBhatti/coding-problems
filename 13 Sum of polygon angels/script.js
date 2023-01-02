function myFunc(){
    let x = document.getElementById("inputNum").value;
    let n = Number(x);

    let calculations = (n-2) * 180
    document.getElementById("outPut").innerHTML = calculations;
}