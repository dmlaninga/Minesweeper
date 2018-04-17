const generatePlayerBoard = (numberOfRows, numberOfColumns) => {
  let board = [];
  for (var rowCounter = 0; rowCounter < numberOfRows; rowCounter++) {
    let row = [];
    for (var columnCounter = 0; columnCounter < numberOfColumns; columnCounter++) {
      row.push(' ');
    }
    board.push(row);
  }
  return board;
}

const generateBombBoard = (numberOfRows, numberOfColumns, numberOfBombs) => {
  let board = [];
  for (var rowCounter = 0; rowCounter < numberOfRows; rowCounter++) {
    let row = [];
    for (var columnCounter = 0; columnCounter < numberOfColumns; columnCounter++) {
      row.push(null);
    }
    board.push(row);
  }
  let numberOfBombsPlaced = 0;
  while (numberOfBombsPlaced < numberOfBombs) {
    let randomRowIndex = Math.floor(Math.random() * numberOfRows);
    let randomColumnIndex = Math.floor(Math.random() * numberOfColumns);
    board[randomRowIndex][randomColumnIndex] = 'B';
    numberOfBombsPlaced++;
    //need to add control flow in order to not allow bombs to be placed on top of each other
  };
  return board;
}

const printboard = board => {
  console.log(board.map(row =>  row.join(' | ')).join('\n'));
}

let playerBoard = generatePlayerBoard(3,4);
let bombBoard = generateBombBoard(3,4,5);

console.log('Player Board: ');
printboard(playerBoard);
console.log('Bomb Board: ');
printboard(bombBoard);
