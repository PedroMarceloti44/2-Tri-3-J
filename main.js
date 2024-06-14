const botoes  = document.querySelectorAll(".botao");
const conteudo = document.querySelectorAll(".abas-conteudo");
const tempo = document.querySelectorAll(".contador");
tempo[0].textContent="Ola"
const tempoObjetivo = new Date(2024,11,24,23,59);
const tempoObjetivo2 = new Date();

const agora = new Date();
tempo[1].textContent=agora
console.log(tempo);
for (let i = 0; i < botoes.length; i++) {
    botoes[i].onclick = function(){
        for (let j=0;j<botoes.length;j++){
            botoes[j].classList.remove("ativo");
            conteudo[j].classList.remove("ativo")
        }
        botoes[i].classList.add("ativo")
        conteudo[i].classList.add("ativo")
    }
}