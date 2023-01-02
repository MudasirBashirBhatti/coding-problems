function myFunc(){
    let numberOne = document.getElementById("num1").value;
    numberOne = Number(numberOne);
    let numberTwo = document.getElementById("num2").value;
    numberTwo = Number(numberTwo);

    let calculations = numberOne + numberTwo;

    if(calculations <= 100){
        alert(true);
        document.getElementById("outPut").innerHTML = calculations + "<br>The Sum of two numbers is less than 100"
    }

    else{
        alert(false);
        document.getElementById("outPut").innerHTML = calculations + "<br> The Sum of two numbers is greater than 100"
    }

}