var etages = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");

if (etages != null && etages != "") {
	for(var i=0; i<etages; i++) {
		var txt = "";
		for(var j=0; j<etages-i; j++) {
			txt = txt + " ";
		}
		for(var j=-1; j<i*2; j++) {
			txt = txt + "#";
		}
		console.log(txt);
	}
}




