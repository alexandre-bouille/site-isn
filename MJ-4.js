var G = sessionStorage.getItem("argent");  //Je récupère G et le converti en valeur
var Gnum = parseInt(G);

function PILEOUFACE(){
	
	var S= Math.floor (10*Math.random());

	switch(S){
	case 0: alert("Pile, vous gagnez")
	Gnum = Gnum + 50;
	break;
	case 1: alert("Face, vous perdez")
	Gnum = Gnum - 50;
	break;
	case 2: alert("Pile, vous gagnez")
	Gnum = Gnum + 50;
	break;
	case 3: alert("Face, vous perdez")
	Gnum = Gnum - 50;
	break;
	case 4: alert("Pile, vous gagnez")
	Gnum = Gnum + 50;
	break;
	case 5: alert("Face, vous perdez")
	Gnum = Gnum - 50;
	break;
	case 6: alert("Pile, vous gagnez")
	Gnum = Gnum + 50;
	break;
	case 7: alert("Face, vous perdez")
	Gnum = Gnum - 50;
	break;
	case 8: alert("Pile, vous gagnez")
	Gnum = Gnum + 50;
	break;
	case 9: alert("Face, vous perdez")
	Gnum = Gnum - 50;
	break;
	default:alert("Il y a eu un problème avec le lancer");
}
	document.getElementById("G").innerHTML = "G = "+Gnum+"€";
	G = Gnum;

	sessionStorage.setItem("argent",G) //Pour avoir la valeur de G on demandera la clé argent
}

