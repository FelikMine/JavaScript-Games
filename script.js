
let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let isActiveGame = true;

function checkCell (index) {
    if ((gameBoard[index] !== '') || (isActiveGame === false)) {
        return;
    }

    gameBoard[index] = currentPlayer;
    checkForWinOrDraw();

    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';

}

const cells = document.querySelectorAll('.cell'); //Сохраняем массив

cells.forEach(cell => {
    cell.addEventListener('click', cellClicked, false); //Всплытие
})

function cellClicked(event) {
    const clickedCell = event.target;
    const clickedCellIndex = parseInt(clickedCell.id.replace('cell-', '')) - 1;

    if ((gameBoard[clickedCellIndex] !== '') || (isActiveGame === false)) {
        return;
    }

    checkCell(clickedCellIndex);
    updateUI();
}

function updateUI() {
    for (let i = 0; i < cells.length; i++) {
        cells[i].innerText = gameBoard[i];
    }
}

const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function checkForWinOrDraw() {
    let roundWon = false;

    for (let i = 0; i < winConditions.length; i++) {
        const [a, b, c] = winConditions[i];
        if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
            roundWon = true;
            break;
        }
    }

    if (roundWon) {
        announceWinner(currentPlayer);
        isActiveGame = false;
        return;
    }

    let roundDraw = !gameBoard.includes('');

    if (roundDraw) {
        announceDraw();
        isActiveGame = false;
        return;
    }
}
function announceWinner(player) {
    const messageElement = document.getElementById('gameMessage');
    messageElement.innerText = `Игрок ${player} выиграл!`;
}

function announceDraw() {
    const messageElement = document.getElementById('gameMessage');
    messageElement.innerText = 'Ничья';
}

const resetButton = document.getElementById('resetButton');
resetButton.addEventListener('click', resetGame, false);

function resetGame() {
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    isActiveGame = true;
    currentPlayer = 'X';
    console.log('Всплытие');
    
    cells.forEach(cell => {
        cell.innerText = '';
    });
    document.getElementById('gameMessage').innerText = 'Игра';
}