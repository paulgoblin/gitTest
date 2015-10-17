// takes 3 interger arguments (year, month, and day) and calculates how many days between that day and today
// accounts for leap days, according to the gregorian calendar

var age = function(y2, m2, d2){
    
    // allows us to mod negative numbers
    Number.prototype.mod = function(n) {
        return ((this%n)+n)%n;
    };
    
    a2 = y2.toString() + '-' + m2.toString() + '-' + d2.toString();
    
    var t1 = new Date(); //today's date
    var t2 = new Date(a2); //input date
    
    var d1 = t1.getDate();
    var m1 = t1.getMonth()+1;
    var y1 = t1.getFullYear();
    
    var timeBetween = function(d1, m1, y1, d2, m2, y2) {
        // find time between dates given *1 is older than *2
        var yearDif = y1 - y2;
        var monthDif = m1 - m2;
        if (monthDif < 0) {
            yearDif--;
            monthDif = monthDif.mod(12);
        }
        
        var leap = acct4leapDays(m1, y1, m2, y2);
        console.log(leap);
        // calculate the number of leap days to account for
        // also subract out 2 days for February
        
        var monEnd = acct4monthLen(m2);
        console.log(monEnd);
         // are there extra days at the end of the month on
        // the earlier date? return 0 or 1
        
        
        var dayDif = d1 - d2;

        if (yearDif === 0 && monthDif === 0){
            monEnd = 0;
        }
        
        dayDif = dayDif - leap + monEnd;
        
        if (dayDif < 0) {
            monthDif--;
            dayDif = dayDif.mod(30);
        }
        
         if (monthDif < 0) {
            yearDif--;
            monthDif = monthDif.mod(12);
        }
        
        return [yearDif, monthDif, dayDif];
        
    }
    
    var acct4monthLen = function(m){
        //if month m ends with a 31, return 1
        var dayArr = [1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1];
        return dayArr[m];
    }
    
    var acct4leapDays = function(m1, y1, m2, y2){
        // returns the number of days we subtract out of 
        // the calendar, as well as 2 days for Feb
        var leap = 0;
        
        if (m2 != 2) {
            return leap;
        }
        else if (y1 === y2 && m1 >3) {
            leap = 2 - isLeapYear(y1);
            return leap;
        }
        else {
            leap = leap + 2 - isLeapYear(y2);
        }
        return leap;
    }
    
    var isLeapYear = function(y) {
        // determine if y is leap year according to gregorian calendar
        c1 = (2000 - y).mod(4) === 0; //div by 4
        c2 = (2000 - y).mod(100) === 0; //div by 100
        c3 = (2000 - y).mod(400) === 0; //div by 400
        
        if (!c1) {
            return 0;
        }
        else if (!c2) {
            return 1;
        }
        else if (c3) {
            return 1;
        }
        else {
            return 0;
        }
    }
    
    // decide which date is later and implement the timeBetween function
    if (t1 > t2) {
        var dif = timeBetween(d1, m1, y1, d2, m2, y2);
    }
    else if (t1 < t2) {
        var dif = timeBetween(d2, m2, y2, d1, m1, y1);
    }
    else {
        dif = [0, 0, 0];
    }
        
    
    console.log(dif);
}

age(2017,11,16);
