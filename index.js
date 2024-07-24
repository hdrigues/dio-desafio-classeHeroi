// ## Objetivo:

// Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
// depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

// Se vitórias for menor do que 10 = Ferro
// Se vitórias for entre 11 e 20 = Bronze
// Se vitórias for entre 21 e 50 = Prata
// Se vitórias for entre 51 e 80 = Ouro
// Se vitórias for entre 81 e 90 = Diamante
// Se vitórias for entre 91 e 100= Lendário
// Se vitórias for maior ou igual a 101 = Imortal

// ## Saída

// Ao final deve se exibir uma mensagem:
// "O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"
//===========================================

//Declarações
let soma = 0
let ranking = " "
let vitoria = 11 //alterar para testar
let derrota = 1 //alterar para testar

soma = comparativo(vitoria, derrota) //usando função soma
ranking = classificador(soma) //usando função classificador

//Console que printa a diferença entre vitoria e derrota juntamente com o ranking que o heroi esta
console.log("O Herói tem de saldo de " + soma + " e está no nível de " + ranking)

//função que soma vitoria e derrota e retorna o resutado
function comparativo(numA, numB){
    return numA-numB
}
//função que recebera o valor da diferença das partidas e classicara o ranking e retorna a string com o ranking
function classificador(ponto){
    if(ponto<=10){
        return "ferro"
    }else if((ponto>10) && (ponto<=20)){
        return "bronze"
    }else if((ponto>20) && (ponto<=50)){
        return "prata"
    }else if((ponto>50) && (ponto<=80)){
        return "ouro"
    }else if((ponto>80) && (ponto<=90)){
        return "diamante"
    }else if((ponto920) && (ponto<=100)){
        return "Lendario"
    }else{
        return "Imortal"
    }
}