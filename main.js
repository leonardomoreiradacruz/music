function tocaSom(idElementoAudio){
    const elemento = document.querySelector(idElementoAudio);
    if (elemento === null) {
      alert('elemento não encontrado');
    }

}
const listaDeTeclas=document.querySelectorAll('.tecla');


// Estrutura de repetição - Enquanto
for( let contador = 0; contador < listaDeTeclas.length; contador++){
   const tecla = listaDeTeclas[contador]
   const instrumento = tecla.classList[1];
  const idAudiom = '#som_ ${instrumento}' ;
     
      console.log(idAudiom);
   
   
   tecla.onclick = function(){
        tocaSom(idAudiom);
     };
      tecla.onkeydown = function(evento){
         if(evento.code ==='Enter' || evento.code ==='Space'){
         tecla.classList.add('ativa');
         }
      };
 tecla.onkeydown = function() {
    tecla.classList,add('ativa');
 };
 tecla.onkeydown = function(){
  tecla.classList.remove('ativa');
};
 console.log(instrumento);
console.log(contador);

}
