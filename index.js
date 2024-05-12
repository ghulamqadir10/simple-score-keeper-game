// score keeper game;

var targetNum, p1score, p2score;
var button1 = document.getElementById("p1btn")
var button2 = document.getElementById("p2btn")
var winner = document.querySelector(".winner")
var player1score = document.getElementById("player1");
var player2score = document.getElementById("player2")
function start() {
    var target = document.getElementById("targetNum");
    targetNum = Number(target.value);
    console.log(targetNum)
    if (!targetNum && targetNum < 1) {
        alert(" please input a positive number")
        return
    }

}
// var counter=0
// playerContainer(){

// }
// player1(){

// }
// var counter=0;
function counter1() {
    p1score = Number(player1score.innerHTML)
    p1score++
    console.log(player1score)
    player1score.innerHTML = p1score;
    if (targetNum === p1score) {
        winnerp1 = winner.innerHTML = "player 1 won";
        button1.setAttribute("disabled", true)
        button2.setAttribute("disabled", true)

    }
    return
}
// player2(){

// }
// counter=0
function counter2() {
    p2score = Number(player2score.innerHTML)
    p2score++
    console.log(p2score)
    player2score.innerHTML = p2score

    if (targetNum === p2score) {
        winnerp2 = winner.innerHTML = "player 2 won"
        button1.setAttribute("disabled", true)
        button2.setAttribute("disabled", true)
    }
    return
}

function resetButton() {
    // button1.removeAttribute("disabled", true)
    // button2.removeAttribute("disabled", true)
    // player1score.innerHTML= "0"
    // player2score.innerText = "0"
    location.reload()
}