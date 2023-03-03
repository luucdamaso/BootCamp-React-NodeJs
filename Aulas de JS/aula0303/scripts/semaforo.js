const semaforoImg = document.getElementById("semaforo-img");
const semaforoDisc = document.getElementById("semaforo-descrição");

function trocarVermelho() {
    console.log("Mudar para o vermelho");
    semaforoImg.src = 'https://i.postimg.cc/MKS3MpWx/vermelho.png';
    semaforoDisc.innerHTML = 'Pare!'
}

function trocarAmarelo() {
    console.log("Mudar para amarelo");
    semaforoImg.src = 'https://i.postimg.cc/RCfbZHxX/amarelo.png';
    semaforoDisc.innerHTML = 'Atenção!'
}

function trocarVerde() {
    console.log("Mudar para verde");
    semaforoImg.src = 'https://i.postimg.cc/vHtqWwBn/verde.png';
    semaforoDisc.innerHTML = 'Pode ir!'
}