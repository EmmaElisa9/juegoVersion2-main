var alien1,alienIMG;
var piso,plataforma1,plataforma2,plataforma3, plataforma4,IMG,IMG2;
var score,i=0;
var piezas;
var Nivel1;
var gameState = Nivel1;

var pieza1,pieza2,pieza3,pieza4,pieza5,pieza6;

function preload(){
  //cargar animaciones
  alienIMG = loadAnimation("sprite_0.png","sprite_1.png");

  IMG = loadImage("tierra.jpg");
  IMG2 = loadImage("tierra2.jpg");
}

function setup(){
  createCanvas(windowWidth,windowHeight);
  alien1 = createSprite(400,50, 50, 50);
  alien1.debug = true;
  alien1.setCollider("rectangle",0,0,alien1.width-5,alien1.height+45);
  alien1.addAnimation("1",alienIMG);

  piso = createSprite(width/2,height-2,width,30);
  piso.addImage(IMG);

  plataforma1 = createSprite(width/2,height-500,width-200,20);
  plataforma1.addImage(IMG);
  plataforma1.scale=0.65;

  plataforma2 = createSprite(width/2+600,height-300,width-100,20);
  plataforma2.addImage(IMG);
  plataforma2.scale=0.65;

  plataforma3 = createSprite(width/2-100,height-140,width-100,20);
  plataforma3.addImage(IMG);
  plataforma3.scale=0.65;

  plataforma4 = createSprite(width-1320,height-500,100,20);
  plataforma4.addImage(IMG);
  plataforma4.scale=0.2;

  pieza1 = createSprite(250,height-20, 20, 20);
  pieza1.visible = false;

  pieza2 = createSprite(300,height-20, 20, 20);
  pieza2.visible = false;

  pieza3 = createSprite(350,height-20, 20, 20);
  pieza3.visible = false;

  pieza4 = createSprite(400,height-20, 20, 20);
  pieza4.visible = false;

  pieza5 = createSprite(450,height-20, 20, 20);
  pieza5.visible = false;

  pieza6 = createSprite(450,height-20, 20, 20);
  pieza6.visible = false;

  score=0;
}

function draw(){
  background(IMG2);

  alien1.collide(piso);
  alien1.velocity.x = 0;


  //funcionamiento de el alien
  if(keyDown(UP_ARROW)){
    alien1.setVelocity(0,-10);
    //console.log(1);
  }

  if(keyDown(DOWN_ARROW)){
    alien1.setVelocity(0,10);
    //console.log(1);
  }

  if(keyDown(LEFT_ARROW)){
    alien1.setVelocity(-5,0);
    //console.log(1);
  }

  if(keyDown(RIGHT_ARROW)){
    alien1.setVelocity(5,0);
    //console.log(1);
  }

  if(alien1.collide(plataforma1)||alien1.collide(plataforma2)||alien1.collide(plataforma3)||alien1.collide(plataforma4)){
    alien1.velocity.y = 0;
  }
  else{
    alien1.velocity.y += 0.8;
  }

  
  //nivel 1
  if(gameState===Nivel1){
    nivel1();
    console.log(1);
  }
  else{
    console.log(2);
  }
  //nivel 2
  //nivel 3
  //nivel 4
  //nivel 5


  drawSprites();
  //console.log(1);
}

function nivel1(){

  alien1.collide(plataforma1);
  alien1.collide(plataforma2);
  alien1.collide(plataforma3);
  alien1.collide(plataforma4);

  pieza1.visible = true;
  pieza2.visible = true;
  pieza3.visible = true;
  pieza4.visible = true;
  pieza5.visible = true;


    for(a=1;a<7;a++){
      piezas="pieza"+a;
      console.log(piezas);
      /*if(piezas&&alien1.collide(piezas)){
        score++;
        //piezas.remove();
        i++;
      }
      i=0;*/
    }
  
  /*if(Tocando(alien1,pieza1)){
    score++;
  }
  else{
    score=score;
  }*/

  //fill("blue");
  textSize(30);
  text("piezas: "+score,200,30);

}