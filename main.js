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
let segundos2;
let minutos2;
let horas2;
let dias2;
let segundos3;
let minutos3;
let horas3;
let dias3;
let segundos4;
let minutos4;
let horas4;
let dias4;
segundos = (tempoObjetivo1-agora)/1000
minutos = segundos/60
horas = minutos/60
dias = horas/24
segundos2 = (tempoObjetivo2-agora)/1000
minutos2 = segundos2/60
horas2 = minutos2/60
dias2 = horas2/24
segundos3 = (tempoObjetivo3-agora)/1000
minutos3 = segundos3/60
horas3 = minutos3/60
dias3 = horas3/24
segundos4 = (tempoObjetivo4-agora)/1000
minutos4 = segundos4/60
horas4 = minutos4/60
dias4 = horas4/24
segundos=Math.floor(segundos);
minutos=Math.floor(minutos);
horas=Math.floor(horas);
dias=Math.floor(dias);
segundos2=Math.floor(segundos);
minutos2=Math.floor(minutos);
horas2=Math.floor(horas);
dias2=Math.floor(dias);
segundos3=Math.floor(segundos);
minutos3=Math.floor(minutos);
horas3=Math.floor(horas);
dias3=Math.floor(dias);
segundos4=Math.floor(segundos);
minutos4=Math.floor(minutos);
horas4=Math.floor(horas);
dias4=Math.floor(dias);

tempo[0].textContent = `Faltam ${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos`
tempoObjetivo1-agora;
tempo[1].textContent = `Faltam ${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos`
tempoObjetivo2-agora;
tempo[2].textContent = `Faltam ${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos`
tempoObjetivo3-agora;
tempo[3].textContent = `Faltam ${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos`
tempoObjetivo4-agora;
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