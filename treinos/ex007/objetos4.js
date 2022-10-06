/* 
    ☻ O objeto prototype é bastante importante em JS, pois é a partir dele que podemos difinir herança entre objetos (e não entre classes, como em Java ou C#)

    ☻ Todas as funções no JS possuem uma propriedade chamada 'prototype' que, por sua vez, possui uma propriedade chamada 'constructor', que referencia a própria função

    ☻ Em outras palavras, todos os objetos em JS são gerados com base em um protótipo, como se fosse um modelo pronto a partir do qual novos objetos são gerados
*/

function Pessoa(nome, idade) {
    this.nome = nome
    this.idade = idade
    //this.cursoOn = curso
    
    this.exibirInfo = function() {
        let msg
        msg = `Nome: ${this.nome} \nIdade: ${this.idade}`
    }
}
let pjose = new Pessoa('Jose', 32, 'Programação')

console.log(`Nome: ${pjose.nome} \nIdade: ${pjose.idade} \nCurso: ${pjose.cursoOn}`)

let plucas = new Pessoa('Lucas', 19, 'Desenvolvedor Mobile')
console.log(plucas)
/*
    ☻ O objeto referencido por 'pjose' herda as propriedades e métodos de seu protótipo, que é 'Pessoa.prototype'

    ☻ O termo 'Pessoa('Jose', 32) é equivalente a 'Pessoa.prototype.constructor('Jose', 32)'

    ☻ Neste sentido é possível executarmos a instrução que nos apresentara 'true'

    console.log(Pessoa.prototype.isPrototypeOf(pjose))
*/
//console.log(Pessoa.prototype.isPrototypeOf(pjose))

/*
    ☻ Todos os protótipos, como em Pessoa.prototype, herdam todas as definições de Obeject.prototype. Nãohá nenhum objeto acima de Object, de forma que sua propriedade prototype é null

    ☻ Apesar de não estar representando, o que temos é:

    Pessoa.prototype = new Object()

    ☻ Definir métodos e/ou propriedades no protótipo de um objeto fica automaticamente visível a todos os herdeiros

    ☻ Se em um objeto herdeiro for definido o mesmo método que existia no objeto pai, seu conteúdo fica sobrescrito no objeto herdeiro
*/

/* Suponhamos, agora que desejamos definir uma herança de Pessoa, por exemplo, uma função Aluno */
function Aluno(nome, idade, curso) {
    Pessoa.call(this, nome, idade)
    this.curso = curso

    //Esta instrução viabiliza a herança
    Aluno.prototype = new Pessoa(nome, idade)

    //Toda instância Aluno deve apontar para Aluno
    Aluno.prototype.constructor = Aluno

    //Agora vamos sobrescrever o método exibirInfo
    Aluno.prototype.exibirInfo = function(){
        let msg
        msg =  `Nome: ${nome} Idade: ${idade} Curso: ${this.curso}`
        return msg  
    }
}

