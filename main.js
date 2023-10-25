function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play();

}
const listaDeTeclas = document.querySelectorAll('.tecla');


// Estrutura de repetição - Enquanto
while(  contador < listaDeTeclas.length){
   const tecla = listaDeTeclas[contador]
   const instrumento = tecla.classList[1];
  const idAudiom = '#som_ ${instrumento}' ;
   
     tecla.onclick = function(){
        tocaSom(idAudiom);
     };
 tecla.onkeydown = function() {
    tecla.classList,add('ativa');
 }
 tecla.onkeydown = function(){
  tecla.classList.remove('ativa');
}
console.log(contador) ;

}
