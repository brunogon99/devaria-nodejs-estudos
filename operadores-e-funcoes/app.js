const readLine = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const validarNumeroInformado = (numero) =>{
    const resultado = Number.parseFloat(numero);
    if(!resultado){   
    console.log('O numéro informado não é válido');
   }
   return resultado;
}

const validarOperador = (operador) => {
    switch(operador){
        case '+':
        case '-':
        case '/':
        case '*':
        case '%':
            return operador;
        default:
            console.log('O operador informado não é valido.');
            return null;
    }
}

readLine.question('Favor informar um numero: ', (numero1) => {
    const numeroValidado1 = validarNumeroInformado(numero1);

    if(numeroValidado1){
        readLine.question('Favor informar o segundo numéro: ', (numero2) => {
            const numeroValidado2 = validarNumeroInformado(numero2);
            
            if(numeroValidado2){
                readLine.question('Favor informar o operador: ', (operador) =>{
                    const operadorvalidado = validarOperador(operador);
                    if(operadorvalidado){
                        switch(operadorvalidado){
                            case '+': console.log(`operador selecionado adição, resultado = ${numeroValidado1} + ${numeroValidado2} = ${numeroValidado1 + numeroValidado2}`);
                            break;
                            case '-': console.log(`operador selecionado subtração ,resultado = ${numeroValidado1} - ${numeroValidado2} = ${numeroValidado1 - numeroValidado2}`);
                            break;
                            case '*': console.log(`operador selecionado multiplicação, resultado = ${numeroValidado1} * ${numeroValidado2} = ${numeroValidado1 * numeroValidado2}`);
                            break;
                            case '/': console.log(`operador selecionado divisão, resultado = ${numeroValidado1} / ${numeroValidado2} = ${numeroValidado1 / numeroValidado2}`);
                            break;
                            case '%': console.log(`operador selecionado modulo, resultado = ${numeroValidado1} % ${numeroValidado2} = ${numeroValidado1 % numeroValidado2}`);
                            break;
                        default: break;
                        }
                    }
                })
            }
        }) 
    }  
})