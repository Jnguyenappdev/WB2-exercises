// displays both the smallest of thre numbers and then the largest of three numbers
var a = 1
var b = 2
var c = 2

if ( a < b && b < c){
    console.log("The smallest number is " + a );
    console.log("The largest number is " + c );
} else if (a > b && b > c ) {
    console.log( "The smallest number is " + c);
    console.log( "The largest number is " + a);
} else if ( a > b && b < c && a > c) {
    console.log( "The smallest number is " + b);
    console.log( "The largest number is " + a);
} else if ( a < b && b > c && a < c){
    console.log("The smallest number is " + a );
    console.log("The largest number is " + b );
} else if ( a > b && b < c && a < c) {
    console.log("The smallest numer is " + b);
    console.log("The largest number is " + c);
} else if ( a < b && b > c && a > c) {
    console.log("The smallest number is " + c);
    console.log("The largest number is " + b);
} else if ( a == b && b > c){
    console.log( "The smallest number is " + c );
    console.log(" The largest number " + b);
} else if ( a == b && b < c){
    console.log( "The smallest number is " + a );
    console.log(" The largest number " + c);
} else if ( a == c && c > b ) {
    console.log("The smallest number is " + b);
    console.log("The largest number is " + c);
} else if ( a == c && c < b ) {
    console.log("The smallest number is " + c);
    console.log("The largest number is " + b);
} else if ( b == c && a > c ){
    console.log("The smallest number is " + c);
    console.log("The largest number is " + a);
} else if ( b == c && a < c ){
    console.log("The smallest number is " + a);
    console.log("The largest number is " + c);
} else if ( a == c && b == c){
    console.log("There is no larger number or smaller number")
}