const ALFABETO = "abcdefghijklmnopqrstuvwxyz";

let emails = ["email1@ciao.com", "email2@ciao.com", "email3@ciao.com"];

console.log(emails);


const login = document.querySelector(".login");
login.addEventListener("click", function(){
    let email = document.getElementById("email").value;
    console.log(email);

    let find = false;

    for(let i = 0; i < emails.length; i++){

        if (emails[i] == email){
            find = true;
            console.log("if");
            break;
        }
    }

    if (find){

        let points = 0;
        let player;
        let computer;

        document.getElementById("game").innerHTML = "<div class=\"col-6 text-center mt-2\"><b>Giocatore</b><ul id=\"giocatore\"></ul></div><div class=\"col-6 text-center mt-2\"><b>Computer</b><ul id=\"computer\"></ul></div><div class=\"col-12\">Punti: <span id=\"punti\">0</span></div>";

        for(let d = 0; d < 10; d++){
            player = Math.floor(Math.random() * 6) + 1;
            document.getElementById("giocatore").innerHTML += "<li>" + player + "</li>";
    
            computer = Math.floor(Math.random() * 6) + 1;
            document.getElementById("computer").innerHTML += "<li>" + computer + "</li>";
    
            if (player > computer) {
                points++;
                document.getElementById("punti").innerHTML = points;
            }
        }

        if(points == 5){
            document.getElementById("punti").innerHTML += " PAREGGIO";
        } else if (points > 5){
            document.getElementById("punti").innerHTML += " VITTORIA";
        } else {
            document.getElementById("punti").innerHTML += " SCONFITTA";
        }
    }
})