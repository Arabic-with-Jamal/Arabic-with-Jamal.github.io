let board = ['', '', '', '', '', '', '', '', ''];
let player = 'X';
let winner = null;

const winning_combinations = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6]
];

let cells = document.querySelectorAll('td');
cells.forEach(cell => cell.addEventListener('click', handleClick));

function handleClick(event) {
	const cell = event.target;
	const index = cell.id;

	if (board[index] !== '' || winner !== null) {
		return;
	}

	board[index] = player;
	cell.textContent = player;
	cell.style.color = player === 'X' ? 'blue' : 'red';

	checkWinner();
	switchPlayer();
}

function checkWinner() {
    for (let i = 0; i < winning_combinations.length; i++) {
      const [a, b, c] = winning_combinations[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        winner = board[a];
        document.getElementById('game-status').textContent = `${winner} wins!`;
        document.getElementById('game-status').style.fontSize = '5rem';
        document.getElementById('game-status').style.fontWeight = 'bold';
        document.getElementById('game-status').style.color = 'white';
        document.getElementById('game-status').style.textShadow = '0 0 5px black';
        document.getElementById('restart-btn').style.display = 'block';
        break;
      }
    }
    if (!board.includes('')) {
      document.getElementById('game-status').textContent = "It's a tie!";
      document.getElementById('game-status').style.fontSize = '5rem';
      document.getElementById('game-status').style.fontWeight = 'bold';
      document.getElementById('game-status').style.color = 'white';
      document.getElementById('game-status').style.textShadow = '0 0 5px black';
      document.getElementById('restart-btn').style.display = 'block';
    }
}



document.getElementById('close-button').addEventListener('click', () => {
    const popupMessage = document.getElementById('popup-message');
    popupMessage.style.display = 'none';
});


function switchPlayer() {
	player = player === 'X' ? 'O' : 'X';
}

function restart() {
    board = ['', '', '', '', '', '', '', '', ''];
    player = 'X';
    winner = null;
    
    cells.forEach(cell => {
        cell.textContent = '';
        cell.style.color = 'black';
    });
}
