 function eqhoraria(){
    let resp = document.getElementById("resp");
    let x_carro = 110;
    let x_caminhao = - 80;
    let s_carro = 0;
    let s_caminhao = 100;
    let parada = 0.17;
    


    let tempo = ((s_caminhao / x_caminhao) * -1 + parada);

    
    let nv_vmedia = (s_caminhao/tempo);

    let x = ((x_carro * s_caminhao) / (x_carro + nv_vmedia)).toFixed(2);

    resp.innerHTML = x;
    
}

eqhoraria();


