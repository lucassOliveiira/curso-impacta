var tarefas = $('#tarefas');
var concluir = $('#concluir_tarefas');
var concluidas = $('#concluidas');
var texto = $('#tarefa_form');
var data = $('#data_form');
var aluno = $('#aluno_form');

// CRIANDO VARIÁVEIS PARA MANIPULAR OS VETORES E ELIMINAR UMA TAREFA
var executado = '';
var chave = 0;
var palavra = ''; 

// LENDO DADOS NO localStorage E PREENCHENDO DA TABELA DE CADASTROS
var tarefabd = localStorage.getItem('tarefa');
var databd = localStorage.getItem('data');
var alunobd = localStorage.getItem('aluno');

if (tarefabd != null) {
    var vetorbd = tarefabd.split(',');
    var datasbd = databd.split(',');
    var alunosbd = alunobd.split(',');
} else {
    vetorbd = '';
    datasbd = '';
    alunosbd = '';
}

// LAÇO PARA PREENCHER A TABELA DE TAREFAS A PARTIR DO localStorage
for (var i = 0; i < (vetorbd.length); i++) {
    var body = tarefas.find('tbody');
    var tr = $('<tr></tr>');
    tr.append('<td><input type="checkbox"></td>');
    var td = $('<td></td>');
    var td2 = $('<td></td>');
    var td3 = $('<td></td>');
    
    td.text(vetorbd[i]);
    td2.text(datasbd[i]);
    td3.text(alunosbd[i]);

    tr.append(td);
    tr.append(td2);
    tr.append(td3);

    body.append(tr);
}

// LENDO AS TAREFAS EXCLUÍDAS PARA MONTAR A TABELA INICIAL (refresh)
var Texbd = localStorage.getItem('TExclui');
var Dexbd = localStorage.getItem('DExclui');
var Rexbd = localStorage.getItem('RExclui');

if (Texbd != null) {
    var vetorex = Texbd.split(',');
    var datasex = Dexbd.split(',');
    var alunosex = Rexbd.split(',');
} else {
    var vetorex = '';
    var datasex = '';
    var alunosex = '';
}
// LAÇO PARA PREENCHER A TABELA DE TAREFAS EXCLUÍDAS
for (var i = 0; i < (vetorex.length); i++) {
    var body = concluidas.find('tbody');
    var tr = $('<tr></tr>');
    tr.append('<td><input type="checkbox"></td>');

    var td = $('<td></td>');
    var td2 = $('<td></td>');
    var td3 = $('<td></td>');

    td.text(vetorex[i]);
    td2.text(datasex[i]);
    td3.text(alunosex[i]);

    tr.append(td);
    tr.append(td2);
    tr.append(td3);

    body.append(tr);
    $('#concluidas input[type="checkbox"]').attr('disabled', true);
}

// MOSTRAR NA TABELA OS DADOS DO FORMULÁRIO
$('#form_tarefas').on('submit', function(ev){
    ev.preventDefault();

    if (validarCampos() === false) {
        return false;
    }

    var body = tarefas.find('tbody');
    var tr = $('<tr></tr>');
    tr.append('<td><input type="checkbox"></td>');

    var texto = $('#tarefa_form').val();
    var data = $('#data_form').val();
    var aluno = $('#aluno_form').val();
    // TRANSFORMAR A DATA NO FORMATO PORTUGUÊS
    var parts = data.split('-');
    // parts[2] = dia | parts[1] = mes | parts[0] = ano
    var ndata = parts[2] + '/' + parts[1] + '/' + parts[0];

    var td = $('<td></td>');
    td.text(texto);
    tr.append(td);

    var td2 = $('<td></td>');
    td2.text(ndata);
    tr.append(td2);

    var td3 = $('<td></td>');
    td3.text(aluno);
    tr.append(td3);
    
    body.append(tr);

    // LER O localStorage PARA VERIFICAR DADOS ANTERIORES
    var tanterior = localStorage.getItem('tarefa');
    var danterior = localStorage.getItem('data');
    var ranterior = localStorage.getItem('aluno');
    
    if (tanterior == null) {
        var aTarefa = texto;
        var aData = ndata;
        var aAluno = aluno;
    } else {
        var aTarefa = tanterior + ',' + texto;
        var aData = danterior + ',' + ndata;
        var aAluno = ranterior + ',' + aluno;
    }

    // GARAVANDO localStorage
    localStorage.setItem('tarefa', aTarefa);
    localStorage.setItem('data', aData);
    localStorage.setItem('aluno', aAluno);
});

