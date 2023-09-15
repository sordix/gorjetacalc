function formatMoney(value) {
    value = Math.ceil(value *100) / 100
    value = value.toFixed(2)
    return 'R$ ' + value
}

function stats () {

    let kiss = Number(document.getElementById('yourBill').value)
    let porctKiss = document.getElementById('tipInput').value
    let amount = document.getElementById('splitInput').value

    let valueKiss = kiss * (porctKiss / 100);
    let totalKiSS = kiss + valueKiss
    let amountKiss = totalKiSS / amount

    document.getElementById('tipPercent').innerHTML = porctKiss + '%'
    document.getElementById('tipValue').innerHTML = formatMoney(valueKiss)
    document.getElementById('totalWithTip').innerHTML = formatMoney(totalKiSS)
    document.getElementById('splitValue').innerHTML = amount + ' Pessoas' 
    document.getElementById('billEach').innerHTML = formatMoney(amountKiss / amount)

}

