/* 12 hour = 360deg
 1 hour = 30 deg
 h hours = 30hh+ m/2   => HOURS

 60 min = 30 deg
 1 min = 30/60 = 1/2 
 m min = (1/2)m

 60 min = 360 deg
 1 min = 360/60 = 6 deg
 m min = 6m          => MINUTES

 60 sec = 360 deg
 1 sec = 6 deg
 s sec = 6s          => SECONDS
 */

 let hr = document.getElementById('hour');
 let min = document.getElementById('min');
 let sec = document.getElementById('sec');

 function displayTime()
 {
    let date = new Date();

    //Getting hour, min, sec from date
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    let hRotation = 30*hh + mm/2;
    let mRotation = 6*mm;
    let sRotation = 6*ss;

    hr.style.transform = `rotate(${hRotation}deg)`;
    min.style.transform = `rotate(${mRotation}deg)`;
    sec.style.transform = `rotate(${sRotation}deg)`;
 }
 setInterval(displayTime,1000);