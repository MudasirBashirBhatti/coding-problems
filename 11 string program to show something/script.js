
    function hello(){
    let x = document.getElementById("name").value;
    let nameInput = Boolean(x);

    let y = document.getElementById("mail").value;
    let mailInput = Boolean(y);

    let z = document.getElementById("pswd").value;
    let pswdInput = Boolean(z)

    let outPut = "Welcome " + x + "!" 
    if(nameInput == true && mailInput==true && pswdInput==true){
        alert(outPut)
    }

    else if(nameInput == true && mailInput==false && pswdInput==false){
        alert("Please Enter \"Email\" and \"Password\" ")
    }
    
    else if(nameInput == false && mailInput==true && pswdInput==false){
        alert("Please Enter \"Name\" and \"Password\" ")
    }
    
    else if(nameInput == false && mailInput==false && pswdInput==true){
        alert("Please Enter \" Name\" and \"Email\" ")
    }
    
    else if(nameInput == true && mailInput==true && pswdInput==false){
        alert("Please Enter your \" Password\" ")
    }
    
    else if(nameInput == true && mailInput==false && pswdInput==true){
        alert("Please Enter your \" Email\" ")
    }
    
    else if(nameInput == false && mailInput==true && pswdInput==true){
        alert("Please Enter your \" Name\" ")
    }

    else{
        alert("Please fill the form")
    }
    

    // document.getElementById("outPut").innerHTML = y;            //output example 1
    // alert(y);               //output example 2

}

