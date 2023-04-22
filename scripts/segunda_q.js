
 function fib(){
    let inputNumero = document.getElementById('numero_fib').value;
    let inputResultado = document.getElementById('resultado_fib');
    let num = inputNumero;
    let r=0;
    let n1=0;
    let n2=1;
    let sequence = [0, 1];
    while(num > r){
        r = n1 + n2;
        n1 = n2;
        n2 = r;
        sequence.push(r);
    }
    
    if(num==0 || num==r){
        inputResultado.innerHTML=` A sequência é ${sequence.join(', ')}. </br> E o número ${num} pertence a sequência de Fibonacci. `;
    } else{
        inputResultado.innerHTML=`O número ${num} não pertence a sequência  de Fibonacci`;
    }

    
}


