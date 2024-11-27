/**
 * Sorteio deuma Carta 
 * @author Alex Lima
 */

function sortear() {
    let nipes = ['♥','♦','♣','♠']
    let faces = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"]
    // sorteio do índice do vetor
    let nipeSorteado = nipes [Math.floor(Math.random() * 4) ]
    let facesSorteada = faces [Math.floor(Math.random() * 13) ]

    // console.log(`${facesSorteado} de ${nipeSorteado}`)

    //Determinar a cor com base no nipe sorteado
    let cor
    if (nipeSorteado === '♥' || nipeSorteado === '♦') {
        cor = '#ff0000'
    }else {
        cor = '#000'
    }

    // renderizar o canto superior esquerdo da carta
    // a linha abaixo adiciona a div idenetificada como 'supEsq' a face e o nipe sorteando e também tags <div> adicionais
    document.getElementById('supEsq').innerHTML = `<div>${facesSorteada}</div> <div>${nipeSorteado}</div>`
    // a linha abaixo muda o css ref a tag identificada
    document.getElementById('supEsq').style.color = cor

    //renderizar o centro da carta
    let cc = document.getElementById('centroCarta')
    if(facesSorteada === 'J') {
        cc.innerHTML = `<img src="./img/valete.png"`
    }else if(facesSorteada ==='Q'){
        cc.innerHTML = `<img src="./img/dama.png"`
    }else if(facesSorteada ==='K'){
        cc.innerHTML = `<img src="./img/rei.png"`
    }else{
        cc.innerHTML = `${nipeSorteado}`
        cc.style.color = cor 

    }

    cc.innerHTML = `${nipeSorteado}`
    cc.style.color = cor 

    //renderizar o canto inferior direito da carta
    document.getElementById('infDir').innerHTML = `<div>${facesSorteada}</div> <div>${nipeSorteado}</div>`
    document.getElementById('infDir').style.color = cor
}

