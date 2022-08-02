function play(str) {
    
    if (str === "q" || str === "Q") {
        document.getElementById("display").innerHTML = "<h4>Heater-1</h4>";
    } else if (str === "w" || str ==="W") {
        document.getElementById("display").innerHTML = "<h4>Heater-2</h4>";
    } else if (str === "e" || str ==="E") {
        document.getElementById("display").innerHTML = "<h4>Heater-3</h4>";
    } else if (str === "a" || str ==="A") {
        document.getElementById("display").innerHTML = "<h4>Heater-4_1</h4>";
    } else if (str === "s" || str ==="S") {
        document.getElementById("display").innerHTML = "<h4>Heater-6</h4>";
    } else if (str === "d" || str ==="D") {
        document.getElementById("display").innerHTML = "<h4>Dsc_Oh</h4>";
    } else if (str === "z" || str ==="Z") {
        document.getElementById("display").innerHTML = "<h4>Kick_n_Hat</h4>";
    } else if (str === "x" || str ==="X") {
        document.getElementById("display").innerHTML = "<h4>RP4_KICK_1</h4>";
    } else if (str === "c" || str ==="C") {
        document.getElementById("display").innerHTML = "<h4>Cev_H2</h4>";
    } 

    let audio = document.getElementById(str);
    audio.play();
}

window.document.onkeyup = function(event) {
    let pressKey = event.key;
    if (pressKey === "q" || pressKey === "Q") {
        play("Q");
    } else if (pressKey === "w" || pressKey ==="W") {
        play("W");
    } else if (pressKey === "e" || pressKey ==="E") {
        play("E");
    } else if (pressKey === "a" || pressKey ==="A") {
        play("A");
    } else if (pressKey === "s" || pressKey ==="S") {
        play("S");
    } else if (pressKey === "d" || pressKey ==="D") {
        play("D");
    } else if (pressKey === "z" || pressKey ==="Z") {
        play("Z");
    } else if (pressKey === "x" || pressKey ==="X") {
        play("X");
    } else if (pressKey === "c" || pressKey ==="C") {
        play("C");
    } 
}