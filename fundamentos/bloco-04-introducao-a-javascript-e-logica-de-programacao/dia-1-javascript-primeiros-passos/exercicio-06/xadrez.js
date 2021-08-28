
function chess(piece) {
    piece = piece.toLowerCase()

    if (piece === "rei") {
        return "Pode mover-se em qualquer direção, porém apenas uma casa por vez, como indicam os pontos vermelhos na figura abaixo."
    }
    else if (piece === "dama") {
        return "Assim como o Rei, pode mover-se em qualquer direção (vertical, horizontal e diagonal), porém quantas casas quiser, desde que estejam livres."
    }
    else if (piece === "torre") {
        return "Move-se em linha reta, tanto na vertical quanto na horizontal, quantas casas quiser."
    } else {
        return "Erro: Nome da peça não encontrado."
    }
}

console.log(chess("ReI"));
console.log(chess("abf"));