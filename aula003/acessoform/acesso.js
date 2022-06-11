function acesso() {
    LogFixo = 'teste';
    SenFixa = '123456';

    var login1, senha1, mens;

    login1 = formLogin.login.value;
    senha1 = formLogin.senha.value;

    if (login1 == LogFixo && senha1 == SenFixa) {
        mens = 'Muito bem! Você acessou a página...';
    } else {
        mens = 'Login e/ou Senha incorretos...';
    }

    document.getElementById('resposta').innerHTML = mens;
}