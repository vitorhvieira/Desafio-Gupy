function reverter(){
    let palavra = document.getElementById("palavra").value;
    let resultado = document.getElementById("rest");
    let novap ="";
    
    for(let i = palavra.length - 1; i>=0 ; i--){
         novap += palavra[i];
    }
    rest.innerHTML = novap;
}
