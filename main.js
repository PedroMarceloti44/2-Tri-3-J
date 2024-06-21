const botoes  = document.querySelectorAll(".botao");
const conteudo = document.querySelectorAll(".abas-conteudo");
const tempo = document.querySelectorAll(".contador");
const tempoObjetivo1 = new Date(2024,11,24,23,59);
const tempoObjetivo2 = new Date(2024,9,28,23,59);
const tempoObjetivo3 = new Date(2025,0,1,23,59);
const tempoObjetivo4 = new Date(2025,2,14,23,59);
const agora = new Date();
let segundos;
let minutos;
let horas;
let dias;

segundos = (tempoObjetivo1-agora)/1000
minutos = segundos/60
horas = minutos/60
dias = horas/24

segundos=Math.floor(segundos);
minutos=Math.floor(minutos);
horas=Math.floor(horas);
dias=Math.floor(dias);

tempo[0].textContent = `Faltam ${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos`
tempoObjetivo1-agora;
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