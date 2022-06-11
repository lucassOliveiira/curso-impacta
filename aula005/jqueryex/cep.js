var buscar = $('#buscar');

buscar.submit(function(ev){
    ev.preventDefault();
    
    var cep = $('#cep').val();

    var servidor = 'https://api.postmon.com.br/v1/cep/' + cep;

    $.ajax({
        type: 'GET',
        url: servidor,
        success: function(json) {
            $('#logradouro').val(json.logradouro);
            $('#bairro').val(json.bairro);
            $('#estado').val(json.estado);
            $('#cidade').val(json.cidade);
        },
        error: function() {
            alert('CEP não encontrado!');
        }
    });
});
