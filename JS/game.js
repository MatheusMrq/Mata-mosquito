let body = document.querySelector("body");
let img = document.createElement("img");
let sc = document.createElement("h1");

let death = true;
let score = 0;
let life = 3;

img.style.transform = "scale(0.3)";
img.src = "../imgs/Mosquito.webp";
img.style.position = "absolute";

sc.textContent = `Pontos: ${score}`;
document.body.appendChild(sc);

function alteraTamanhoMosquito() {
    const tamanho = Math.random() * (0.4 - 0.2) + 0.2;
    const rotacao = Math.random() < 0.5 ? -1 : 1;
    img.style.transform = `scale(${tamanho}) scaleX(${rotacao})`;
}

function geraPosicao() {
    let y = Math.random() * window.innerHeight * 0.75;
    let x = Math.random() * window.innerWidth * 0.75;

    img.style.top = `${y}px`;
    img.style.left = `${x}px`;
}

img.addEventListener("click", function () {
    death = false;
    img.style.transform = "scale(0)";
    score++; 
    sc.textContent = `Pontos: ${score}`;
});

setInterval(function () {
    geraPosicao();
    alteraTamanhoMosquito();

    if (death == true) {
        life = life - 1;

        let gorro = document.getElementById(`gorro-${life + 1}`);
        if (gorro) {
            gorro.src = "../imgs/gorro_vazio.png"; 
        }

        console.log("Mudou Gorro!");
        console.log(life);

        if (life == 0) {
            setTimeout(() => {
                console.log('Timeout de 10ms');
                alert("Morreu!");
                score = 0;
                sc.textContent = `Pontos: ${score}`;
            }, 10);
        }

    } else {
        death = true; 
    }

}, 3000);

body.appendChild(img);
