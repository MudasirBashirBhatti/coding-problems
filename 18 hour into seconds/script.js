function convert(){
    var x =document.getElementById("hours").value;
    var y =document.getElementById("minutes").value;

    var hours_seconds = x * 60 * 60;
    var minutes_seconds = y *60;

    var final_result = document.getElementById("result").innerHTML =hours_seconds + minutes_seconds + " seconds";

}