// CONCLUSÃO DE TAREFAS
concluir.click(function(){
    var checked = $('#tarefas input:checked');
    var tarefa_concluir = checked.parent().parent();

    $('#concluidas tbody').append(tarefa_concluir);
    $('#concluidas input[type="checkbox"]').attr('disabled', true);

    // LER A TABELA EXCLUÍDA E CRIAR UM OBJETO COM AS TDs
    $('#concluidas tbody tr').each(function(){
        var colunas = $(this).children();
        var executado = {
            'excluir': $(colunas[1]).text(),
            'dataex': $(colunas[2]).text(),
            'alunoex': $(colunas[3]).text()
        };
        palavra = executado.excluir;
    });
    // LER OS VETORES NO localStorage, PARA DEPOIS ALTERA-LO
    var tarefabd = localStorage.getItem('tarefa');
    var databd = localStorage.getItem('data');
    var alunobd = localStorage.getItem('aluno');

    if (tarefabd != null) {
        var vetorbd = tarefabd.split(',');
        var datasbd = databd.split(',');
        var alunosbd = alunobd.split(',');
        // DESCOBRIR O ÍNDICE REFERENTE Á TAREFA CONCLUÍDA/EXCLUÍDA 
        // POR MEIO DA CHAVE ( índice do vetor )
        chave = vetorbd.indexOf(palavra);

        // ELIMINAR A TAREFA DA TABELA PRINCIPAL 
        var TFeitas = vetorbd.splice(chave, 1);
        var DFeitas = datasbd.splice(chave, 1);
        var AFeitas = alunosbd.splice(chave, 1);

        // VERIFICAR O BD DAS TAREFAS EXCLUÍDAS
        // SE EXISTIR então ACRESCENTAR NO ÍTEM EXCLUÍDO, senão, COMEÇAR VETORES NOVOS
        var Tex = localStorage.getItem('TExclui');
        var Dex = localStorage.getItem('DExclui');
        var Rex = localStorage.getItem('RExclui');

        if (Tex != null) {
            var vetorEX = Tex.split(',');
            var datasEX = Dex.split(',');
            var alunosEX = Rex.split(','); 

            var aTX = vetorEX + ',' + TFeitas;
            var dTX = datasEX + ',' + DFeitas;
            var rTX = alunosEX + ',' + AFeitas;
        } else {
            var aTX = TFeitas;
            var dTX = DFeitas;
            var rTX = AFeitas;
        }
        localStorage.setItem('TExclui', aTX);
        localStorage.setItem('DExclui', dTX);
        localStorage.setItem('RExclui', rTX);
    } else {
        vetorbd = '';
        datasbd = '';
        alunosbd = '';
    }
    if (vetorbd != '') {
        localStorage.setItem('tarefa', vetorbd);
        localStorage.setItem('data', datasbd);
        localStorage.setItem('aluno', alunosbd);
    } else {
        localStorage.removeItem('tarefa');
        localStorage.removeItem('data');
        localStorage.removeItem('aluno');
    }
});

// FUNÇÃO PARA VALIDAR ERROS E EVITAR CAMPOS 'VAZIOS' NO FORM
function validarCampos() {
    if (texto.val() === '' || data.val() === '' || aluno.val() === '') {
        $('#erros').css('background-color', 'red');
        $('#erros').css('font-weight', 'bold');
        $('#erros').css('padding', '10px');
        $('#erros').text('Preencha todos os Campos!');
        return false;
    }
    return true;
};
