window.onload = () => {
  generateSquare();
  initPieces(initWhitePieces, "white");
  initPieces(initBlackPieces, "black")
};

let initWhitePieces = {
  rook: [1, 8],
  knight: [2, 7],
  bishop: [3, 6],
  king: [4],
  queen: [5],
  pawn: [9, 10, 11, 12, 13, 14, 15, 16],
};


let initBlackPieces = {
    rook: [64, 57],
    knight: [63, 58],
    bishop: [62, 59],
    king: [61],
    queen: [60],
    pawn: [56, 55, 54, 53, 52, 51, 50, 49],
  };

const directorySVG = "/pieces/";
const format = ".svg";

const generateSquare = () => {
  let board = document.getElementsByClassName("Board")[0];

  for (let i = 0; i < 64; i++) {
    let square = document.createElement("div");
    let t = Math.floor(i / 8) % 2 == 0;
    if (t ^ (i % 2 == 0)) square.className = `Square Black x${i + 1}`;
    else square.className = `Square White x${i + 1}`;
    board.appendChild(square);
  }
};

function addPiece(position, piece) {
  let carre = document.getElementsByClassName(`x${position}`);
  carre.appendChild();
}

const initPieces = (initPlaces, color) => {
  for (const piece in initPlaces) {
    initPlaces[piece].map((x) => {
      let chessPiece = new ChessPiece(color, `${piece}`, true, x);
      let carre = document.getElementsByClassName(`x${chessPiece.position}`)[0];
      let pion = document.createElement("img");
      pion.src = `${directorySVG}${chessPiece.color}_${chessPiece.type}.svg`;
      pion.className = "Piece"
      carre.appendChild(pion);
    });
  }
};
