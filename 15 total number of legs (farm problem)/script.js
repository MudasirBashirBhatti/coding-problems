function calculate(){
    var chickens = parseInt(document.myForm.Chickens.value);
    var goats = parseInt(document.myForm.goats.value);
    var cows = parseInt(document.myForm.cows.value);

    document.getElementById('chick_legs').innerHTML = "Legs of Chickens are : " + chickens * 2;

    document.getElementById('goat_legs').innerHTML ="Legs of Goats are : " + goats * 4;

    document.getElementById('cow_legs').innerHTML = "Legs of Cows are : " + cows * 4;

    document.getElementById('total_legs').innerHTML ="Total number of legs in plateform : " + (chickens*2 + goats*4 + cows*4);
}