let idadeDependente = 13

/*if(idadeDependente>=13){
    if(idadeDependente<=18){
        console.log("Seu dependente ja pode ter um cartao de credito proprio")
    }else{
        console.log("O seu dependente ja pode ter um cartao de credito vinculado ao seu ")
    }

}else{
    console.log("Consulte outras possibilidades no Labank")
}*/


//Ternario 

//idadeDependente === 13 ? console.log("A idade do dependente e 13 e ja pode ter um cartao"): console.log("Consulte outras possibilidades do labank")

//Swith Case

/*let cartao = Number(prompt("Solicitacao do cartao de credito, escolha uma opcao: \n 1- Facil \n 2- Black \n 3- Platinum \n4- MasterGold"))

switch (cartao){

    case 1:
        console.log("Cartao Facil adquirido")
        break;
    case 2:
        console.log("Cartao Black")
        break;
    case 3:
        console.log("Cartao Platinum")
        break;
    case 4:
        console.log("Cartao MasterGold")
        break;
    
    default:
        console.log("Escolha uma das opcoes disponiveis")


}*/


let numPrompt = Number(prompt("Informe um numero"))

if(numPrompt%2===0){
    if(numPrompt%3===0){
        console.log("O numero é divisivel por 2 e por 3")
    }
    else{console.log("O numero e divisivel por 2 mas não por 3")}
}else{
    console.log("O numero não é divisivel por 2")
}



numPrompt === 30 ? console.log("UFA ACERTEI!"):console.log("Nao foi dessa vez")

const numSwi = 6

switch (numPrompt){

    case 6:
        console.log("Numero 6")
        break;
    case 12:
        console.log("Numero 12")
        break;
    case 18:
        console.log("Numero 18")
        break;
    case 24:
        console.log("Numero 24")
        break;
    case 30:
        console.log("Numero 30")
        break;
    default:
        console.log("O numero é maior que 30 ou menor que 6")

}


