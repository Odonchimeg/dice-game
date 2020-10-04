//Тоглогчийн ээлжийг хадгална
var activePlayer;

//Ээжлийн оноо
var roundScore;

//Тоглогчийн оноог хадгалах
var scores;

//dice object in DOM ()
var diceDom = document.querySelector(".dice");

//ТОглоом дууссан төлвийг хадгална
var isGameOver;

//ТОглоомыг эхлүүлнэ
resetGame();


document.querySelector(".btn-roll").addEventListener("click", function () {

    if (!isGameOver) {

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

        } else {
            //ээлжийг сольно
            switchToNextPlayer();
        }
    } else
        alert("Тоглоом дууссан байна. + NEW GAME товчийг дарж эхлүүлнэ үү.");

    console.log(diceNumber);

});

document.querySelector(".btn-hold").addEventListener("click", function () {

    // active player-ийн нийт оноог хадгалаад, дэлгэцэнд харуулна
    scores[activePlayer] += roundScore;
    document.getElementById("score-" + activePlayer).textContent = scores[activePlayer];

    //Тоглогч хожсон эсэхийг шалгах
    if (scores[activePlayer] >= 50) {

        diceDom.style.display = "none";
        document.getElementById("name-" + activePlayer).textContent = " WON !!!!";
        document.querySelector(".player-" + activePlayer + "-panel").classList.add("winner");
        document.querySelector(".player-" + activePlayer + "-panel").classList.remove("active");
        document.getElementById("current-" + activePlayer).textContent = 0;

        //тоглоом дууссан
        isGameOver = true;

    } else
        switchToNextPlayer();

});

document.querySelector(".btn-new").addEventListener("click", function () {

    resetGame();

});

//тогло ээлжийг дараагийн тоглогч руу шилжүүлнэ
function switchToNextPlayer() {

    //active player-ийн ээлжийн оноог тэглэж, дэлгэцэнд харуулна
    roundScore = 0;
    document.getElementById("current-" + activePlayer).textContent = 0;

    // active player-ийн улаан цэгийг шилжүүлнэ
    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");

    // active player-ийн ээлжийг солино
    activePlayer = activePlayer == 0 ? 1 : 0;

    // шоог алга болгон
    diceDom.style.display = "none";

}

function resetGame() {

    //Тоглогчийн оноог хадгалах
    scores = [0, 0];

    //Тоглогчийн ээлжийг хадгалах   
    activePlayer = 0;

    //Тоглогчийн ээжлийн оноог хадгалах
    roundScore = 0;

    //Тоглоом дуусаагүй болгох
    isGameOver = false;

    //preparing to start
    document.getElementById("score-0").textContent = "0";
    document.getElementById("score-1").textContent = "0";

    document.getElementById("current-0").textContent = "0";
    document.getElementById("current-1").textContent = "0";


    //Эхний тоглогчоор active -ыг устгах
    document.querySelector(".player-0-panel").classList.add("active");
    document.querySelector(".player-1-panel").classList.remove("active");

    //Тоглогчдоос winner    class устгах
    document.querySelector(".player-0-panel").classList.remove("winner");
    document.querySelector(".player-1-panel").classList.remove("winner");

    //Тоглогчдын нэрийг буцааж гаргах
    document.getElementById("name-0").textContent = "Player 1";
    document.getElementById("name-1").textContent = "Player 2";

    diceDom.style.display = "none";

}