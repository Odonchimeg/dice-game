//Тоглогчийн ээлжийг хадгалах
var whoseTurn = 1;


//Тоглогчийн оноог хадгалах
var p1TotalScore = 0;


//p2 total score
var p2TotalScore = 0;


//Тоглогчийн ээжлийн оноог хадгалах
var roundScore = 0;

//Шооны аль талаараа буусныг хадгалах
var dice = Math.floor(Math.random()*6+1);


//preparing to start
document.querySelector(".dice").style.display = "none";
document.querySelector("#score-0").textContent = 0;
document.querySelector("#score-1").textContent = 0;

document.querySelector("#current-0").textContent = 0;
document.querySelector("#current-1").textContent = 0;



// document.querySelector(".dice").src = "dice-"+dice+".png";

console.log(dice);

//dice png array
var dicePng = [
    "dice-1.png",
    "dice-2.png",
    "dice-3.png",
    "dice-4.png",
    "dice-5.png",
    "dice-6.png"
]


function getScrore(){

}