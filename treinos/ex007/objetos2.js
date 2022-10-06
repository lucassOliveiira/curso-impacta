// Função Normal
function func(x) {
    console.log(x)
}
func('JavaScript')

//Função Anonima
let funcao = function(x) {
    console.log(x)
}
funcao('React JS')

//Função 'new Function'
let funcao2 = new Function('x', 'console.log(x)')
funcao2('React Native')