
// start class will trigger the 20 second timer //
// click class has to count how many times its clicked //
// # of clicks gets displayed in the "display" span //

var bitcoins = document.getElementsByClass('click')


for(var i = 0; i < bitcoins.length; i++) {
  bitcoins[i].addEventListener("click", function() {
    alert("You clicked");