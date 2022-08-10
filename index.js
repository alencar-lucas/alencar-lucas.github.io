var tela = document.querySelector('canvas');
var pincel = tela.getContext('2d');
pincel.fillStyle = 'lightgray';
pincel.fillRect(0,0,1900,950);



var raio = 10;
var xAleatorio;
var yAleatorio;

function desenhacirculo(x,y,raio,cor){
    pincel.fillStyle = cor;
    pincel.beginPath();
    pincel.arc(x,y,raio,0,2*Math.PI);
    pincel.fill();
}

function limpaTela(){
    pincel.clearRect(0,0,1900,950);
}

function desenhaAlvo(x,y){

desenhacirculo(x,y,raio+20,'red');
desenhacirculo(x,y,raio+10,'white');
desenhacirculo(x,y,raio,'red');
}

function sorteiaPos(max){
    return Math.floor(Math.random()*max);
}

function atualizaTela(){
    limpaTela();
    xAleatorio = sorteiaPos(1900);
    yAleatorio = sorteiaPos(950);
    desenhaAlvo(xAleatorio, yAleatorio);
}

setInterval(atualizaTela,900);

function dispara(evento){
    var x = evento.pageX - tela.offsetLeft;
    var y = evento.pageY - tela.offsetTop;
    
    if((x> xAleatorio - raio) && (x < xAleatorio + raio) && (y > yAleatorio - raio) && (y < yAleatorio + raio)){ 
    Swal.fire({
        title: 'Passados dois milênios, o ser humano superou a velocidade do alvo, ufa!! Parabens.',
        width: 600,
        padding: '4em',
        color: '#716add',
        background: '#fff url(',
        backdrop: `
          rgba(0,0,123,0.4)
          url("https://www.nyan.cat/cats/balloon.gif")
          left top
          no-repeat
        `
      })
    }
}
tela.onclick = dispara;
