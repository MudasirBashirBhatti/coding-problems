function equal(){
    var num1 = parseInt( document.getElementById("num1").value);
    var num2 =parseInt( document.getElementById("num2").value);
    if(num1 == num2){
        document.getElementById("result").innerHTML = "Both the numbers are same";
    }else{
        document.getElementById("result").innerHTML = "The numbers are not same";
    }

}