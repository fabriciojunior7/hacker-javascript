var elementos = 0;
var maxElementos = 5;
var pausa = 10;
var pular = 10;
var fonte = 1;
var mudarFonte = 120;
var glitch = false;
var mediaFrame = 120;
var telaCheia = 20000;

function setup(){
	frameRate(120);
	maxElementos = floor(windowWidth/18);
	fonte = round(random(1, 15));
	noCanvas();
}

function draw(){
	if(document.body.scrollHeight > telaCheia){
		//location.reload();
		document.body.innerHTML = "";
		telaCheia = round(random(1000, 20000));
	}
	ajustes();
	if(frameCount % 120 == 0 || frameCount == 10){
		mediaFrame = round(frameRate());
	}
	if(elementos > maxElementos){
		document.write("<br>");
		elementos = 0;
	}
	if(frameCount % pausa == 0){
		document.write(" - ");
		pausa = round(random(1, 30));
		//frameRate(round(random(10, 120)));
	}
	if(frameCount % pular == 0){
		document.write("<br>");
		pular = round(random(1, maxElementos));
		//frameRate(round(random(10, 120)));
	}
	if(frameCount % mediaFrame == 0){
		r = round(random(0, 10));
		if(r == 0){
			glitch = true;
		}
		else{
			glitch = false;
		}
	}
	if(glitch){
		bugar();
	}
	//document.write(String.fromCharCode(round(random(0, 255))));
	document.write(String.fromCharCode(round(random(65, 90))));
	document.write(String.fromCharCode(round(random(97, 122))));
	document.write(String.fromCharCode(round(random(48, 57))));
	elementos++;
}

function ajustes(){
	document.body.style.backgroundColor = "black";
	document.body.style.color = "rgb(0, 255, 0)";
	document.body.style.fontSize = "20";
	document.body.style.overflow = 'hidden';
	window.scrollTo(0, document.body.scrollHeight);
	if(frameCount % mudarFonte == 0){
		fonte = round(random(1, 15));
		maxElementos = round(random(1, windowWidth/18));
		mudarFonte = round(random(1, 240));
	}
	switch(fonte){
		case 1:
			document.body.style.fontFamily = "Symbol";
			break;
		case 2:
			document.body.style.fontFamily = "Papyrus";
			break;
		case 3:
			document.body.style.fontFamily = "Old English Text MT";
			break;
		case 4:
			document.body.style.fontFamily = "OCR A";
			break;
		case 5:
			document.body.style.fontFamily = "MT Extra";
			break;
		case 6:
			document.body.style.fontFamily = "Matura MT Script Capitals";
			break;
		case 7:
			document.body.style.fontFamily = "Magneto";
			break;
		case 8:
			document.body.style.fontFamily = "Kunstler Script";
			break;
		case 9:
			document.body.style.fontFamily = "Jokerman";
			break;
		case 10:
			document.body.style.fontFamily = "Harrington";
			break;
		case 11:
			document.body.style.fontFamily = "Harlow Solid";
			break;
		case 12:
			document.body.style.fontFamily = "Edwardian Script ITC";
			break;
		case 13:
			document.body.style.fontFamily = "Chiller";
			break;
		case 14:
			document.body.style.fontFamily = "Century Gothic";
			break;
		case 15:
			document.body.style.fontFamily = "Agency FB";
			break;
	}
}

function bugar(){
	fonte = round(random(1, 15));
}