let qtdVitorias = 1000
let qtdDerrotas = 90
let saldo = saldoVitorias(qtdVitorias, qtdDerrotas)
let nivel = calcNivel(saldo)
console.log(`O heroi tem um saldo de ${saldo} está no nível de ${nivel}`)

function classificar(){
    let qtdVitorias = document.getElementById('vit').value
    let qtdDerrotas = document.getElementById('der').value
    let res = document.querySelector('p#res')
    let saldo = saldoVitorias(qtdVitorias, qtdDerrotas)
    let nivel = calcNivel(saldo)

    res.innerHTML = `O heroi tem um saldo de ${saldo} está no nível de ${nivel}`
}

function saldoVitorias(vit, der){
    return vit - der
}

function calcNivel(salVit){
    if(salVit <= 10)
        return "Ferro"
    else if(salVit <= 20)
        return "Bronze"
    else if(salVit <= 50)
        return "Prata"
    else if(salVit <= 80)
        return "Ouro"
    else if(salVit <= 90)
        return "Diamante"
    else if(salVit <= 100)
        return "Lendario"
    else
        return "Imortal"
}