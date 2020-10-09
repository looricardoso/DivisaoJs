let resultado = 0;
resultado = Number(resultado);

let numerador = prompt('Digite o numerador: ') || '';
numerador = Number(numerador);

let denominador = prompt('Digite o denominador: ') || '';
denominador = Number(denominador);

if (Number.isNaN(numerador) || Number.isNaN(denominador)) {
    alert('Erro no cálculo, insira valores válidos');
} else if (denominador > 0) {
    resultado=numerador/denominador;
    alert(`${numerador} dividido por ${denominador} é ${resultado}`);
    } else {
        alert('Não é possível dividir por zero.');
};