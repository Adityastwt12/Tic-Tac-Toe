// script.js
document.addEventListener("DOMContentLoaded", () => {
    const cells = document.querySelectorAll(".cell");
    const playerX = "X";
    const playerO = "O";
    let currentPlayer = playerX;
    let gameActive = true;
    const winningConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    function checkWinner() {
        for (let condition of winningConditions) {
            const [a, b, c] = condition;
            if (cells[a].textContent && cells[a].textContent === cells[b].textContent && cells[a].textContent === cells[c].textContent) {
                gameActive = false;
                alert(`${currentPlayer} wins!`);
                return;
            }
        }

        if (Array.from(cells).every(cell => cell.textContent)) {
            gameActive = false;
            alert("It's a draw!");
        }
    }

    cells.forEach(cell => {
        cell.addEventListener("click", () => {
            if (cell.textContent === "" && gameActive) {
                cell.textContent = currentPlayer;
                checkWinner();
                currentPlayer = currentPlayer === playerX ? playerO : playerX;
            }
        });
    });
});
