var a = document.querySelector('#a');
var b = document.querySelector('#b');
var c = document.querySelector('#c');
var delta = document.querySelector('#deltar');
var resultado = document.querySelector('#resulta');
function calcular(){
   var deltaa = (parseFloat(b.value)*parseFloat(b.value))-4*parseFloat(a.value)*parseFloat(c.value);
    delta.innerHTML = deltaa;
    var raiz;
    if(parseFloat(deltaa) > 0 ){
        raiz = (Math.sqrt(parseFloat(deltaa)));
        var conta = (((-1)*parseFloat(b.value))-parseFloat(raiz))/(2*parseFloat(a.value));
        resultado.innerHTML = conta;
    }else{
        raiz = "Não possui raiz";
        resultado.innerHTML = raiz;
    }
   
    
   
    
}