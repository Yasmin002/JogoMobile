
window.onload = function(){
inicioJogo();
}

function inicioJogo(){
areaJogo.start();
personagem = componente("#00CED1", 10, 120, 60, 60); 
}
let areaJogo = {
  canvas: document.createElement("canvas"),
  start: function(){ 
    this.canvas.height = 300,
    this.context = this.canvas.getContext("2d");
    document.body.insertBefore(this.canvas, document.body.childNodes[0]);
  }
}

function componente(cor, x, y, largura, altura){
this.altura = altura,
this.largura = largura,
this.x = x,
this.y = y
contexto = areaJogo.context;
contexto.fillStyle = cor,
contexto.fillRect(this.x,this.y, this.altura, this.largura);
}