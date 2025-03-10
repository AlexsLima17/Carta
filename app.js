/**
 * Sorteio deuma Carta 
 * @author Alex Lima
 */

function sortear() {

    let nipes = ['♥','♦','♣','♠'];

    let faces = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];
 
    // Sorteio do índice do vetor

    let nipeSorteado = nipes[Math.floor(Math.random() * nipes.length)];

    let faceSorteada = faces[Math.floor(Math.random() * faces.length)];
 
    // Determinar a cor com base no nipe sorteado

    let cor = (nipeSorteado === '♥' || nipeSorteado === '♦') ? '#ff0000' : '#000';
 
    // Renderizar o canto superior esquerdo da carta

    document.getElementById('supEsq').innerHTML = `<div>${faceSorteada}</div> <div>${nipeSorteado}</div>`;

    document.getElementById('supEsq').style.color = cor;
 
    // Renderizar o centro da carta

    let cc = document.getElementById('centroCarta');

    if (faceSorteada === 'J') {

        cc.innerHTML = `<img src="./img/valete.png" alt="Valete" width="150" height="150">`;

    } else if (faceSorteada === 'Q') {

        cc.innerHTML = `<img src="./img/dama.png" alt="Dama" width="150" height="150">`;

    } else if (faceSorteada === 'K') {

        cc.innerHTML = `<img src="./img/rei.png" alt="Rei" width="150" height="150">`;

    } else {

        cc.innerHTML = `${nipeSorteado}`;

        cc.style.color = cor;

    }
 
    // Renderizar o canto inferior direito da carta

    document.getElementById('infDir').innerHTML = `<div>${faceSorteada}</div> <div>${nipeSorteado}</div>`;

    document.getElementById('infDir').style.color = cor;

}
 
