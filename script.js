let order = [];
let clickedOrder = [];
let score;
let rodada = 1;

// 0 RED/1 GREEN/2 BLUE/3 PURPLE

const red = document.querySelector('.red');
const green = document.querySelector('.green');
const blue = document.querySelector('.blue');
const purple = document.querySelector('.purple');

let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];
    for(let i in order){
        let elementColor = returnColorElement(order[i]);
        lightColor(elementColor,Number(i)+1);
    }
}

let lightColor = (element, number) =>{
    number = number * 500;
    setTimeout(() => {
        element.classList.add('selected');
    },number+100);
    setTimeout(() => {
        element.classList.remove('selected');
    },number+400);
}

let checkOrder = () =>{
    for(let i in clickedOrder){
        if(clickedOrder[i]!=order[i]){
            gameOver();
            break;
        }
    }
    if(clickedOrder.length == order.length){
        nextLevel();
    }
}

let click = (color) =>{
    clickedOrder[clickedOrder.length] = color;
    returnColorElement(color).classList.add('selected');
    
    setTimeout(() =>{
        returnColorElement(color).classList.remove('selected');
        checkOrder();
    },100);
}

let returnColorElement = (color) =>{
    if(color == 0){
        return red;
    }
    else if(color == 1){
        return green;
    }
    else if(color == 2){
        return blue;
    }
    else if(color == 3){
        return purple;
    }
}

let nextLevel = () =>{
    score++;
    shuffleOrder();
}

let gameOver = () =>{
    alert(`Pontuação final: ${score}\nVocê perdeu!\nPressione OK para jogar novamente...`);
    order = [];
    clickedOrder = [];
    rodada=0;
    playGame();
}

let playGame = () =>{
    score = 0;
    if(rodada === 1)
        alert('Bem vindo ao Web Genius!\nPressione OK para iniciar um novo jogo!');
    else
        alert('Pontuação zerada!\nIniciando novo jogo...');
    
    nextLevel();
}

red.onclick = () => click(0);
green.onclick = () => click(1);
blue.onclick = () => click(2);
purple.onclick = () => click(3);

playGame();