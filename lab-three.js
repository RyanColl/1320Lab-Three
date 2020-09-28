var year; // Main parameters
var month; // Main parameters
var day;  // Main parameters
var x1; var x2; var x3; var x4; var x5; var x6; var xx; // simple variables used for passing numbers forward
var s1; var s2; var s3; var s4; var s5; var s6;  // s variables represent the steps
var daysoftheweek = ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']; 

var d31 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 
    18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]; // creating array for days in a month

var d30 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, // creating array for days in a month
      18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];

var d29 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, // creating array for days in a month
      18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29];

var jan = [d31]; var jul = [d31];
var feb = [d29]; var aug = [d31];
var mar = [d31]; var sep = [d30]; 
var apr = [d30]; var oct = [d31]; 
var may = [d31]; var nov = [d30]; 
var jun = [d30]; var dec = [d31]; 

var m1 = [jan, feb, mar, apr, may, jun, jul, aug, sep, oct, nov, dec]; // creating an array for months

function isLeapYear(year) { // function returns true if leap year, false if not
    if (year % 4 == 0) {
        if ((year % 100 == 0) && (year % 400 != 0)) {
            return false;
        }
        return true;
    } else {
        return false;
    }
}

function getDayOfTheWeek(year, month, day) { // function follows steps 1 to 6, variables 
    x1 = isLeapYear(year);                     // have been listed for clarification
    x2 = year % 100;
    s1 = Math.trunc(x2 / 12); // truncating removes decimals and returns the whole number, no rounding
    s2 = x2 - s1 * 12;
    s3 = Math.trunc(s2 / 4);
    s4 = day;
    xx = month.toString();
      if ((xx.substring(0, 3) == 'Jan' || xx == '1' || xx == '01') && x1 == false){ // checks for leap year
        s5 = 1;
    } if ((xx.substring(0, 3) == 'Jan' || xx == '1' || xx == '01') && x1 == true) {
        s5 = 0;
    } if ((xx.substring(0, 3) == 'Feb' || xx == '2' || xx == '02') && x1 == false){
        s5 = 4;
    } if ((xx.substring(0, 3) == 'Feb' || xx == '2' || xx == '02') && x1 == true) {
        s5 = 3;
    } if (xx.substring(0, 3) == 'Mar' || xx == '3' || xx == '03'){
        s5 = 4;
    } if (xx.substring(0, 3) == 'Apr' || xx == '4' || xx == '04'){
        s5 = 0;
    } if (xx.substring(0, 3) == 'May' || xx == '5' || xx == '05'){
        s5 = 2;
    } if (xx.substring(0, 3) == 'Jun' || xx == '6' || xx == '06'){
        s5 = 5;
    } if (xx.substring(0, 3) == 'Jul' || xx == '7' || xx == '07'){
        s5 = 0;
    } if (xx.substring(0, 3) == 'Aug' || xx == '8' || xx == '08'){
        s5 = 3;
    } if (xx.substring(0, 3) == 'Sep' || xx == '9' || xx == '09'){
        s5 = 6;
    } if (xx.substring(0, 3) == 'Oct' || xx == '10'){
        s5 = 1;
    } if (xx.substring(0, 3) == 'Nov' || xx == '11'){
        s5 = 4;
    } if (xx.substring(0, 3) == 'Dec' || xx == '12'){
        s5 = 6;
    } 
    x3 = Math.trunc(year / 100); 
      if (x3 == 16 || x3 == 20){
        s5 = s5 + 6;
    } if (x3 == 17 || x3 == 21){
        s5 = s5 + 4;
    } if (x3 == 18){
        s5 = s5 + 2;
    }
    s6 = s1 + s2 + s3 + s4 + s5;
    x4 = s6 % 7;
    return daysoftheweek[x4];
}

var dayofweek;
function makeCalendar(){
    for (let x5 = 0; x5 < m1.length; x5++) {
        for (let x6 = 0; x6 < m1[x5][0].length; x6++) {
        dayofweek = getDayOfTheWeek(2020, (x5 + 1), m1[x5][0][x6]);
        console.log((x5 + 1) + '-' + (x6 + 1) + '-' + 2020 + ' is a ' + dayofweek + '.');
        }
    }
}

module.exports = {getDayOfTheWeek, isLeapYear, makeCalendar};