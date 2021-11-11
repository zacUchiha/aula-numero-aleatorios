var trex, trex_correndo;
var solo, imagemDoSolo, soloInvisivel;

function preload(){
  trex_correndo = loadAnimation("trex1.png", "trex3.png", "trex4.png");
  imagemDoSolo = loadImage("ground2.png");
}

function setup() {
  createCanvas(600, 200);
  trex = createSprite(35,150,20,50);
  trex.scale = 0.5;
  solo = createSprite(300,170,600,20);
  solo.addImage("ground", imagemDoSolo);
  
  //criando movimento de corrida
  trex.addAnimation("correndo", trex_correndo);
  solo.x = solo.width / 2;
  
  soloInvisivel = createSprite(300,200,600,20);
  soloInvisivel.visible = false;

}
function draw(){
  
  background("white");
  solo.velocityX = -4;

  if(keyDown('space') && trex.y >= 166){
    trex.velocityY = -10;
  }
  
  if(solo.x < 0){
    solo.x = solo.width / 2;
  }
  
  // ação da gravidade
  trex.velocityY = trex.velocityY + 0.5;
  
  //barreira do chão
  trex.collide(soloInvisivel);
  
  drawSprites();
}

