let order = [];
let clickedOrder = [];
let score;
let rodada = 1;

// 0 RED/1 GREEN/2 BLUE/3 PURPLE

const red = document.querySelector('.red');
const green = document.querySelector('.green');
const blue = document.querySelector('.blue');
const purple = document.querySelector('.purple');


//Cria ordem aleatoria
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];
    for(let i in order){
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor,Number(i)+1);
    }
}

//Acende a cor
let lightColor = (element, number) =>{
    number = number * 500;
    //setTimeout(() =>{
        element.classList.add('selected');
    //}, number - 250);
    setTimeout(() =>{
        element.classList.remove('selected');
    },number);
}

//Checa se os botoes foram apertados na ordem certa
let checkOrder = () =>{
    for(let i in clickedOrder){
        if(clickedOrder[i]!=order[i]){
            gameOver();
            break;
        }
    }
    if(clickedOrder.length == order.length){
        alert(`Pontuação: ${score}\nVocê acertou!\nIniciando próxima rodada!`);
        nextLevel();
    }
}

//Checa o clique
let click = (color) =>{
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');
    
    setTimeout(() =>{
        createColorElement(color).classList.remove('selected');
        checkOrder();
    },250);
}

//retorna a cor
let createColorElement = (color) =>{
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

//proxima rodada
let nextLevel = () =>{
    score++;
    shuffleOrder();
}

//perdeu
let gameOver = () =>{
    alert(`Pontuação final: ${score}\nVocê perdeu!\nClique em ok para jogar novamente...`);
    order = [];
    clickedOrder = [];
    rodada=0;
    playGame();
}

//inicio do jogo
let playGame = () =>{
    score = 0;
    if(rodada === 1)
        alert('Bem vindo ao Web Genius!\nIniciando novo jogo!');
    else
        alert('Pontuação zerada!\nIniciando novo jogo...');
    
    nextLevel();
}

//clique para cor
red.onclick = () => click(0);
green.onclick = () => click(1);
blue.onclick = () => click(2);
purple.onclick = () => click(3);


//iniciar o jogo
playGame();
