var listafrutas = document.getElementById('listafrutas');
var formulario = document.getElementById('formulario');
var novoitem = document.getElementById('novoitem');

var lista = ['Morango', 'Banana'];

for (var c = 0; c < lista.length; c++) {
    // CRIANDO UM ELEMENTO HTML - LI
    li = document.createElement('li');

    // INSERINDO UM ELEMENTO DA ARRAY NA LI
    li.innerText = lista[c];

    // ACRESCENTAR A LI NA UL OU LISTA
    listafrutas.append(li);
}

// LENDO O FORMULÁRIO PARA ACRESCENTAR O VALOR DIGITADO NA LISTA
formulario.onsubmit = function(ev) {
    ev.preventDefault();

    li = document.createElement('li');
    li.innerText = novoitem.value; // valor vindo do form
    listafrutas.append(li);
}
