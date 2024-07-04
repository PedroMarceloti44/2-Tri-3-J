const botoes  = document.querySelectorAll(".botao");
const conteudo = document.querySelectorAll(".abas-conteudo");
const tempo = document.querySelectorAll(".contador");
const tempoObjetivo1 = new Date(2024,11,24,23,59);
const tempoObjetivo2 = new Date(2024,9,28,23,59);
const tempoObjetivo3 = new Date(2025,0,1,23,59);
const tempoObjetivo4 = new Date(2025,2,14,23,59);
const agora = new Date();
let segundos = Math.floor((tempoObjetivo1-agora)/1000)
let minutos = Math.floor(segundos/60)
let horas = Math.floor(minutos/60)
let dias = Math.floor(horas/24)

segundos = segundos%60
minutos = minutos%60
horas = horas%24

tempo[0].textContent = `Faltam ${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos`
console.log(tempo);
for (let i = 0; i < botoes.length; i++) {
    botoes[i].onclick = function(){
        for (let j=0;j<botoes.length;j++){
            botoes[j].classList.remove("ativo");
            conteudo[j].classList.remove("ativo")
        }
        botoes[i].classList.add("ativo ")
        conteudo[i].classList.add("ativo")
    }
}