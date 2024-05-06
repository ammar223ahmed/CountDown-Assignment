var month = document.getElementById("month")
var days = document.getElementById("days")
var hours = document.getElementById("hours")
var minute = document.getElementById("minute")
var second = document.getElementById("second")


    
var interval = setInterval( function(){

    var now = new Date();
    var bd = new Date("6/16/2024");  
    var milleseconds = now.getTime();
    var bdMillseconds = bd.getTime();
    var diff = milleseconds - bdMillseconds;
       var montheid = Math.round(diff / 1000 / 60 / 60 / 24 / 30);
        month.innerText = montheid;
        
        var dayseid = Math.round(diff / 1000 / 60 / 60 / 24 );
        days.innerText = dayseid;
        var hourseid =  Math.round(diff / 1000 / 60 / 60);
        hours.innerText = hourseid;
        
        var minuteeid = Math.round(diff / 1000 / 60);
        minute.innerText = minuteeid;
        
        var secondeid = Math.round(diff / 1000);
        second.innerText = secondeid;
}, 1000);