// Podemos teruma variedade para o uso de funções

// 1. Passando como parâmetro
// 2. Definindo funções anônimas como callback
// 3. Definindo como atributo de outros objetos

//Item 3
let aluno = {
    nome: 'Lucas',
    curso: 'Desenvolvedor Front End',
    exibir: function(){
        console.log(`Nome = ${this.nome} \nCurso = ${this.curso}`)
    }
}
aluno.exibir()

console.log('================================')

/* Quanto a referência this, podemos ter diferentes valores, dependendo da chamada. O exemplo seguinte ilustra esse processo */

function exibirTexto() {
    /*o valor de this é alterado dependendo de onde ele é chamado*/
    console.log(this.mensagemTexto)
}

let willianShakespeare = {
    mensagemTexto: 'Grande poeta Willian Shakespeare',
    mostrar: exibirTexto
}
willianShakespeare.mostrar()

let tonyHawk = {
    mensagemTexto: 'Skatista',
    mostrar: exibirTexto
}
tonyHawk.mostrar()

let cintia = {
    mensagemTexto: 'Melhor Cabelereira de SP',
    //mostrar: exibirTexto
}
exibirTexto.call(cintia)