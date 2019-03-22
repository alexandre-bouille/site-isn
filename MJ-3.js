var G = sessionStorage.getItem("argent");  //Je récupère G et le converti en valeur
var Gnum = parseInt(G);

var plateau = [ 
  [0,0,0],
  [0,0,0],
  [0,0,0]];
	
var fin=0	

	function afficher()
	{
  // affichage dze toutes les callses
  
  if (plateau[0][0] ==1)
	document.getElementById(0).style.backgroundColor = "black";
else if (plateau[0][0] ==2)
	document.getElementById(0).style.backgroundColor = "red";
else document.getElementById(0).style.backgroundColor = "white";
	
	 if (plateau[0][1] ==1)
	document.getElementById(1).style.backgroundColor = "black";
else if (plateau[0][1] ==2)
	document.getElementById(1).style.backgroundColor = "red";
else document.getElementById(1).style.backgroundColor = "white";

 if (plateau[0][2] ==1)
	document.getElementById(2).style.backgroundColor = "black";
else if (plateau[0][2] ==2)
	document.getElementById(2).style.backgroundColor = "red";
else document.getElementById(2).style.backgroundColor = "white";

 if (plateau[1][0] ==1)
	document.getElementById(3).style.backgroundColor = "black";
else if (plateau[1][0] ==2)
	document.getElementById(3).style.backgroundColor = "red";
else document.getElementById(3).style.backgroundColor = "white";

 if (plateau[1][1] ==1)
	document.getElementById(4).style.backgroundColor = "black";
else if (plateau[1][1] ==2)
	document.getElementById(4).style.backgroundColor = "red";
else document.getElementById(4).style.backgroundColor = "white";

 if (plateau[1][2] ==1)
	document.getElementById(5).style.backgroundColor = "black";
else if (plateau[1][2] ==2)
	document.getElementById(5).style.backgroundColor = "red";
else document.getElementById(5).style.backgroundColor = "white";

 if (plateau[2][0] ==1)
	document.getElementById(6).style.backgroundColor = "black";
else if (plateau[2][0] ==2)
	document.getElementById(6).style.backgroundColor = "red";
else document.getElementById(6).style.backgroundColor = "white";

 if (plateau[2][1] ==1)
	document.getElementById(7).style.backgroundColor = "black";
else if (plateau[2][1] ==2)
	document.getElementById(7).style.backgroundColor = "red";
else document.getElementById(7).style.backgroundColor = "white";

 if (plateau[2][2] ==1)
	document.getElementById(8).style.backgroundColor = "black";
else if (plateau[2][2] ==2)
	document.getElementById(8).style.backgroundColor = "red";
else document.getElementById(8).style.backgroundColor = "white";
	}

	function IA()
{
//Coup IA
// choix d'une case aléatoire
var F=0
while (F==0)
{	
	var col = Math.floor(3*Math.random())
	var lig = Math.floor(3*Math.random())
	
	if (plateau[lig][col] == 1 || plateau[lig][col] == 2)
		F=0;
	else 
		F=1;
		
	console.log("case testee par ia col ",col, "lig ",lig );
			
}		
plateau[lig][col] = 2;	
console.log(plateau.join('\n'));
	
afficher();
VictoireIA();

		
}
	
	function Victoirehumain()
{
if (plateau[0][0] ==1 & plateau[0][1] ==1 & plateau[0][2] ==1){
	alert('vous avez gagné');
	Gnum=Gnum+12;
	document.location.reload(false);
	}
if (plateau[0][0] ==1 & plateau[1][0] ==1 & plateau[2][0] ==1){
	alert('vous avez gagné');
	Gnum=Gnum+12;
	document.location.reload(false);
	}
if (plateau[0][0] ==1 & plateau[1][1] ==1 & plateau[2][2] ==1){
	alert('vous avez gagné');
	Gnum=Gnum+12;
	document.location.reload(false);
	}
if (plateau[0][1] ==1 & plateau[1][1] ==1 & plateau[2][1] ==1){
	alert('vous avez gagné');
	Gnum=Gnum+12;
	document.location.reload(false);
	}
if (plateau[0][2] ==1 & plateau[1][2] ==1 & plateau[2][2] ==1){
	alert('vous avez gagné');
	Gnum=Gnum+12;
	document.location.reload(false);
	}
if (plateau[1][0] ==1 & plateau[1][1] ==1 & plateau[1][2] ==1){
	alert('vous avez gagné');
	Gnum=Gnum+12;
	document.location.reload(false);
	}
if (plateau[2][0] ==1 & plateau[2][1] ==1 & plateau[2][2] ==1){
	alert('vous avez gagné');
	Gnum=Gnum+12;
	document.location.reload(false);
	}
if (plateau[0][2] ==1 & plateau[1][1] ==1 & plateau[2][0] ==1){
	alert('vous avez gagné');
	Gnum=Gnum+12;
	document.location.reload(false);
	}
}

function VictoireIA()
{
if (plateau[0][0] ==2 & plateau[0][1] ==2 & plateau[0][2] ==2){
	alert('vous avez perdu');
	Gnum=Gnum/2;
	document.location.reload(false);
	}

if (plateau[0][0] ==2 & plateau[1][0] ==2 & plateau[2][0] ==2){
	alert('vous avez perdu');
	Gnum=Gnum/2;
	document.location.reload(false);
	}

if (plateau[0][0] ==2& plateau[1][1] ==2& plateau[2][2] ==2){
	alert('vous avez perdu');
	Gnum=Gnum/2;
	document.location.reload(false);
	}

if (plateau[0][1] ==2& plateau[1][1] ==2& plateau[2][1] ==2){
	alert('vous avez perdu');
	Gnum=Gnum/2;
	document.location.reload(false);
	}

if (plateau[0][2] ==2 & plateau[1][2] ==2 & plateau[2][2] ==2){
	alert('vous avez perdu');
	Gnum=Gnum/2;
	document.location.reload(false);
	}

if (plateau[1][0] ==2 & plateau[1][1] ==2 & plateau[1][2] ==2){
	alert('vous avez perdu');
	Gnum=Gnum/2;
	document.location.reload(false);
	}

if (plateau[2][0] ==2 & plateau[2][1] ==2 & plateau[2][2] ==2){
	alert('vous avez perdu');
	Gnum=Gnum/2;
	document.location.reload(false);
	}

if (plateau[0][2] ==2 & plateau[1][1] ==2 & plateau[2][0] ==2){
	alert('vous avez perdu');
	Gnum=Gnum/2;
	document.location.reload(false);
	}
	
}
	
  function ChCase(Nb)
{
	var Z=0
	
//Coup humain	
	fin=fin+2;
if (fin < 9){	
	while (Z==0)
	{	
		var col = Nb % 3;
		var lig = Math.floor(Nb / 3);
		
		if (plateau[lig][col] == 1 || plateau[lig][col] == 2){
			Z=0;
			Nb=undefined;
			f=f-2;
		}
		else 
			Z=1;
	}
	
	plateau[lig][col] = 1;	
	console.log(plateau.join('\n'));
	// alert("yes");

	afficher();
	Victoirehumain();
	IA();
	
}
else {
	alert("Egalité");
	document.location.reload(false);
	}
document.getElementById("G").innerHTML = "G = "+Gnum+"€";
	G = Gnum;

	sessionStorage.setItem("argent",G) //Pour avoir la valeur de G on demandera la clé argent


}