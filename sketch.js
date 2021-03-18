var canvas;
var music;
var mainRect,rec1,rec2,rec3,rec4;

function preload(){
    
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    mainRect=createSprite(20,750,50,20);
    mainRect.shapeColor="white";
    rec1=createSprite(50,500,50,20);
    rec1.shapeColor="green";
    rec2=createSprite(70,500,50,20);
    rec2.shapeColor="red";
    rec3=createSprite(90,500,50,20);
    rec3.shapeColor="blue";
    rec4=createSprite(110,500,50,20);
    rec4.shapeColor="yellow";
    mainRect.velocityX=2;
    music.play();

    //create 4 different surfaces



    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    if(mainRect.isTouching(rec1)){
        mainRect.shapeColour="pink";
        mainRect.bounceOff(rec1);
        mainRect.velocityX=0;
        music.stop();
    }
    if(mainRect.isTouching(rec2)){
        mainRect.shapeColour="cyan";
        mainRect.bounceOff(rec2);
        mainRect.velocityX=0;
        music.stop();
    }
    if(mainRect.isTouching(rec3)){
        mainRect.shapeColour="orange";
        mainRect.bounceOff(rec3);
        mainRect.velocityX=0;
        music.stop();
    }
    if(mainRect.isTouching(rec4)){
        mainRect.shapeColour="brown";
        mainRect.bounceOff(rec4);
        mainRect.velocityX=0;
        music.stop();
    }

    drawSprites();


    //add condition to check if box touching surface and make it box
}
