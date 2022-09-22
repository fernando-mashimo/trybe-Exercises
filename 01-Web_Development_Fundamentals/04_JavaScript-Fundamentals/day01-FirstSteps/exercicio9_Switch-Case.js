const pecaXadrez = "kinG";

switch(pecaXadrez.toLowerCase()) {
    case "bishop":
        console.log("Diagonal");
        break;
    case "pawn":
        console.log("1-Square Vertical or Diagonal-to-Attack");
        break;
    case "knight":
        console.log("L-movement, Jump");
        break;
    case "rook":
        console.log("Horizontal or Vertical");
        break;
    case "queen":
        console.log("Horizontal or Vertical or Diagonal");
            break;
    case "king":
        console.log("1-Square Horizontal or Vertical or Diagonal");
        break;
    default:
        console.log("Invalid piece.")
}

