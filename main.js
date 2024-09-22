
//const temperaturas = document.querySelectorAll('.temps').value = 0;
const tempC = document.querySelector('#tempC');
const tempF = document.querySelector('#tempF');
const tempK = document.querySelector('#tempK');

const botao = document.querySelector('.botao').onclick = function (){
    //verifica se temp é um valor valido
    if(!tempC.value){
        tempC.value = 0;
    }

    tempF.value = (parseFloat(tempC.value) * 9/5)+32;
    tempK.value = parseFloat(tempC.value) + 273.15;
}