function x(sq) {
    document.getElementById(sq + "a").innerHTML = "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp";
    document.getElementById(sq + "b").innerHTML = "&nbsp&nbsp\\/&nbsp&nbsp";
    document.getElementById(sq + "c").innerHTML = "&nbsp&nbsp/\\&nbsp&nbsp";
}



function o(sq) {
    document.getElementById(sq + "a").innerHTML = "&nbsp&nbsp__&nbsp&nbsp";
    document.getElementById(sq + "b").innerHTML = "&nbsp|&nbsp&nbsp|&nbsp";
    document.getElementById(sq + "c").innerHTML = "&nbsp|__|&nbsp";
}


function r(sq) {
    document.getElementById(sq + "a").innerHTML = "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp";
    document.getElementById(sq + "b").innerHTML = "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp";
    document.getElementById(sq + "c").innerHTML = "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp";
}


function q(sq) {
    if(document.getElementById(sq + "a").innerHTML == "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" && 
    document.getElementById(sq + "b").innerHTML == "&nbsp;&nbsp;\\/&nbsp;&nbsp;" && 
    document.getElementById(sq + "c").innerHTML == "&nbsp;&nbsp;/\\&nbsp;&nbsp;") {
        return "x";
    } else if(document.getElementById(sq + "a").innerHTML == "&nbsp;&nbsp;__&nbsp;&nbsp;" &&
    document.getElementById(sq + "b").innerHTML == "&nbsp;|&nbsp;&nbsp;|&nbsp;" &&
    document.getElementById(sq + "c").innerHTML == "&nbsp;|__|&nbsp;") {
        return "o";
    } else {
        return "r";
    }
}



let youFirst = true;
let gameOver = false;

function c(sq) {
    if(q(sq) == "r" && gameOver == false) {
        check();

        x(sq);

        document.getElementById("winloss").innerHTML = "&nbsp";

        check();

        ai();

        check();

        console.log("done");
    }
}

// Checks if a square is goable (empty) or not
function goable(sq) {
    if(q(sq) == "r") {
        sqToGo = sq;
        return true;
    } else {
        return false;
    }
}


let sqToGo = 5

