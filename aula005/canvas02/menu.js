var canvas = document.getElementById('pcanvas');
var ctx = canvas.getContext('2d');

var teclas = {};

var aula1 = {
    x: canvas.width/3 + 40,
    y: 180,
    font: '20px Impact',
    Text: 'AULA 1'
}

var aula2 = {
    x: canvas.width/3 + 40,
    y: 260,
    font: '20px Impact',
    Text: 'AULA 2'
}

var avatar = {
    x: canvas.width / 3,
    y: 100,
    direcaoy: 1,
    altura: 30,
    largura: 30,
    modificador: 0,
    velocidade: 2,
    raio: 15
}

// Evento que aguardara o uso do teclado - capturando a tecla usada
document.addEventListener('keydown', function(e){
    if (e.keyCode == 40)
    e.preventDefault();
    teclas[e.keyCode] = true;
}, false);

document.addEventListener('keyup', function(e){
    delete teclas[e.keyCode];
}, false);

function moveavatar() {
    if (38 in teclas && (avatar.y) >= aula1.y)
    avatar.y -= avatar.velocidade;
    if (40 in teclas && avatar.y <= aula2.y)
    avatar.y += avatar.velocidade;   
       
    if (avatar.y == aula1.y) {
        document.getElementById('aula1').style.display = 'block';
    }
    if (avatar.y == aula2.y) {
        document.getElementById('aula2').style.display = 'block';
    }
}

var image = new Image();
image.src = 'image.jpg';

function desenha() {
    ctx.clearRect(0,0, canvas.width, canvas.height);
    moveavatar();
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height)

    ctx.fillStyle = 'red';
    ctx.beginPath();
    ctx.arc(avatar.x, avatar.y, avatar.raio, 0, Math.PI * 2, true);
    ctx.fill();

    ctx.fillStyle = 'black';
    ctx.font = aula1.font;

    ctx.fillText(aula1.Text, aula1.x, aula1.y);
    ctx.fillText(aula2.Text, aula2.x, aula2.y);
}
setInterval(desenha, 20);
