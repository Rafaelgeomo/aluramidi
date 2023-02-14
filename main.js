function tocaSom (seletorAudio) {
   const elemento = document.querySelector(seletorAudio);

   if (elemento && elemento.localName === 'audio') { //Se elemento for nulo E nome do elemento for audio tocar, senao dar a msg abaixo
        elemento.play();
   }
   else {
     console.log('Elemento não encontrado ou seletor inválido');
   }
 
} 
const listaDeTeclas = document.querySelectorAll('.tecla');


for (let contador=0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];     
    const idAudio = `#som_${instrumento}`; //template string
    
     tecla.onclick = function () {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (evento) { //evento quando aperta uma tecla do teclado
              
        if (evento.code === 'Space'||evento.code === 'Enter') {
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa'); //evento quando soltar uma tecla do teclado
    }

}


