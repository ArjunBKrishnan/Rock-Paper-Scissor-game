function generateCpuChoice(){
    console.log("logging .....generateCpuChoice");
    const randomValue = Math.random();
    cpuChoice = '';
    if(randomValue<=.3){
        cpuChoice = 'rock';
    }
    else if(randomValue<=.6){
        cpuChoice = 'paper';
    }
    else if(randomValue<1){
        cpuChoice = 'scissor';
    }
    document.querySelector(".cpu-choice").innerHTML = `Cpu Choice is ${cpuChoice}`;
    return(cpuChoice);    
}

userwins = 0;
cpuwins = 0;
tie = 0;

function run(userChoice){
    console.log("logging .....run");
    /*try a matrix later using arrays*/

    const cpuChoice = generateCpuChoice();
    

    console.log("user choice ",userChoice);
    console.log("cpu choice ",cpuChoice);
    winner=decideWinner(userChoice,cpuChoice);

    console.log(" winner is ",winner);
    element = document.body.querySelector(".winner");

    if(winner === 'tie'){
        tie++;
        element.innerHTML = "Its a Tie!"
    }
    else if(winner === 'cpu'){
        cpuwins++
        element.innerHTML = "winner is Cpu!"
    }
    else if(winner === 'user'){
        userwins++
        element.innerHTML = "winner is User!"
    }
    setStats();
    
}

function setStats(){
    console.log("logging .....setStats");
    element = document.body.querySelector(".stats");
    element.innerHTML = `wins : ${userwins}  |  losses : ${cpuwins}  |  tie : ${tie}`;
}

function reset(){
    console.log("logging .....reset");
    userwins = 0;
    cpuwins = 0;
    tie = 0;
    setStats();
    document.body.querySelector(".winner").innerHTML = "New Game";
    document.querySelector(".cpu-choice").innerHTML = "Play Again";
}

function decideWinner(userChoice,cpuChoice){
    console.log("logging .....decideWinner");
    /*x axis is cpu
    y axis is user
    rock =0
    paper=1
    scissor=2
    */

    let matrix = [
        ['tie','cpu','user'],
        ['user','tie','cpu'],
        ['cpu','user','tie']
    ];
    
    userChoice = userChoice==='rock'? 0: (userChoice==='paper'?1:2);
    cpuChoice = cpuChoice==='rock'? 0: (cpuChoice==='paper'?1:2);

    console.log(userChoice);
    console.log(cpuChoice);

    winner = matrix[userChoice][cpuChoice];
    console.log('from matrix: winner is ',winner);
    return winner;
}
