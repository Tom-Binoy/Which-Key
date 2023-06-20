canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

synth = window.speechSynthesis
key ="";

img_width = 300;
img_height = 100;

var img_image;

img_x = 100;
img_y = 100;


img_image = "bgi.jpg";
function add() {
	console.log("add function loaded");
	img_imgTag = new Image(); //defining a variable with a new image
	img_imgTag.onload = uploadimg; // setting a function, onloading this variable
	img_imgTag.src = img_image;   // load image
}

function uploadimg() {
	console.log("uploadimg loaded")
	var body = document.body;
    body.style.backgroundImage = "url('"+img_image+"')";
	
	timer()
}

//Write a code to grab the key-pressed event
window.addEventListener("keydown",my_keydown);

function my_keydown(e){
 console.log('my_keydown');

	keyPressed = e.keyCode;
	console.log(keyPressed);
	
		if((keyPressed >=97 && keyPressed<=122)|| (keyPressed >=65 && keyPressed<=90)){
		alphabetkey()
		}
		else if(keyPressed >=48 && keyPressed<=57){
			console.log('no. key selected')
			numberkey()
		}
		else if(keyPressed >=37 && keyPressed<=40){
			console.log('arrow key selected')
			arrowkey()
		}
		else if(keyPressed == 17 || keyPressed == 18 || keyPressed == 27){
			console.log('special keyselected')
			specialkey()
		}
	    else{
		console.log('other key selected')
		otherkey();
		}
}

function alphabetkey()
{	console.log('alphabet key received')
	//upload respective image with the message. 
	img_image="alphabet key.jpg";
	key = "Alphabet Key"
	add();
}
function numberkey()
{	console.log('no. key received')
	img_image="no.png";
	key = "number Key"
	add();
}
function arrowkey()
{	console.log('arrow key received')
	img_image="arrow.png";
	key = "arrow Key"
	add();
}
function specialkey()
{	console.log('special key received')
  	img_image="special.png";
	  key = "special Key"
	add();	
}
function otherkey()
{	console.log('other key received')
	img_image="other.png";
	key = "in other Key"
	add();
}

function timer(){
	key1 = "The Key you pressed is "+key
	utter = new SpeechSynthesisUtterance(key1)
	synth.speak(utter)

	setTimeout(function(){
		var body = document.body;
    body.style.backgroundImage = "url('bgi.jpg')";
	}, 5000);
}