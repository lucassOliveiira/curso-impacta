//1
sessionStorage.setItem('chave', 'texto a ser armazenado')
let sessao1 = sessionStorage.getItem('chave')

//2
sessionStorage['chave'] = 'texto a ser armazenado'
let sessao2 = sessionStorage['chave']

//3
sessionStorage.chave = 'texto a ser armazenado'
let sessao3 = sessionStorage.chave

/*
    Os dados da sessão são disponíveis apenas na sessão que os criar
-
    Esses dados serão excluídos quando o usuário finalizar o navegador
*/