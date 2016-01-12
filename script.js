
// start class will trigger the 20 second timer //
// click class has to count how many times its clicked //
// # of clicks gets displayed in the "display" span //

var bitcoins = document.getElementsByClassName('click');
var startGame = document.getElementById('start');
var gameTimeout;
var score = 0;
startGame.addEventListener("click", function () {
	for(var i = 0; i < bitcoins.length; i++) {
		bitcoins[i].addEventListener("click", function () {
			if(this.getAttribute("data-clicked") !== "true") {
				score++;
				this.setAttribute("data-clicked", "true")
			}
		});
	}
	gameTimeout = setTimeout(function() {
		result.innerHTML=score;
	}, 20000);
});