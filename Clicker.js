
var G = sessionStorage.getItem("argent");  //Je récupère G et le converti en valeur
var Gnum = parseInt(G);
function AFF(){
	Gnum= Gnum+1;
	

	document.getElementById("G").innerHTML = "G = "+Gnum+"€";
	G = Gnum;

	sessionStorage.setItem("argent",G) //Pour avoir la valeur de G on demandera la clé argent
}

