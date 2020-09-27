//Тоглогчийн ээлжийг хадгалах
var activePlayer = 0;


//Тоглогчийн оноог хадгалах
var scores = [0, 0];

//Тоглогчийн ээжлийн оноог хадгалах
var roundScore = 0;

//dice object in DOM ()
var diceDom = document.querySelector(".dice");

resetGame();


document.querySelector(".btn-roll").addEventListener("click", function () {

    //Шооны аль талаараа буусныг хадгалах
    var diceNumber = Math.floor(Math.random() * 6 + 1);

    //Шооны зургийг вэб дээр гаргаж ирэх
    diceDom.style.display = "block";

    //Буусан санамсаргүй тоонд харгалзах шооны зургийг харуулна
    diceDom.src = "dice-" + diceNumber + ".png";

    //буусан тоо нь 1-с ялгаатай бол идэвхитэй тоглогчийн ээлжийн оноог нэмэгдүүлнэ.
    if (diceNumber != 1) {

        //1-с ялгаатай буусан тул ээлжийн оноог нэмэгдүүлнэ
        roundScore += diceNumber;
        document.getElementById("current-" + activePlayer).textContent = roundScore;

        if (scores[activePlayer] + roundScore > 99) {

            refreshScore();

            diceDom.style.display = "none";
            document.getElementById("name-" + activePlayer).textContent = " WON !!!!";
        }


    } else {
        //ээлжийг сольно
        changeRound();
    }

    console.log(diceNumber);

});

document.querySelector(".btn-hold").addEventListener("click", function () {
    changeRound();
});

document.querySelector(".btn-new").addEventListener("click", function () {

    document.getElementById("name-" + activePlayer).textContent = "Player " + activePlayer+1;

    resetGame();
});

function changeRound() {

    refreshScore();

    // active player-ийн улаан цэгийг шилжүүлнэ
    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");

    // active player-ийн ээлжийг солино
    activePlayer = activePlayer == 0 ? 1 : 0;

    // шоог алга болгон
    diceDom.style.display = "none";

}

function refreshScore() {

    // active player-ийн нийт оноог хадгалаад, дэлгэцэнд харуулна
    scores[activePlayer] += roundScore;
    document.getElementById("score-" + activePlayer).textContent = scores[activePlayer];

    //active player-ийн ээлжийн оноог тэглэж, дэлгэцэнд харуулна
    roundScore = 0;
    document.getElementById("current-" + activePlayer).textContent = roundScore;

}

function resetGame() {

    activePlayer = 0;

    //preparing to start
    document.getElementById("score-0").textContent = "0";
    document.getElementById("score-1").textContent = "0";

    document.getElementById("current-0").textContent = "0";
    document.getElementById("current-1").textContent = "0";

    diceDom.style.display = "none";

}