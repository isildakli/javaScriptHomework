
window.onload = showTime();
function showTime(){
  var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
  var display = new Date();
  var day = display.getDay();
  document.getElementById("myClock").innerHTML = display.toLocaleTimeString() + ' ' + daylist[day] ;
  setTimeout(showTime, 1000); 
}