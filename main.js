const botoes  = document.querySelectorAll(".botao");
const conteudo = document.querySelectorAll(".abas-conteudo");
const tempo = document.querySelectorAll(".contador");

const tempoObjetivo1 = new Date(2030,11,24,23,59);
const tempoObjetivo2 = new Date(2030,9,28,23,59);
const tempoObjetivo3 = new Date(2030,0,1,23,59);
const tempoObjetivo4 = new Date(2023,2,14,23,59);

function calculaTempo(tempoObjetivo){
const agora = new Date();
let segundos 
let minutos
let horas
let dias
segundos = Math.floor((tempoObjetivo-agora)/1000)
minutos = Math.floor(segundos/60)
horas = Math.floor(minutos/60)
dias = Math.floor(horas/24)

segundos = segundos%60
minutos = minutos%60
horas = horas%24

if(segundos >=0){
   return `Faltam ${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos`
} else{
    return 'Prazo finalizado!'
 }
}
tempo[0].textContent = calculaTempo(tempoObjetivo1);
tempo[1].textContent = calculaTempo(tempoObjetivo2);
tempo[2].textContent = calculaTempo(tempoObjetivo3);
tempo[3].textContent = calculaTempo(tempoObjetivo4);

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