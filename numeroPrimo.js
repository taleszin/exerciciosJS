// Crie uma função que recebe um inteiro positivo e teste para saber se ele é primo ou não. Faça um script que recebe um inteiro n e mostra todos os primos, de 1 até n.
function ePrimo(n){
    if (n<2){
        return 'não é primo'
    }
 for (let i=2; i < n; i++){
    if(n%i == 0){
        return 'não é primo'
    }
 }
 return ('é primo')
}
console.log(ePrimo(135))