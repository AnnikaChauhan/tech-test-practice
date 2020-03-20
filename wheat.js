/*
Calculate the number of grains of wheat on a chessboard given that the number on each square doubles.
There once was a wise servant who saved the life of a prince. The king promised to pay whatever the servant could dream up. Knowing that the king loved chess, the servant told the king he would like to have grains of wheat. One grain on the first square of a chess board. Two grains on the next. Four on the third, and so on.

There are 64 squares on a chessboard.
Write code that shows:
-how many grains were on each square, and
-the total number of grains
*/

/*
const grainsOnASquare = (square) => Math.pow(2,square -1);

console.log(grainsOnASquare(1));
console.log(grainsOnASquare(2));
console.log(grainsOnASquare(3));
console.log(grainsOnASquare(4));
console.log(grainsOnASquare(5));
console.log(grainsOnASquare(6));
console.log(grainsOnASquare(7));
console.log(grainsOnASquare(8));
console.log(grainsOnASquare(9));
console.log(grainsOnASquare(10));
console.log(grainsOnASquare(64));

const totalGrainsUpToSquare = (totalSquares) => {
    const chessboardArray = [];
    for(let i = 0; i < (totalSquares); i++){
        chessboardArray.push(Math.pow(2,i));
    }
    const total = chessboardArray.reduce((accumulator,currentValue) => accumulator + currentValue);
    return total;
}
console.log(totalGrainsUpToSquare(5));
console.log(totalGrainsUpToSquare(64));
*/

class Chessboard {
    constructor(totalSquaresOnBoard){
        this.totalSquaresOnBoard = totalSquaresOnBoard;
    }

    grainsOfWheatOnAParticularSquare = (square) => BigInt(2**(square-1));

    get totalWheatGrainsOnChessBoard() {
        let runningTotalGrains = 0;
        for(let i = 0; i < this.totalSquaresOnBoard; i++){
            runningTotalGrains += Math.pow(2,i);
        }
        return BigInt(runningTotalGrains);
    }
}

//the n is fine, it's just the console log so don't worry about it

const chessboardWith64Squares = new Chessboard(64);
console.log(chessboardWith64Squares.grainsOfWheatOnAParticularSquare(1));
console.log(chessboardWith64Squares.grainsOfWheatOnAParticularSquare(2));
console.log(chessboardWith64Squares.grainsOfWheatOnAParticularSquare(3));
console.log(chessboardWith64Squares.grainsOfWheatOnAParticularSquare(4));
console.log(chessboardWith64Squares.grainsOfWheatOnAParticularSquare(5));
console.log(chessboardWith64Squares.grainsOfWheatOnAParticularSquare(63));
console.log(chessboardWith64Squares.grainsOfWheatOnAParticularSquare(64));
console.log(chessboardWith64Squares.totalWheatGrainsOnChessBoard);
console.log(chessboardWith64Squares.totalSquaresOnBoard);

const chessboardWith63Squares = new Chessboard(63);
console.log(chessboardWith63Squares.grainsOfWheatOnAParticularSquare(1));
console.log(chessboardWith63Squares.grainsOfWheatOnAParticularSquare(2));
console.log(chessboardWith63Squares.grainsOfWheatOnAParticularSquare(3));
console.log(chessboardWith63Squares.grainsOfWheatOnAParticularSquare(4));
console.log(chessboardWith63Squares.grainsOfWheatOnAParticularSquare(5));
console.log(chessboardWith63Squares.grainsOfWheatOnAParticularSquare(10));
console.log(chessboardWith63Squares.totalWheatGrainsOnChessBoard);
console.log(chessboardWith63Squares.totalSquaresOnBoard);