//Тоглогчийн ээлжийг хадгалах
var whoseTurn = 1;


//Тоглогчийн оноог хадгалах
var p1TotalScore = 0;


//p2 total score
var p2TotalScore = 0;


//Тоглогчийн ээжлийн оноог хадгалах
var roundScore = 0;

//dice object in DOM ()
var diceDom = document.querySelector(".dice");


//preparing to start
document.getElementById("score-0").textContent = "0";
document.getElementById("score-1").textContent = "0";

document.getElementById("current-0").textContent = "0";
document.getElementById("current-1").textContent = "0";

diceDom.style.display = "none";


document.querySelector(".btn-roll").addEventListener("click", function(){
    
 //Шооны аль талаараа буусныг хадгалах
var diceNumber = Math.floor(Math.random()*6+1);

diceDom.style.display = "block";
diceDom.src = "dice-"+diceNumber+".png";
console.log(diceNumber);

});
