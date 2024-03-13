function generateCpuChoice(){
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
    /*try a matrix later using arrays*/

    const cpuChoice = generateCpuChoice();
    winner='';
    console.log("user choice ",userChoice);
    console.log("cpu choice ",cpuChoice);
    if(cpuChoice===userChoice){
        winner = 'tie';
    }
    else if(cpuChoice === 'rock' && userChoice === 'paper'){
        winner = 'user';
    }
    else if(cpuChoice === 'rock' && userChoice === 'scissor'){
        winner = 'cpu';
    }else if(cpuChoice === 'paper' && userChoice === 'rock'){
        winner = 'cpu';
    }else if(cpuChoice === 'paper' && userChoice === 'scissor'){
        winner = 'user';
    }else if(cpuChoice === 'scissor' && userChoice === 'rock'){
        winner = 'user';
    }else if(cpuChoice === 'scissor' && userChoice === 'paper'){
        winner = 'cpu';
    }
    console.log(" winner is ",winner);
    element = document.body.querySelector(".winner");
    console.log(element.innerHTML);


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
    element = document.body.querySelector(".stats");
    element.innerHTML = `wins : ${userwins}  |  losses : ${cpuwins}  |  tie : ${tie}`;
}

function reset(){
    userwins = 0;
    cpuwins = 0;
    tie = 0;
    setStats();
    document.body.querySelector(".winner").innerHTML = "New Game";
    document.querySelector(".cpu-choice").innerHTML = "Play Again";
}