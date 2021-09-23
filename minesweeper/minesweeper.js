document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
var board = document.getElementsByClassName("board");


function addCells(size) {
  board = {};
  board.cells = [];
    for (let i=0; i<size; i++){
      for (let j=0; j<size; j++){
        let cell = {
          row: i,
          col: j,
          isMine: Math.random() > 0.8,
          isMarked: false,
          hidden: true,
        };
      board.cells.push(cell);
      }
    }
  return board;
}

addCells(5);

console.log(board.cells)

var bgMusic = new Audio('Sexbomb - Tom Jones.mp3')
var bombNoise = new Audio('bomb-explosion.wav')
bombNoise.volume = 0.2;
var cheer = new Audio('cheer.wav')

function restart() {
  location.reload();
}   


function startGame () {
  // Don't remove this function call: it makes the game work!
  lib.initBoard()
 
   for (let i=0; i<board.cells.length; i++){
    board.cells[i].surroundingMines = countSurroundingMines(board.cells[i]);
   }
  bgMusic.play()
  document.addEventListener("click", checkForWin);
  document.addEventListener("contextmenu", checkForWin);

}
  



// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin () {
  for (let i = 0; i < board.cells.length; i++) {
    if ((board.cells[i].isMine && !board.cells[i].isMarked) || (!board.cells[i].isMine && board.cells[i].hidden)) {
      return;
    }
   }
  lib.displayMessage('YOU WON! &#128163;');
  cheer.play();
  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
  //   lib.displayMessage('You win!')
}

// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`: 
//
// var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through 
// them, counting the number of times `cell.isMine` is true.
function countSurroundingMines (cell) {
  let surrounding = lib.getSurroundingCells(cell.row, cell.col)
  let count = 0;

  for (let i = 0; i < surrounding.length; i++){
    if (surrounding[i].isMine === true) {
      count++;
    }
  }
  return count;
}

