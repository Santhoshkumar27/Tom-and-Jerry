var tom,tomimg1,tomimg2;
var jerry,jerryimg1,jerryimg2;
var gardenimg;



function preload() {
    //load the images here
    gardenimg=loadImage("images/garden.png");
    tomimg1=loadAnimation("images/cat1.png");
    jerryimg1=loadAnimation("images/mouse1.png");
    tomimg2=loadAnimation("images/cat2.png");
    jerryimg2=loadAnimation("images/mouse2.png");
    tomimg3=loadAnimation("images/cat3.png");
    jerryimg3=loadAnimation("images/mouse3.png");
    tomimg4=loadAnimation("images/cat4.png");
    jerryimg4=loadAnimation("images/mouse4.png");



}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
   
    tom=createSprite(800,600,100,100);
    tom.addAnimation("tomstart",tomimg1);
    tom.changeAnimation("tomstart");
    
    tom.scale=0.25;

    


    jerry=createSprite(200,600,100,100);
    jerry.addAnimation("jerrystart",jerryimg1);
    jerry.changeAnimation("jerrystart");
    jerry.scale=0.25;
    

}

function draw() {

    background(gardenimg);
    //Write condition here to evalute if tom and jerry collide
    if(tom.x - jerry.x < (tom.width-jerry.width)/2){
     
        tom.velocityX=0;
        tom.x=400;

    tom.addAnimation("tom",tomimg4);
    tom.changeAnimation("tom");
    

    jerry.addAnimation("mouse",jerryimg4);
    jerry.changeAnimation("mouse");
    
    }


    

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if (keyCode === LEFT_ARROW){
      jerry.addAnimation("mouseteasing",jerryimg2);
      jerry.changeAnimation("mouseteasing");
      jerry.frameDelay=25;
      tom.velocityX=-3;

      tom.addAnimation("tomw",tomimg3);
    tom.changeAnimation("tomw");
    tom.frameDelay=25;

  }
  if (keyCode === RIGHT_ARROW){
    jerry.addAnimation("mouset",jerryimg3);
    jerry.changeAnimation("mouset");
    jerry.frameDelay=25;
    tom.addAnimation("tomw1",tomimg2);
    tom.changeAnimation("tomw1");
    tom.frameDelay=25;
}


}
