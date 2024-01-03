console.log("Qual o nível do seu herói?");

let nomeHeroi = "Sieghart"
let xp = 1000
let xpHeroi = 10000
let nivel = "ferro!"


while(xpHeroi <= 1000){

    console.log("O herói " + nomeHeroi + " está no nível " + nivel);
    xpHeroi++
    break;
}

while(xpHeroi >= 1001  && xpHeroi <= 2000  ){

    let nivel = "bronze!"
    console.log("O herói " + nomeHeroi + " está no nível " + nivel);
    xpHeroi++
    break;
}
    
while(xpHeroi >= 2001  && xpHeroi <= 5000 ){

    let nivel = "prata!"
    console.log("O herói " + nomeHeroi + " está no nível " + nivel);
    xpHeroi++
    break;
}

while(xpHeroi >= 5001  && xpHeroi <= 7000 ){

    let nivel = "ouro!"
    console.log("O herói " + nomeHeroi + " está no nível " + nivel);
    xpHeroi++
    break;
}

while(xpHeroi >= 7001 && xpHeroi <= 8000  ){

    let nivel = "platina!"
    console.log("O herói " + nomeHeroi + " está no nível " + nivel);
    xpHeroi++
    break;
}

while(xpHeroi >= 8001  && xpHeroi <= 9000  ){

    let nivel = "ascendente!"
    console.log("O herói " + nomeHeroi + " está no nível " + nivel);
    xpHeroi++
    break;
}

while(xpHeroi >= 9001 && xpHeroi <= 10000  ){

    let nivel = "imortal!"
    console.log("O herói " + nomeHeroi + " está no nível " + nivel);
    xpHeroi++
    break;
}

while(xpHeroi > 10001){

    let nivel = "Radiante!"
    console.log("O herói " + nomeHeroi + " está no nível " + nivel);
    xpHeroi++
    break;
}
