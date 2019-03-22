
function JUSTEPRIX(){
var G = sessionStorage.getItem("argent");  //Je récupère G et le converti en valeur
var Gnum = parseInt(G);

	var M= Math.floor(1000*Math.random());
	console.log("M : "+M)

	var u = 5;
	var c = 0;
	var result = false;
		
		while (u > 0 && result == false){
			c=prompt("Selon vous, quelle est la valeur choisie aléatoirement entre 0 et 1000? ");
				
				if(c!=M){
					u = u-1;
					if (c<M) 
						alert("C'est plus que "+c+", il vous reste "+u+" coups");

					else if (c>M) 
						alert("C'est moins que "+c+", il vous reste "+u+" coups");     
					
						//rajouter le cas où on ne réussit pas en 5 coups
				
					}
				else{
					alert("Bien joué! Vous avez gagné!");
					result = true;
					}
			}
			



	if (u==0 && result == false){
		Gnum=Gnum/2;
	}
	else 
		Gnum=Gnum+500;
	document.getElementById("G").innerHTML = "G = "+Gnum+"€";
	G = Gnum;

	sessionStorage.setItem("argent",G) //Pour avoir la valeur de G on demandera la clé argent
	
}