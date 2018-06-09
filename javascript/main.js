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
var segundosFraseAleatoria = 20;
var porcentagem = 0;
var load = true;

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
	noCanvas();
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
		segundosSonsAleatorios = round(random(5, 30));
	}
	if(elementos > maxElementos && !load){
		document.write("<br>");
		elementos = 0;
	}
	if(frameCount % pausa == 0 && !load){
		document.write(" - ");
		pausa = round(random(1, 30));
		//frameRate(round(random(10, 120)));
	}
	if(frameCount % pular == 0 && !load){
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
	if(load){
		loading();
	}
	if(frameCount % (mediaFrame*segundosFraseAleatoria) == 0){
		fraseAleatoria();
		segundosFraseAleatoria = round(random(1, 10));
	}
	//document.write(String.fromCharCode(round(random(0, 255))));
	if(binario && !load){
		document.write(String.fromCharCode(round(random(48, 49))));
		document.write(String.fromCharCode(round(random(48, 49))));
		document.write(String.fromCharCode(round(random(48, 49))));
	}
	else if(!binario && !load){
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
			//document.body.style.fontFamily = "Jokerman";
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
	fraseAleatoria();
}

function sonsAleatorios(){
	som = round(random(1, 7));
	if(som == 1){
		sonsDeErro();
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

function loading(){
	if(porcentagem > 100){
		load = false;
		porcentagem = 0;
		fraseAleatoria();
	}
	else{
		document.body.innerHTML = "";
		document.write("<h3>", ".".repeat(porcentagem), " ", porcentagem, "%</h3>");
	}
	porcentagem++;
}

function fraseAleatoria(){
	chance = round(random(1, 10));
	if(chance <= 5){
		frase = round(random(1, 72));
		if(frase == 1){
			document.write("<center><h2>VIRUS DETECTED!</h2></center>");
		}
		else if(frase == 2){
			document.write("<br><font style='color: rgb(255, 255, 0);'>=== FABRICIO JUNIOR © ===</font><br>");
		}
		else if(frase == 3){
			document.write("<center><h2>HACK COMPLETE!</h2></center>");
		}
		else if(frase == 4){
			document.write("<center><h2>YOU WERE HACKED!</h2></center>");
		}
		else if(frase == 5){
			document.write("<center><h2>VOCÊ FOI HACKEADO!</h2></center>");
		}
		else if(frase == 6){
			document.write("<center><h2>VÍRUS DETECTADO!</h2></center>");
		}
		else if(frase == 7){
			document.write("<center><h2>VÍRUS BAIXADO COM SUCESSO!</h2></center>");
		}
		else if(frase == 8){
			document.write("<center><h2>VIRUS DOWNLOADED WITH SUCCESS!</h2></center>");
		}
		else if(frase == 9){
			document.write("<center><h2>VIRUS SUCCESS!</h2></center>");
		}
		else if(frase == 10){
			document.write("<center><h2>VIRUS NAME: 'Crazy_Brazilian123'</h2></center>");
		}
		else if(frase == 11){
			document.write("<center><h2>CORROMPENDO HD!</h2></center>");
		}
		else if(frase == 12){
			document.write("<center><h2>CORRUPTIN HD!</h2></center>");
		}
		else if(frase == 13){
			document.write("<center><h2>ACESSO NEGADO!</h2></center>");
		}
		else if(frase == 14){
			document.write("<center><h2>ACCESS DENIED!</h2></center>");
		}
		else if(frase == 15){
			document.write("<center><h2>ACCESSO PERMITIDO!</h2></center>");
		}
		else if(frase == 16){
			document.write("<center><h2>ACCESS PERMITTED!</h2></center>");
		}
		else if(frase == 17){
			document.write("<center><h2>NOME DO VÍRUS: 'Se_Deu_Mau123'</h2></center>");
		}
		else if(frase == 18){
			document.write("<center><h2>APAGANDO TODOS OS ARQUIVOS...</h2></center>");
		}
		else if(frase == 19){
			document.write("<center><h2>DELETING ALL FILES...</h2></center>");
		}
		else if(frase == 20){
			document.write("<center><h2>BAIXANDO IMAGENS...</h2></center>");
		}
		else if(frase == 21){
			document.write("<center><h2>DOWNLOADING IMAGES...</h2></center>");
		}
		else if(frase == 22){
			document.write("<center><h2>COMPLETO!</h2></center>");
		}
		else if(frase == 23){
			document.write("<center><h2>COMPLETE!</h2></center>");
		}
		else if(frase == 24){
			document.write("<center><h2>INCOMPLETO!</h2></center>");
		}
		else if(frase == 25){
			document.write("<center><h2>INCOMPLETE!</h2></center>");
		}
		else if(frase == 26){
			document.write("<center><h2 style='color: rgb(255, 0, 0);'>DANOS CRITICOS!!!</h2></center>");
		}
		else if(frase == 27){
			document.write("<center><h2 style='color: rgb(255, 0, 0);'>CRITICAL DAMAGE!!!</h2></center>");
		}
		else if(frase == 30){
			document.write("<center><h2>ALERTA DE INVASÃO!</h2></center>");
		}
		else if(frase == 31){
			document.write("<center><h2>INVASION ALERT!</h2></center>");
		}
		else if(frase == 32){
			document.write("<center><h2>ALERT!</h2></center>");
		}
		else if(frase == 33){
			document.write("<center><h2>WARNING!</h2></center>");
		}
		else if(frase <= 34 && frase <= 40){
			load = true;
		}
		else if(frase == 41){
			document.write("<center><h2>INICIALIZANDO...</h2></center>");
		}
		else if(frase == 42){
			document.write("<center><h2>LOCALIZANDO...</h2></center>");
		}
		else if(frase == 43){
			document.write("<center><h2>RASTREANDO...</h2></center>");
		}
		else if(frase == 44){
			document.write("<center><h2>INITIALIZING...</h2></center>");
		}
		else if(frase == 45){
			document.write("<center><h2>LOCATING...</h2></center>");
		}
		else if(frase == 46){
			document.write("<center><h2>TRACKING...</h2></center>");
		}
		else if(frase == 47){
			document.write("<center><h2>BUSCANDO...</h2></center>");
		}
		else if(frase == 48){
			document.write("<center><h2>PESQUISANDO...</h2></center>");
		}
		else if(frase == 49){
			document.write("<center><h2>SEARCHING...</h2></center>");
		}
		else if(frase == 50){
			document.write("<center><h2>ENCONTRADO!</h2></center>");
		}
		else if(frase == 51){
			document.write("<center><h2>NÃO ENCONTRADO!</h2></center>");
		}
		else if(frase == 52){
			document.write("<center><h2>FOUND!</h2></center>");
		}
		else if(frase == 53){
			document.write("<center><h2>NOT FOUND!</h2></center>");
		}
		else if(frase == 54){
			document.write("<center><h2>BLOQUEADO!</h2></center>");
		}
		else if(frase == 55){
			document.write("<center><h2>A PORTA ", round(random(12, 5555)), " FOI ABERTA!</h2></center>");
		}
		else if(frase == 56){
			document.write("<center><h2>INVADINDO!</h2></center>");
		}
		else if(frase == 57){
			document.write("<center><h2>QUEBRA DE FIREWALL!</h2></center>");
		}
		else if(frase == 59){
			document.write("<center><h2>ANTI-VÍRUS CORROMPIDO!</h2></center>");
		}
		else if(frase == 60){
			document.write("<center><h2>SOBRECARGA!!!</h2></center>");
		}
		else if(frase == 61){
			document.write("<center><h2>PANE NO SISTEMA!!!</h2></center>");
		}
		else if(frase == 62){
			document.write("<center><h2 style='color: rgb(255, 0, 0);'>ERRO!!!</h2></center>".repeat(round(random(1, 5))));
		}
		else if(frase == 63){
			document.write("<center><h2>AVISO DE SOBREAQUECIMENTO!!!</h2></center>");
		}
		else if(frase == 64){
			document.write("<center><h2>SOBREAQUECIMENTO!!!</h2></center>");
		}
		else if(frase == 65){
			document.write("<center><h2>DANOS IRREPARÁVEIS!!!</h2></center>");
		}
		else if(frase == 65){
			document.write("<center><h2>INSTALANDO...</h2></center>");
		}
		else if(frase == 66){
			document.write("<center><h2>INSTALLING...</h2></center>");
		}
		else if(frase == 67){
			document.write("<center><h2>DESINSTALANDO...</h2></center>");
		}
		else if(frase == 68){
			document.write("<center><h2>UNINSTALLING...</h2></center>");
		}
		else if(frase == 69){
			document.write("<center><h2>FALHA!</h2></center>".repeat(round(random(1, 5))));
		}
		else if(frase == 70){
			document.write("<center><h2>VIRUS!</h2></center>".repeat(round(random(1, 5))));
		}
		else if(frase == 71){
			document.write("<center><h2>VÍRUS!</h2></center>".repeat(round(random(1, 5))));
		}
		else if(frase == 72){
			document.write("<center><h2>ERROR 404 NOT FOUND</h2></center>");
		}
	}
}