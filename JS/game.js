let body = document.querySelector("body");

let img = document.createElement("img");
img.style.transform = "scale(0.3)";

img.src = "../imgs/Mosquito.webp";
img.style.position = "absolute";

function alteraTamanhoMosquito() {
    const tamanho = Math.random() * (0.4 - 0.2) + 0.2;
    const rotacao = Math.random() < 0.5 ? -1 : 1;
    console.log("Tamanho do mosquito: ", tamanho);
    img.style.transform = `scale(${tamanho}) scaleX(${rotacao})`;
}

function geraPosicao(){
    let y = Math.random() * window.innerHeight * 0.75;
    let x = Math.random() * window.innerWidth * 0.75;

    img.style.top = `${y}px`
    img.style.left = `${x}px`
}

setInterval(function(){
    geraPosicao();
    alteraTamanhoMosquito();
}, 1000)



body.appendChild(img);