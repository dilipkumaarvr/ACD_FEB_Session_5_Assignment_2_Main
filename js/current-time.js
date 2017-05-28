function myFunction() {
var currentdate = new Date(); 
var datetime = currentdate.getHours() + ":" + currentdate.getMinutes();
document.getElementById("demo").innerHTML = datetime;
console.log(datetime);
alert(datetime);
}
