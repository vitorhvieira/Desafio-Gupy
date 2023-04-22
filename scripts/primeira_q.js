 function calculo(){
    let rest = document.getElementById("calculo");
    let indice = 13;
    let soma = 0;
    let k = 0;

    while(k < indice){
        k = k + 1;
        soma = soma +k
    }
    rest.innerText=soma;
}

calculo();

