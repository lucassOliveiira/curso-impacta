var canvas;			//o elemento canvas
var ctx;			//o "contexto" da canvas (2D ou 3D)
var dx = 5;			//a taxa de variação horizontal do objeto
var dy = 5;			//a taxa de variação vertical do objeto
var x = 250;		//posição horizontal do objeto
var y = 100;		//posição vertical do objeto
var WIDTH = 1000;	//largura canvas
var HEIGHT = 500;	//altura canvas

function Desenhar() {
    var cor = "red";
    ctx.beginPath();
    ctx.fillStyle = cor;
    ctx.arc(x, y, 15, 0, Math.PI * 2, true);
    ctx.fill();
}

function LimparTela() {
    ctx.fillStyle = "white";
    ctx.strokeStyle = "black";
    ctx.beginPath();
    ctx.rect(0, 0, WIDTH, HEIGHT);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
}

function Iniciar() {
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    return setInterval(Atualizar, 10);
}

function KeyDown(evt) {
    switch (evt.keyCode) {
        case 38:  /*seta para cima */
            if (y - dy > 0) {
                y -= dy;
            }
            break;
        case 40:  /*set para baixo*/
            if (y + dy < HEIGHT) {
                y += dy;
            }
            break;
        case 37:  /*set para esquerda*/
            if (x - dx > 0) {
                x -= dx;
            }
            break;
        case 39:  /*seta para direita*/
            if (x + dx < WIDTH) {
                x += dx;
            }
            break;
    }
}

function Atualizar() {
    LimparTela();    
    Desenhar();
}
window.addEventListener('keydown', KeyDown, true);
Iniciar();