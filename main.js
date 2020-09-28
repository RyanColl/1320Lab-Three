//Main.js
const readlineSync = require('readline-sync');
const labThree = require('./lab-three');
var y; var m; var d;

labThree.makeCalendar();

function getDayOfTheWeekForUserDate() {

    do {
        y = readlineSync.question(" Please enter a year [YYYY] ");
    if (y.length != 4) {
        console.log(' Please Enter a Number of 4 digits ');
    } 
    } while (y.length != 4);
    y = Number(y);

    do {
        m = readlineSync.question(" Please enter a month [MM] ");
    if (m.length != 2) {
        console.log(' Please Enter a Number of 2 digits ');
    } 
    } while (m.length != 2);
    m = Number(m);

    do {
        d = readlineSync.question(" Please enter a day [DD] ");
    if (d.length != 2) {
        console.log(' Please Enter a Number of 2 digits ');
    } 
    } while (d.length != 2);
    d = Number(d);
    console.log(' The day of the week on ' + m + '-' + d + '-' + y + ' is ' + labThree.getDayOfTheWeek(y, m, d) + '.');
}
getDayOfTheWeekForUserDate();