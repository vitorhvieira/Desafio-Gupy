function geral(){
function a(){
    let contador = 0;
    let i = 1;
    let resp = document.getElementById("qA");
    let lista = [];
    while(contador < 5){
        if(i % 2 !== 0) {
            lista.push(i);
            contador++;
    }
    i++;
}
resp.innerHTML = lista.join(", ");
}

a();

function b(){
   let resp = document.getElementById("qB");
   let lista = [];
   let num = 2;
    for(let i = 0; i < 6; i++){
            lista.push(num);
            num *= 2;
}
resp.innerHTML = lista.join(", ");
}

b();

function c(){
    let num = 0;
    let resp = document.getElementById("qC");
    let lista = [];
    for(let i = 0; i <= 7; i++){
         num = i * i;
         lista.push(num);
    }
resp.innerHTML = lista.join(", ");
}

c();

function d(){
    let num = 0
    let resp = document.getElementById("qD");
    let lista = [];
    for (let i = 2; i < 12; i+=2){
            num = i * i;
            lista.push(num);
    }
    resp.innerHTML = lista.join(", ");
}

d();

function e(){

    let num = 1;
    let ant = 0;
    let prox = 1;
    let resp = document.getElementById("qE");
    let lista = [];
    for (let i = 0; i < 7 ; i++){
        num = ant + prox;
        prox = ant;
        ant = num

        lista.push(num);
    }
    resp.innerHTML = lista.join(", ");
}
e();

}

function f(){
    const palavra = document.getElementById("palavra").value;
    let resp = document.getElementById("qF");
    let num = document.getElementById("num");
    let ultimonum = num.innerHTML;
    const letra = "d";

    if(palavra.startsWith(letra)){
        resp.innerHTML = "A palavra começa com a letra desejada!";
      } else {
        resp.innerHTML = "A palavra não começa com a letra desejada.";
      }
    
    switch (palavra){

        case "dois":
            num.innerHTML =`2`;
            break;

        case "dez":
            num.innerHTML =`${ultimonum},10`;
            break;
        
        case "doze":
            num.innerHTML =`${ultimonum},12`;
            break;

        case "dezesseis":
            num.innerHTML =`${ultimonum},16`;
            break;

        case "dezessete":
            num.innerHTML =`${ultimonum},17`;
            break;

        case "dezoito":
            num.innerHTML =`${ultimonum},18`;
            break;

        case "dezenove":
            num.innerHTML =`${ultimonum},19`;
            break;

        case "duzentos":
            num.innerHTML =`${ultimonum},200`;
            break;
    }
}
