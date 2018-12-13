(function(){

    let team1Shots = document.querySelector("#teamone-numshots");
    let team2Shots = document.querySelector("#teamtwo-numshots");
    let team1Goals = document.querySelector("#teamone-numhits");
    let team2Goals = document.querySelector("#teamtwo-numhits");
    let team1ShotButton = document.querySelector("#teamone-shoot");
    let team2ShotButton = document.querySelector("#teamtwo-shoot");
    let resetButton = document.querySelector("#reset");
    let resetCount = document.querySelector("#num-resets");
    let audio = document.querySelector("#horn");


    

    team1ShotButton.addEventListener("click", function(){
        let shot = Math.random();
        let shotAttempt = parseInt(team1Shots.innerHTML);
        let goals = parseInt(team1Goals.innerHTML);

        shotAttempt += 1;
        team1Shots.innerHTML = shotAttempt;
        if(shot < 0.45){
            console.log("miss");
        } else {
            goals += 1;
            team1Goals.innerHTML = goals;
            document.body.style.backgroundColor = "yellow";
            audio.play();
            console.log("GOALLLLL");
        }
    })

    team2ShotButton.addEventListener("click", function(){
        let shot = Math.random();
        let shotAttempt = parseInt(team2Shots.innerHTML);
        let goals = parseInt(team2Goals.innerHTML);

        shotAttempt += 1;
        team2Shots.innerHTML = shotAttempt;
        if(shot < 0.55){
            console.log("miss");
        } else {
            goals += 1;
            team2Goals.innerHTML = goals;
            document.body.style.backgroundColor = "red";
            audio.play();
            console.log("GOALLLLL");
        }
    })

    resetButton.addEventListener("click", function(){
        let newReset = parseInt(resetCount.innerHTML)
        newReset += 1;
        resetCount.innerHTML = newReset;

        team1Shots.innerHTML = 0;
        team2Shots.innerHTML = 0;
        team1Goals.innerHTML = 0;
        team2Goals.innerHTML = 0;
        document.body.style.backgroundColor = "white";

    })

})()