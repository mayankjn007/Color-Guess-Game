var number = 6;
var colors = generateRandomColors(number);
var squares = document.querySelectorAll(".square");
var colorSelect = document.querySelector("#colorSelect");
var messageColor = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#resetBtn");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
var pickedColor = pickColor();

easyBtn.addEventListener("click",function(){
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	number = 3;
	colors = generateRandomColors(number);
	pickedColor = pickColor();
	// change color display
	colorSelect.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++) {
	 	if(colors[i]){
	 		squares[i].style.backgroundColor = colors[i];
	 	}else{
	 		 squares[i].style.display = "none";
	 	}
 	}
 	h1.style.backgroundColor = "steelblue";
 	messageColor.textContent = '';
});
hardBtn.addEventListener("click",function(){
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	number = 6;
	colors = generateRandomColors(number);
	pickedColor = pickColor();
	// change color display
	colorSelect.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++) {
 		squares[i].style.backgroundColor = colors[i];	
	 	 squares[i].style.display = "block"; 	
 	}
 	h1.style.backgroundColor = "steelblue";
 	messageColor.textContent = '';
});



colorSelect.textContent=pickedColor;

resetButton.addEventListener("click", function(){
	// generate all new colours
	 colors = generateRandomColors(number);
	// pick new random color from array
	pickedColor = pickColor();
	// change color display
	colorSelect.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++) {
 	squares[i].style.backgroundColor = colors[i];
 	}
 	h1.style.backgroundColor = "steelblue";
 	messageColor.textContent = '';
 	this.textContent="New colors";
});

for (var i = 0; i < squares.length; i++) {
 	squares[i].style.backgroundColor = colors[i];

 	squares[i].addEventListener("click",function () {
 		var clickedColor = this.style.backgroundColor;
 		console.log(clickedColor, pickedColor);
 		if (clickedColor === pickedColor) {
 			messageColor.textContent="Correct";
 			changeColors(clickedColor);
 			resetButton.textContent="Play Again?"
 		}
 		else
 		{
 			messageColor.textContent="Try Again";
 			this.style.background = "#232323";
 		}
 	});
} 
function changeColors(color){
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color;
	}
	h1.style.backgroundColor = color;
}
function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}
function generateRandomColors(num){
	var a = [];
	for (var i = 0; i < num; i++) {
		a[i] = randomColor();
	}
	return a;
}
function randomColor(){
	var red = Math.floor(Math.random() * 256);
	
	var green = Math.floor(Math.random() * 256);
	
	var blue = Math.floor(Math.random() * 256);
	
	return "rgb(" + red + ", " + blue + ", " + green + ")";
}
	