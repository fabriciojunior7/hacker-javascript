var elementos = 0;
var maxElementos = 5;
var pausa = 10;
var pular = 10;
var fonte = 1;
var mudarFonte = 120;
var glitch = false;
var mediaFrame = 120;
var segundosSonsAleatorios = 10;
var telaCheia = 20000;
var binario = false;

var cor1 = "rgb(0, 0, 0)";
var cor2 = "rgb(80, 0, 0)";
var cor3 = "rgb(0, 0, 80)";
var corAtual = 1;

//SONS
var erroXP, bateriaXP, desligarXP, exclamacaoXP, logonXP, inXP, outXP, infalhaXP;
var notificarXP, popupXP, reciclarXP;

function setup(){
	frameRate(120);
	maxElementos = floor(windowWidth/18);
	fonte = round(random(1, 15));
	//noCanvas();
	carregarSons();
}

function draw(){
	ajustes();
	if(document.body.scrollHeight > telaCheia){
		//location.reload();
		document.body.innerHTML = "";
		telaCheia = round(random(1000, 20000));
		if(logonXP.isLoaded() && !logonXP.isPlaying()){
			logonXP.play();
		}
	}
	if(frameCount % 120 == 0 || frameCount == 10){
		mediaFrame = round(frameRate());
	}
	if(frameCount % (mediaFrame*segundosSonsAleatorios) == 0){
		sonsAleatorios();
		segundosSonsAleatorios = round(random(5, 60));
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
	if(document.body.scrollHeight >= telaCheia*0.85 && desligarXP.isLoaded() && !desligarXP.isPlaying()){
		desligarXP.play();
	}
	if(glitch){
		bugar();
	}
	//document.write(String.fromCharCode(round(random(0, 255))));
	if(binario){
		document.write(String.fromCharCode(round(random(48, 49))));
		document.write(String.fromCharCode(round(random(48, 49))));
		document.write(String.fromCharCode(round(random(48, 49))));
	}
	else{
		document.write(String.fromCharCode(round(random(65, 90))));
		document.write(String.fromCharCode(round(random(97, 122))));
		document.write(String.fromCharCode(round(random(48, 57))));
	}
	elementos++;
}

function ajustes(){
	if(!glitch){
		switch(corAtual){
			case 1:
				document.body.style.color = "rgb(0, 255, 0)";
				document.body.style.backgroundColor = cor1;
				break;
			case 2:
				document.body.style.color = "rgb(255, 255, 0)";
				document.body.style.backgroundColor = cor2;
				break;
			case 3:
				document.body.style.color = "white";
				document.body.style.backgroundColor = cor3;
				break;
			case 4:
				document.body.style.color = "rgb(0, 255, 0)";
				document.body.style.backgroundColor = cor1;
				break;
		}
	}
	document.body.style.fontSize = "20";
	document.body.style.overflow = 'hidden';
	document.title = '--- SURPRESA! ---';
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
			//document.body.style.fontFamily = "Matura MT Script Capitals";
			break;
		case 7:
			//document.body.style.fontFamily = "Magneto";
			break;
		case 8:
			//document.body.style.fontFamily = "Kunstler Script";
			break;
		case 9:
			document.body.style.fontFamily = "Jokerman";
			break;
		case 10:
			//document.body.style.fontFamily = "Harrington";
			break;
		case 11:
			//document.body.style.fontFamily = "Harlow Solid";
			break;
		case 12:
			//document.body.style.fontFamily = "Edwardian Script ITC";
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
	corAtual = round(random(1, 4));
	switch(corAtual){
		case 1:
			document.body.style.backgroundColor = "rgb(0, 0, 100)";
			break;
		case 2:
			document.body.style.backgroundColor = "rgb(0, 100, 0)";
			break;
		case 3:
			document.body.style.backgroundColor = "rgb(100, 0, 0)";
			break;
		case 4:
			document.body.style.backgroundColor = "rgb(255, 255, 0)";
			break;
	}
	b = round(random(1, 10));
	if(b <= 2){
		binario = true;
	}
	else{
		binario = false;
	}
	sonsDeErro();
}

function sonsAleatorios(){
	som = round(random(1, 7));
	if(som == 1){
		if(exclamacaoXP.isLoaded() && !exclamacaoXP.isPlaying()){
			exclamacaoXP.play();
		}
	}
	else if(som == 2){
		if(inXP.isLoaded() && !inXP.isPlaying()){
			inXP.play();
		}
	}
	else if(som == 3){
		if(outXP.isLoaded() && !outXP.isPlaying()){
			outXP.play();
		}
	}
	else if(som == 4){
		if(infalhaXP.isLoaded() && !infalhaXP.isPlaying()){
			infalhaXP.play();
		}
	}
	else if(som == 5){
		if(notificarXP.isLoaded() && !notificarXP.isPlaying()){
			notificarXP.play();
		}
	}
	else if(som == 6){
		if(reciclarXP.isLoaded() && !reciclarXP.isPlaying()){
			reciclarXP.play();
		}
	}
	else if(som == 7){
		if(popupXP.isLoaded() && !popupXP.isPlaying()){
			popupXP.play();
		}
	}
}

function sonsDeErro(){
	som = round(random(1, 3));
	if(som == 1){
		if(erroXP.isLoaded() && !erroXP.isPlaying()){
			erroXP.play();
		}
	}
	else if(som == 2){
		if(bateriaXP.isLoaded() && !bateriaXP.isPlaying()){
			bateriaXP.play();
		}
	}
	else if(som == 3){
		if(exclamacaoXP.isLoaded() && !exclamacaoXP.isPlaying()){
			exclamacaoXP.play();
		}
	}
}

function carregarSons() {
	erroXP = loadSound("sons/erroXP.ogg");
	bateriaXP = loadSound("sons/bateria.ogg");
	desligarXP = loadSound("sons/desligar.ogg");
	exclamacaoXP = loadSound("sons/exclamacao.ogg");
	logonXP = loadSound("sons/logon.ogg");
	inXP = loadSound("sons/in.ogg");
	outXP = loadSound("sons/out.ogg");
	infalhaXP = loadSound("sons/infalha.ogg");
	notificarXP = loadSound("sons/notificar.ogg");
	popupXP = loadSound("sons/popup.ogg");
	reciclarXP = loadSound("sons/reciclar.ogg");
}