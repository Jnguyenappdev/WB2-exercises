var time = 10 //0-23
var currenHour = time
var greeting 

if ( currenHour < 10 ){
    greeting = "Good Morning!";
} else if (currenHour < 17 ){
    greeting = "Good day!";
} else if (currenHour <= 23) {
    greeting = "Good evening!";
}
 console.log( greeting)