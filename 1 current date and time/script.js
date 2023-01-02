//<----------------------------------------------- Time ---------------------------------------->

setInterval(timeFunc,1000)
function timeFunc(){
let x = new Date()
let hrs = x.getHours()
let minuts = x.getMinutes()
let seconds = x.getSeconds()
if (hrs < 10){
    hrs = "0" + hrs
    
}

if (minuts <10){
    minuts = "0" + minuts
}
if (seconds < 10){
    seconds = "0" + seconds

}


if(hrs < 12){
    document.getElementById("currentTime").innerHTML = hrs + " : " + minuts + " : " + seconds + " PM"
}else{
    document.getElementById("currentTime").innerHTML = hrs + " : " + minuts + " : " + seconds + "AM"
}

}


//<----------------------------------------------- Date ---------------------------------------->
    let y = new Date()
    let month = y.getMonth()
    let year = y.getFullYear()
    let day = y.getDate()

    if (day < 10){
        day = "0" + day
    }

    // let thisMonth = [,"FEBRUARY","MARCH","APRIL","MAY","JUN","JULY","AUGUST","SEPTEMBER","OCTOBER","NOVEMBER","DECEMBER"]
    switch (month) {
        case 0:  
        month =   "January"        
        break;

        case 1: 
        month = "February"
        break;

        case 2:
            month = "March"
        break

        case 3:
            month = "April"
        break;

        case 4:
            month = "May"
        break;

        case 5: 
            month = "June"
        break;

        case 6:
            month = "July"
        break;

        case 7:
            month = "August"
        break;

        case 8:
            month = "September"
        break;

        case 9:
            month = "October"
        break;

        case 10:
            month = "November"
        break;

        case 11:
            month = "December"
        break;
    }

    document.getElementById("currentDate").innerHTML = day + " / " + month + " / " + year




//<----------------------------------------------- current Day ---------------------------------------->
let cDay = new Date().getDay()
switch (cDay) {
    case 0:  
    cDay =   "Sunday"        
    break;

    case 1: 
    cDay = "Monday"
    break;

    case 2:
    cDay = "Tuesday"
    break

    case 3:
    cDay = "Wednesday"
    break;

    case 4:
    cDay = "Thursday"
    break;

    case 5: 
    cDay = "Friday"

    case 6:
    cDay = "Saturday"
}

document.getElementById("Day").innerHTML = cDay




















