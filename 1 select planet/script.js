function myFunction(){
var detail = document.querySelector(".detail");
var earth = document.querySelector(".earth");
var input = document.getElementById("customName").value;
var change_input = input.toUpperCase();  
if(change_input == "MERCURY"){
    if( detail.style.display == "block"){
    detail.style.display = "none";
    }
    else if(earth.style.display == "block"){
        earth.style.display ="none";
    }
    else{
        detail.style.display = "block"
    }
}
else if(change_input == "EARTH"){
    if( earth.style.display == "block"){
    earth.style.display = "none";
    }else if(detail.style.display == "block"){
        detail.style.display ="none";
    }
    else{
        earth.style.display = "block";
    }
}
else if(change_input == ""){
   alert("Input field should not be empty")
}
else{
    alert('Please enter "mercury" or "earth"')
}

}