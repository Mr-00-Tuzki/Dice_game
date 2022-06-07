var p1=prompt("Enter Player 1 Name:");

var p2=prompt("Enter Player 2 Name:");

document.querySelectorAll("p")[0].innerHTML=p1;

document.querySelectorAll("p")[1].innerHTML=p2;

var randomNumber1=Math.floor((Math.random()*6)+1);

var randomImageSource1= "images/dice"+randomNumber1+".png";

var image1=document.querySelectorAll("img")[0].setAttribute("src",randomImageSource1);


var randomNumber2=Math.floor((Math.random()*6)+1);

var randomImageSource2= "images/dice"+randomNumber2+".png";

var image2=document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);

if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML="  🚩 "+p1+ " Wins";
}
else if(randomNumber1<randomNumber2){
  document.querySelector("h1").innerHTML= ""+p2+" Wins  🚩 ";
}
else{
  document.querySelector("h1").innerHTML="Draw 😉";
}
