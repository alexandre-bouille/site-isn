var G = sessionStorage.getItem("argent");  //Je récupère G et le converti en valeur
var Gnum = parseInt(G);

  // definir le plateau 
var plateau = [ 
  [0,0,0,0,0,0],
  [0,0,0,0,0,0],
  [0,0,0,0,0,0],
  [0,0,0,0,0,0],
  [0,0,0,0,0,0],
  [0,0,0,0,0,0]];
   
   // Lanccement du site + mise en place des case de maniere aléatoire
window.onload = AleaCase();
var one=0
var two=0
var O=0
var T=0
var w=0
function AleaCase()
                      //pas de 1 et on met la valeur 2
	{
		for(x=0;x<11;x++){
			var C=(Math.floor(Math.random()*6));
			var L=(Math.floor(Math.random()*6));
			plateau[L][C]= 2;
		}
	NbCase();
	O=one;
	T=two;
	} 
	
	// Colonne et Ligne + scan
	function NbCase ()
	{  
	one=0;
	two=0;
		for(i=0;i<6;i++){
			for(j=0;j<6;j++){
				if (plateau[j][i] ==1)
					one=one+1;	
				else if (plateau[j][i] ==2)
					two=two+1;
				
				
	   }

   }
	
	}
	
	
	
	//Bouton start et anti triche
	function stato()
	{
		afficher();
		NbCase();
			if (w>0){
				alert ('ca triche');
				Gnum=0
				document.getElementById("G").innerHTML = "G = "+Gnum+"€";
				G = Gnum;
				sessionStorage.setItem("argent",G);
				document.location.reload(false); }
			else setTimeout(Fin,3000);
	}
	function Fin() 
	{
		NbCase ();
		O=O-one;
		T=two-T;
		alert("Vous avez louper " +T+ " cases !");
		if (T > 0){
			Gnum=Gnum-(7*T);
			document.getElementById("G").innerHTML = "G = "+Gnum+"€";
			G = Gnum;
			sessionStorage.setItem("argent",G);
			
		}
		else 
				Gnum=Gnum+50
			document.getElementById("G").innerHTML = "G = "+Gnum+"€";
			G = Gnum;
			sessionStorage.setItem("argent",G);
			;

		document.location.reload(false);
		
	}
	function afficher()
	{
		
  // Scan + choix de la couleur pour la valeur
 
   for(i=0;i<6;i++){
	   for(j=0;j<6;j++){
		   if (plateau[j][i] ==1)
				document.getElementById(i+j*6).style.backgroundColor = "black";
			else if (plateau[j][i] ==2)
				document.getElementById(i+j*6).style.backgroundColor = "red";
			else 
				document.getElementById(i+j*6).style.backgroundColor = "white";
	   }
	   
   }
}
  function ChCase(Nb) // lecture et ajout de la valeur apres le clic
{
		var col = Nb % 6;
		var lig = Math.floor(Nb / 6);
		w=w+1;
		plateau[lig][col]= 1;
		afficher();
		console.log(plateau.join('\n'));
}

	 //Pour avoir la valeur de G on demandera la clé argent