// AI! (Not really...)
function ai() {
    if(gameOver == true) {return;}

    sqToGo = Math.floor(Math.random() * 9) + 1;


    // Goes for corner square
    if (q(1) == "r" || q(3) == "r" || q(7) == "r" || q(9) == "r") {
        let leave = false;

        while (!leave) {
            let temp = Math.floor(Math.random() * 4) + 1;
            switch(temp) {
                case 1:
                    goable(1);
                    if (goable(1)) {
                        leave = true;
                    }
                    break;
                case 2:
                    goable(3);
                    if (goable(3)) {
                        leave = true;
                    }
                    break;
                case 3:
                    goable(7);
                    if (goable(7)) {
                        leave = true;
                    }
                    break;
                case 4:
                    goable(9);
                    if (goable(9)) {
                        leave = true;
                    }
                    break;
            }
        }
    }

    if ((q(1) == "x" && q(9) == "x") || (q(3) == "x" && q(7) == "x")) {
        if (q(2) == "r" || q(4) == "r" || q(6) == "r" || q(8) == "r") {
            let leave = false;

            while (!leave) {
                let temp = Math.floor(Math.random() * 4) + 1;
                switch(temp) {
                    case 1:
                        goable(2);
                        if (goable(2)) {
                            leave = true;
                        }
                        break;
                    case 2:
                        goable(4);
                        if (goable(4)) {
                            leave = true;
                        }
                        break;
                    case 3:
                        goable(6);
                        if (goable(6)) {
                            leave = true;
                        }
                        break;
                    case 4:
                        goable(8);
                        if (goable(8)) {
                            leave = true;
                        }
                        break;
                }
            }
        }
    }

    let cornersToGo = [];
    if (q(2) == "x") {
        cornersToGo.push(1);
        cornersToGo.push(3);
    }
    if (q(4) == "x") {
        cornersToGo.push(1);
        cornersToGo.push(7);
    }

    if (q(6) == "x") {
        cornersToGo.push(3);
        cornersToGo.push(9);
    }

    if (q(8) == "x") {
        cornersToGo.push(7);
        cornersToGo.push(9);
    }

    while (cornersToGo.length != 0) {
        let randomCorner = Math.floor(Math.random() * cornersToGo.length);
        goable(cornersToGo[randomCorner]);
        cornersToGo.splice(randomCorner, 1);
    }

    // goable(1);
    // goable(3);
    // goable(7);
    // goable(9);

    goable(5);



    // Horizontal
    if(q(1) == "x" && q(2) == "x") {
        goable(3);
    }
    if(q(4) == "x" && q(5) == "x") {
        goable(6);
    }
    if(q(7) == "x" && q(8) == "x") {
        goable(9);
    }

    // Vertical
    if(q(1) == "x" && q(4) == "x") {
        goable(7);
    }
    if(q(2) == "x" && q(5) == "x") {
        goable(8);
    }
    if(q(3) == "x" && q(6) == "x") {
        goable(9);
    }

    // Cross
    if(q(1) == "x" && q(5) == "x") {
        goable(9);
    }
    if(q(3) == "x" && q(5) == "x") {
        goable(7);
    }



    // Horizontal
    if(q(2) == "x" && q(3) == "x") {
        goable(1);
    }
    if(q(5) == "x" && q(6) == "x") {
        goable(4);
    }
    if(q(8) == "x" && q(9) == "x") {
        goable(7);
    }

    // Vertical
    if(q(4) == "x" && q(7) == "x") {
        goable(1);
    }
    if(q(5) == "x" && q(8) == "x") {
        goable(2);
    }
    if(q(6) == "x" && q(9) == "x") {
        goable(3);
    }

    // Cross
    if(q(5) == "x" && q(9) == "x") {
        goable(1);
    }
    if(q(5) == "x" && q(7) == "x") {
        goable(3);
    }



    // Horizontal
    if(q(1) == "x" && q(3) == "x") {
        goable(2);
    }
    if(q(4) == "x" && q(6) == "x") {
        goable(5);
    }
    if(q(7) == "x" && q(9) == "x") {
        goable(8);
    }

    // Vertical
    if(q(1) == "x" && q(7) == "x") {
        goable(4);
    }
    if(q(2) == "x" && q(8) == "x") {
        goable(5);
    }
    if(q(3) == "x" && q(9) == "x") {
        goable(6);
    }

    // Cross
    if(q(1) == "x" && q(9) == "x") {
        goable(5);
    }
    if(q(3) == "x" && q(7) == "x") {
        goable(5);
    }











    // Horizontal
    if(q(1) == "o" && q(2) == "o") {
        goable(3);
    }
    if(q(4) == "o" && q(5) == "o") {
        goable(6);
    }
    if(q(7) == "o" && q(8) == "o") {
        goable(9);
    }

    // Vertical
    if(q(1) == "o" && q(4) == "o") {
        goable(7);
    }
    if(q(2) == "o" && q(5) == "o") {
        goable(8);
    }
    if(q(3) == "o" && q(6) == "o") {
        goable(9);
    }

    // Cross
    if(q(1) == "o" && q(5) == "o") {
        goable(9);
    }
    if(q(3) == "o" && q(5) == "o") {
        goable(7);
    }



    // Horizontal
    if(q(2) == "o" && q(3) == "o") {
        goable(1);
    }
    if(q(5) == "o" && q(6) == "o") {
        goable(4);
    }
    if(q(8) == "o" && q(9) == "o") {
        goable(7);
    }

    // Vertical
    if(q(4) == "o" && q(7) == "o") {
        goable(1);
    }
    if(q(5) == "o" && q(8) == "o") {
        goable(2);
    }
    if(q(6) == "o" && q(9) == "o") {
        goable(3);
    }

    // Cross
    if(q(5) == "o" && q(9) == "o") {
        goable(1);
    }
    if(q(5) == "o" && q(7) == "o") {
        goable(3);
    }



    // Horizontal
    if(q(1) == "o" && q(3) == "o") {
        goable(2);
    }
    if(q(4) == "o" && q(6) == "o") {
        goable(5);
    }
    if(q(7) == "o" && q(9) == "o") {
        goable(8);
    }

    // Vertical
    if(q(1) == "o" && q(7) == "o") {
        goable(4);
    }
    if(q(2) == "o" && q(8) == "o") {
        goable(5);
    }
    if(q(3) == "o" && q(9) == "o") {
        goable(6);
    }

    // Cross
    if(q(1) == "o" && q(9) == "o") {
        goable(5);
    }
    if(q(3) == "o" && q(7) == "o") {
        goable(5);
    }




    if (q(1) == "r" && q(2) == "r" && q(3) == "r" && q(4) == "r" && q(5) == "r" && q(6) == "r" && q(7) == "r" && q(8) == "r" && q(9) == "r") {
        sqToGo = Math.floor(Math.random() * 9) + 1;
    }



    console.log("ai " + sqToGo);

    if(q(sqToGo) == "r") {
        o(sqToGo);
        console.log("went");
    } else {
        console.log("again");
        ai();
        return;
    }
}

