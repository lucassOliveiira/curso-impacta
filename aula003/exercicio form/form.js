var formulario = document.getElementById('formulario');
var msg = document.getElementById('msg');
/*var salario = document.getElementById('salario');
var internet = document.getElementById('internet');
var luz = document.getElementById('luz');
var gasolina = document.getElementById('gasolina');
var saldo = document.getElementById('saldo');*/
var ident = document.querySelectorAll('#saldo', '#salario', '#internet', '#luz', '#gasolina')

$(document).ready(function(){
    $('input').focus(function(){
        $(this).css('background-color', '#ccc');
    });
    $('input').blur(function(){
        $(this).css('background-color', '#fff')
    });
});

function clicar() {
    var salario1 = Number(salario.value);
    var internet1 = Number(internet.value);
    var luz1 = Number(luz.value);
    var gasolina1 = Number(gasolina.value);
    saldo.value = (salario1 - (internet1 + luz1 + gasolina1));
    if (saldo.value < 1) {
        msg.innerHTML = '<strong>SALDO NEGATIVO!</strong>';
    } else if (saldo.value == 0 && saldo.value == null){
        alert('[ERRO] Insira os dados corretamente!....')
    } else {
        msg.innerHTML = '<strong>SALDO POSITIVO!</strong>';
    }
}


