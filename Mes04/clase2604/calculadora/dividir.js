function dividir(num1, num2){
    let num3;
    if (num1 == 0 || num2 == 0){
        console.log ('No se puede dividir por cero');
    } else {
        num3 = num1 / num2;
    }

    return num3;
}

module.exports = dividir;