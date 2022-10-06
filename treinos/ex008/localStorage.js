//1
localStorage.setItem('chave', 'texto a ser armazenado')
let sessao1 = sessionStorage.getItem('chave')

//2
localStorage['chave'] = 'texto a ser armazenado'
let sessao2 = sessionStorage['chave']

//3
localStorage.chave = 'texto a ser armazenado'
let sessao3 = sessionStorage.chave

/*
    Os dados permanecem persistentes até que sejam explicitamente removidos
*/