// Clear the bord
function clr() {
    console.log("clear");
    r(1);
    r(2);
    r(3);
    r(4);
    r(5);
    r(6);
    r(7);
    r(8);
    r(9);
    gameOver = false;
    youFirst = !youFirst;
    if (youFirst) {
        document.getElementById("winloss").innerHTML = "You Go First";
    } else {
        document.getElementById("winloss").innerHTML = "Computer Goes First";
        ai();
    }
    check();
}


// Checking for conditions (wins)
function check() {
    checkForDraws();
    checkForXWins();
    checkForOWins();
    checkClear();
}

function checkClear() {
    if(gameOver == true) {
        document.getElementById("clear").innerHTML = "Play Again";
    } else {
        document.getElementById("clear").innerHTML = "Reset";
    }
}

function checkForDraws() {
    if (q(1) != "r" && q(2) != "r" && q(3) != "r" && q(4) != "r" && q(5) != "r" && q(6) != "r" && q(7) != "r" && q(8) != "r" && q(9) != "r") {
        document.getElementById("winloss").innerHTML = "It's a Draw";
        gameOver = true;
    }
}

function checkForXWins() {
    let l = "x";

    // Horizontal
    if(q(1) == l && q(2) == l && q(3) == l) {
        xWins();
    }
    if(q(4) == l && q(5) == l && q(6) == l) {
        xWins();
    }
    if(q(7) == l && q(8) == l && q(9) == l) {
        xWins();
    }

    // Vertical
    if(q(1) == l && q(4) == l && q(7) == l) {
        xWins();
    }
    if(q(2) == l && q(5) == l && q(8) == l) {
        xWins();
    }
    if(q(3) == l && q(6) == l && q(9) == l) {
        xWins();
    }

    // Cross
    if(q(1) == l && q(5) == l && q(9) == l) {
        xWins();
    }
    if(q(3) == l && q(5) == l && q(7) == l) {
        xWins();
    }
}

function checkForOWins() {
    let l = "o";

    // Horizontal
    if(q(1) == l && q(2) == l && q(3) == l) {
        oWins();
    }
    if(q(4) == l && q(5) == l && q(6) == l) {
        oWins();
    }
    if(q(7) == l && q(8) == l && q(9) == l) {
        oWins();
    }

    // Vertical
    if(q(1) == l && q(4) == l && q(7) == l) {
        oWins();
    }
    if(q(2) == l && q(5) == l && q(8) == l) {
        oWins();
    }
    if(q(3) == l && q(6) == l && q(9) == l) {
        oWins();
    }

    // Cross
    if(q(1) == l && q(5) == l && q(9) == l) {
        oWins();
    }
    if(q(3) == l && q(5) == l && q(7) == l) {
        oWins();
    }
}

function xWins() {
    gameOver = true;
    document.getElementById("winloss").innerHTML = "Ummm... You just won. Computer is extremely confused.";
}

function oWins() {
    gameOver = true;
    document.getElementById("winloss").innerHTML = "The Computer Wins";
}


// Dark/Light Mode
function setLight() {
    document.body.style.backgroundColor = "white";
    var cols = document.getElementsByTagName("BODY");
    for(i = 0; i < cols.length; i++) {
        cols[i].style.color = "black";
    }
}

function setDark() {
    document.body.style.backgroundColor = "#1a1a1a";
    var cols = document.getElementsByTagName("BODY");
    for(i = 0; i < cols.length; i++) {
        cols[i].style.color = "white";
    }
}

function darkCheck() {
    var checkBox = document.getElementById("check");

    if(checkBox.checked == true) {
        setDark();

        localStorage.setItem("dark", true);
    } else {
        setLight();

        localStorage.setItem("dark", false);
    }
}

function restoreDark() {
    var checkBox = document.getElementById("check");

    if(localStorage.getItem("dark") == "true") {
        setDark()
        checkBox.checked = true;
    } else {
        setLight()
        checkBox.checked = false;
    }
}

restoreDark();
console.log(localStorage.getItem("dark"));

// console.log(q(1));
// console.log(q(2));
// console.log(q(3));
// console.log(q(4));
// console.log(q(5));
// console.log(q(6));
// console.log(q(7));
// console.log(q(8));
// console.log(q(9));

