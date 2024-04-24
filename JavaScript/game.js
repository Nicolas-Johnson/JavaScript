const placar = JSON.parse(localStorage.getItem('placar')) || {
    youScore: 0,
    computerScore: 0
};



const score = document.getElementById("score");
const rock = document.getElementById("rock");
const scissors = document.getElementById("scissors");
const paper = document.getElementById("paper");
const lizard = document.getElementById("lizard");
const spock = document.getElementById("spock");
const reset = document.getElementById("reset");
const body = document.querySelector("body");
const wrapper = document.querySelector('.wrapper');
const viewMode = document.querySelector('.viewMode');
let randomNumber = Math.random();
rock.addEventListener('click', (e) => game('rock'));
scissors.addEventListener('click', (e) => game('scissors'));
paper.addEventListener('click', (e) => game('paper'));
lizard.addEventListener('click', (e) => game('lizard'));
spock.addEventListener('click', (e) => game('spock'));
reset.addEventListener('click', (e) => resetGame());
viewMode.addEventListener('click', (e) => darkMode());

const darkMode = () => {
    if (viewMode.innerText === 'Ligth Mode') {
        viewMode.innerText = 'Dark Mode';
        wrapper.style.backgroundColor = 'rgba(0, 65, 185, 0.555)';
        body.style.backgroundColor = 'white';
        body.style.color = 'black';
    } else {
        viewMode.innerText = 'Ligth Mode';
        wrapper.style.backgroundColor = 'grey';
        body.style.backgroundColor = 'rgb(31, 31, 31)';
        body.style.color = 'white';
    }
    
}

const updateScore = () => {
    let { computerScore, youScore } = placar;
    score.innerHTML = `You <span>${youScore}</span> x <span>${computerScore}</span> Cpu`;
    localStorage.setItem('placar', JSON.stringify(placar));
}
window.addEventListener('load' , updateScore());

const resetGame = () => {
    localStorage.removeItem('placar');
    location.reload();
}

function callAlert (string, string02 = null) {
    if (string02) {
        alert(`${string} \nyou ${string02}`);
    } else alert(string);
}

let computerChoice = () => {
    let number = Math.random();
    if (number >= 0 && number <= 0.2) {
        return 'rock';
    } else if (number > 0.2 && number <= 0.4) {
        return 'paper';
    } else if (number > 0.4 && number <= 0.6) {
        return 'scisors';
    } else if (number > 0.6 && number <= 0.8) {
        return 'lizard';
    } else return 'spock';
}

function game (choice) {
    let computer = computerChoice();
    switch (choice) {
        case 'rock':
            if (computer === 'rock') {
                callAlert(`Rock X Rock\nTie\nTry again`);
                updateScore();
            } else if (computer === 'paper') {
                callAlert('Rock X Paper', 'lost');
                placar.computerScore ++;
                updateScore();
            } else if (computer === 'scissors') {
                callAlert('Rock X Scissors', 'won');
                placar.youScore ++;
                updateScore();
            } else if (computer === 'lizard') {
                callAlert('Rock X Lizars', 'won');
                placar.youScore ++;
                updateScore();
            } else {
                callAlert('Rock X Spock', 'lost');
                placar.computerScore ++;
                updateScore();
            }
            break;
        case'scissors':
            if (computer ==='scissors') {
                callAlert(`Scissors X Scissors\nTie\nTry again`);
                updateScore();
            } else if (computer === 'paper') {
                callAlert('Scissors X Paper', 'won');
                placar.youScore ++;
                updateScore();
            } else if (computer === 'rock') {
                callAlert('Scissors X Rock', 'lost');
                placar.computerScore ++;
                updateScore();
            } else if (computer === 'lizard') {
                callAlert('Scissors X Lizard', 'won');
                placar.youScore ++;
                updateScore();
            } else {
                callAlert('Scissors X Spock', 'lost');
                placar.computerScore ++;
                updateScore();
            }
            break;
        case 'paper':
            if (computer === 'paper') {
                callAlert(`Paper X Paper\nTie\nTry again`);
                updateScore();
            } else if (computer === 'scissors') {
                callAlert('Paper X Scissors', 'lost');
                placar.computerScore ++;
                updateScore();
            } else if (computer === 'rock') {
                callAlert('Paper X Rock', 'won');
                placar.youScore ++;
                updateScore();
            } else if (computer === 'lizard') {
                callAlert('Paper X Lizard', 'lost');
                placar.computerScore ++;
                updateScore();
            } else {
                callAlert('Paper X Spock', 'won');
                placar.youScore ++;
                updateScore();
            }
            break;
        case 'lizard':
            if (computer === 'lizard') {
                callAlert(`Lizard X Lizard\nTie\nTry again`);
                updateScore();
            }
            else if (computer === 'paper') {
                callAlert('Lizard X Paper', 'won');
                placar.youScore ++;
                updateScore();
            } else if (computer === 'scissors') {
                callAlert('Lizard X Scissors', 'lost');
                placar.computerScore ++;
                updateScore();
            } else if (computer === 'rock') {
                callAlert('Lizard X Rock', 'lost');
                placar.computerScore ++;
                updateScore();
            } else {
                callAlert('Lizard X Spock', 'won');
                placar.youScore ++;
                updateScore();
            }
            break;
        case'spock':
            if (computer ==='spock') {
                callAlert(`Spock X Spock\nTie\nTry again`);
                updateScore();
            } else if (computer === 'paper') {
                callAlert('Spock X Paper', 'lost');
                placar.computerScore ++;
                updateScore();
            } else if (computer === 'rock') {
                callAlert('Spock X Rock', 'won');
                placar.youScore ++;
                updateScore();
            } else if (computer === 'scissors') {
                callAlert('Spock X Scissors', 'won');
                placar.youScore ++;
                updateScore();
            } else {
                callAlert('Spock X Lizard', 'lost');
                placar.computerScore ++;
                updateScore();
            }
            break;
        default:
            break;
    }
}


