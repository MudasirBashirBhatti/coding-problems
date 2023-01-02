function printFunc(){
window.print()
}


function particularDiv(){
    let fullBody = document.getElementById("body").innerHTML;
    let div = document.getElementById('para').innerHTML;
    document.getElementById('body').innerHTML = div;         //this line will swap para to body.
    window.print();//the browser will consider that it printing the body tag but as it is replaced with para so the para text will be print.
    document.getElementById('body').innerHTML = fullBody; //if we do not write this line then the only para text will appear. 
}