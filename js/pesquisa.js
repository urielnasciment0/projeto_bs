var botoes = document.body.querySelectorAll(".erase");

for(var x=0; x<botoes.length; x++){
   botoes[x].addEventListener("click", function(){
       confirm('Você tem certeza?')
   });
}





