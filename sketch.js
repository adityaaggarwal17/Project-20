var tom,jerry,garden
var catImg,catImg2,catImg4,mouseImg,gardenImg;
var mouse1,mouse2,mouse3,mouse4;
function preload() {
    //load the images here
    gardenImg = loadImage("images/garden.png");
    catImg = loadAnimation("images/cat1.png");
    catImg2 = loadAnimation("images/cat2.png","images/cat3.png");
    catImg4 = loadAnimation("images/cat4.png");
    mouse1 = loadAnimation("images/mouse1.png");
    mouse2 = loadAnimation("images/mouse2.png","images/mouse3.png");
    mouse4 = loadAnimation("images/mouse4.png");


}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    tom = createSprite(870,600);
    tom.addAnimation("cat1",catImg);
    tom.scale = 0.2
    jerry = createSprite(200,600);
    jerry.addAnimation("m1",mouse1);
    jerry.scale = 0.2




}

function draw() {

    background(gardenImg);
    //Write condition here to evalute if tom and jerry collide
    if(tom.x - jerry.x < (tom.width - jerry.width)/2){
        tom.velocityX=0
        tom.addAnimation("stopping",catImg4);
        tom.changeAnimation("stopping",catImg4);
        tom.x=300
        jerry.addAnimation("searching",mouse4);
        jerry.changeAnimation("searching",mouse4);
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW){
      tom.velocityX=-5
      tom.addAnimation("running",catImg2);
      tom.changeAnimation("running",catImg2);
      jerry.addAnimation("teasing",mouse2)
      jerry.changeAnimation("teasing",mouse2)
  }


}
